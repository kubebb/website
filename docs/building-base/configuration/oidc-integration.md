---
sidebar_position: 4
---

# 集成单点登录

通过 OIDC 协议，实现同 kubebb 的统一账号、认证及单点登录功能。

## 1. 在 kubebb 服务端注册 OIDC 客户端
通过修改 dex-server 使用的 ConfigMap 来添加 client：
```
kubectl edit cm oidc-server -n u4a-system
```
在 staticClients 处添加一个新的客户端，参考：
```yaml
  staticClients:
  - id: my-oidc-client
    name: my-oidc-client
    secret: ZXhhbXBsZS1hcHAtc2VjcmV0   # 这里填写随机密钥，注意不要泄漏密钥
    redirectURIs: # 这里可以配置多个回调地址
    - "<my-oidc-client-callback-address>" # 这里填写登录成功后的回调地址，例如 "http://192.168.1.32:8022"
```
重启 oidc-server

```
kubectl delete <oidc-server-pod> -n u4a-system
```

## 2.  接入 OIDC 登录
1. **环境信息示例**

	* 应用地址：http://192.168.1.32:8022
	* kubebb 认证服务地址（issuer）：https://192.168.2.216/oidc

2. **应用注册信息**

	* 应用名称：my-oidc-client
	* 回调地址：http://192.168.1.32:8022/auth/callback
	* client_id：my-oidc-client
	* client_secret：ZXhhbXBsZS1hcHAtc2VjcmV0

3. **用户登录**

* 在应用侧，一般会引用相关的 OIDC SDK 来处理 OIDC 相关的处理流程，来帮助开发者简化交互流程，比如 golang 可以使用：https://github.com/coreos/go-oidc

这里介绍如何通过 API 调用，来实现 OIDC 单点登录的基本流程：

1）用户访问应用界面，应自动重定向到 kubebb 认证服务登陆 URL，URL 示例如下：
```
https://192.168.2.216/oidc/auth?client_id=my-oidc-client&redirect_uri=http://192.168.1.32:8022/auth/callback&response_type=code&scope=openid+profile+email+offline_access
```


| 参数名称        | 描述                                                                |
| -------------- | -------------------------------------------------------------------|
| client_id      | 应用 ID，注册阶段由 kubebb 提供，如：my-oidc-client                    |
| redirect_uri   | 应用回调地址，注册阶段由应用提供，如：http://192.168.1.32:8022/auth/callback |
| response_type  | 固定值：code                                                        |
| scope          | 固定值：openid profile email                                        |

2）在 kubebb 的登陆页面，用户输入用户名/密码登陆（如果用户已经登陆，这步会自动跳过）

3）登录成功后，跳转回应用注册的回调地址，跳转示例如下：

```
http://192.168.1.32:8022/auth/callback?code=kf7dmmvhdipdcjczydklwi6pu&state=<state-info>
```

| 参数名称        | 描述                                                               |
| -------------- | -------------------------------------------------------------------|
| code           | 授权码，由 kubebb 认证服务 生成，用于后面获取 token                           |
| state          | 与应用跳转到 kubebb 认证服务登陆 URL 时传递的 state 值一样。                           |

4）应用后台调用 kubebb token API 获取 token 信息，调用示例如下：
```
curl -XPOST 'https://192.168.2.216/oidc/token' \
	-H 'Authorization: Basic c2FtcGxlLWFwcC0yMTg6WlhoaGJYQnNaUzFoY0hBdGMyVmpjbVYwJw==' \
	-H 'Content-Type: application/x-www-form-urlencoded' \
	--data-urlencode 'code=kf7dmmvhdipdcjczydklwi6pu' \
	--data-urlencode 'grant_type=authorization_code' \
	--data-urlencode 'redirect_uri=http://192.168.1.32:8022/auth/callback'
```

| 参数名称        | 描述                                                                |
| -------------- | -------------------------------------------------------------------|
| Authorization  | 格式 Basic XXXX，其中 XXXX 是 client_id:client_secret 的 base64 编码             |
| Content-Type   | 固定值：application/x-www-form-urlencoded                                                        |
| code           | 授权码                                                                  |
| grant_type     | 固定值：authorization_code                                             |
| redirect_uri   | 应用回调地址，kubebb 认证服务会验证该地址是否与应用注册的回调地址一致            |

该请求会返回token信息
```
ID Token: eyJhbGciOiJSUzI1NiIsImtpZCI6ImQxY2Y2MzA3YmQ5Yzk3OTJiMzdmMGJiM2M1Njk1ZDQ0MWJlZTMzNjcifQ.eyJpc3MiOiJodHRwczovLzE5Mi4xNjguMi4yMTYiLCJzdWIiOiJDZ0V4RWdsMFpXNTRZMnh2ZFdRIiwiYXVkIjoic2FtcGxlLWFwcC0yMTgiLCJleHAiOjE2MzAwMzA0ODEsImlhdCI6MTYyOTk0NDA4MSwiYXRfaGFzaCI6Ik1PUjk0enktTUZNcU5zZUZTM1ZzRXciLCJjX2hhc2giOiJpbkoteDVKUEFCRXhaaEpRaEx3T3pBIiwiZW1haWwiOiJhZG1pbkBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJuYW1lIjoiYWRtaW4iLCJwaG9uZSI6IjE3MzQzMTM1MDUxIiwidXNlcmlkIjoiMSJ9.FrC6oKRsManuP9opqugknJmOE78uKmxX6uteM1flCDVRqRv-riG0C5AOX4K9BTnT9GIlu3H24jydT4ybSissz_wL_mLzoTQWoQ9uMMmd4w1aiGqgO6mIaEh3XvTqtoQv1ltONSkp49bykpdIXbDJxy0PScU0k-0XFNJIMSBwn8SEubgH7NO3xwFzsjaLqBfolxC5YXBuWS8n-FEOqNTg-mx-n_Fu2oemJCT-8qWMqY6FNjRSC3D-2ABkCbl4g76vPLgJ-I6dU6eaJvaBW6S4BzhCX0SitxYrxcXjOGviX1HKOXXSUC1n1HfQpOpNW-FA2G3F-kON94rYr1AEdIwSVw

Access Token: eyJhbGciOiJSUzI1NiIsImtpZCI6ImQxY2Y2MzA3YmQ5Yzk3OTJiMzdmMGJiM2M1Njk1ZDQ0MWJlZTMzNjcifQ.eyJpc3MiOiJodHRwczovLzE5Mi4xNjguMi4yMTYiLCJzdWIiOiJDZ0V4RWdsMFpXNTRZMnh2ZFdRIiwiYXVkIjoic2FtcGxlLWFwcC0yMTgiLCJleHAiOjE2MzAwMzA0ODEsImlhdCI6MTYyOTk0NDA4MSwiYXRfaGFzaCI6IlhYS3RzUkhZS043WnZGOUFxcXVSd3ciLCJlbWFpbCI6ImFkbWluQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsIm5hbWUiOiJhZG1pbiIsInBob25lIjoiMTczNDMxMzUwNTEiLCJ1c2VyaWQiOiIxIn0.VXUxba9cy4S3ZUtyfbF6A3Xg5fZYL-m6nqR09qiJgJmNUCEkHr_b4xKXXvDJwsgoC0zdUxShd1BpOgN4vi8A7zZ676-PybB2dVT6x3EPpwCVC8_NVYwXijeELWJJ0nU9aAq6p_m-XdXOuPzutbmMLSWVfrY-CS2WSdQISuKxb28slTptzCF4OY3dZugOHZ_v10KAxsMo0Aul4d3C_EXOaiUKzw0OTD7xyYOm8MmJvhzQEYSodHAkbJWnOusKEBtFKJ5hhAqPLCymY2VleN-7Jbqr-DYrDSDtd7FF1vCbDL0-rTwQ5_79FIAu_fusOcVc26M7GlvOtGcniaweNtm1dg
```

返回的 ID Token 是标准 JWT Token，应用可以从  ID Token 中解析出用户信息，例如：
```
    {
    	"iss": "https://192.168.2.216/oidc",
    	"sub": "CgExEgl0ZW54Y2xvdWQ",
    	"aud": "sample-app",
    	"exp": 1630030481,
    	"iat": 1629944081,
    	"at_hash": "MOR94zy-MFMqNseFS3VsEw",
    	"c_hash": "inJ-x5JPABExZhJQhLwOzA",
    	"email": "admin@example.com",
    	"email_verified": true,
    	"name": "admin",
    	"phone": "17343135051",
    	"userid": "1"
    }
```
* 基于该 JWT Token，应用可以将用户基础信息同步到自己的系统内，在基于统一账号、认证的前提下，实现同自身账号、权限体系的融合。
* Access Token 一般用于访问 kubebb 认证服务获取用户详细信息，可以按需使用。
