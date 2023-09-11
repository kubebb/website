---
sidebar_position: 3
---

# 配置审计能力

:::tip
注意，审计功能依赖对审计日志的采集功能，需要在集群设置中配置日志服务 ElasticSearch 的地址，日志服务的配置参考[日志组件](../../component-market/logging.md)
:::

1、编辑 audit-policy.yaml 文件对审计进行配置，```kubectl edit cm audit-policy-conf -n u4a-system```

按照以下模式进行定义：
```yaml
apiVersion: audit.k8s.io/v1beta1
kind: Policy
# Don't generate audit events for all requests in RequestReceived stage.
omitStages:
  - "RequestReceived"
rules:
  # Don't audit namespace: kube-system/cluster-system/system-bigdata
  - level: None
    resources:
    - group: "" # core API group
      resources: ["secrets", "configmaps"]
    namespaces: ["kube-system", "cluster-system", "system-bigdata"]
  # Only enable 'write' verbs audit log for secret and configmap
  - level: Metadata
    verbs: ["create","delete","deletecollection","patch","update"]
    resources:
    - group: "" # core API group
      resources: ["secrets", "configmaps"]
```
各个组件，需要根据自己的资源类型，来针对性的将自己的资源添加到审计的 rule 列表中，默认对写操作进行审计即可。

2、配置 kube-apiserver 参数（也可以在 kube-oidc-proxy 上进行类似的配置，在无法操作原有 K8S 集群的条件下，使用 kube-oidc-proxy 的配置），添加：
```
# 审计策略配置文件地址
    - --audit-policy-file=/etc/kubernetes/pki/audit-policy.yaml
# 审计日志的路径文件
    - --audit-log-path=/var/log/apiserver/audit/audit.log
# 日志保存策略
    - --audit-log-maxage=7
    - --audit-log-maxbackup=10
    - --audit-log-maxsize=10
```
如果是在 K8S 上直接修改，则需要修改 /etc/kubernetes/manifests/kube-apiserver.yaml 来添加该参数，修改后确认 kube-apiserver 容器发生重启，此时配置才能生效

3、配置 fluentd 进行采集（索引模版跟原来的 fluentd 冲突，所以需要单独的fluentd 进程专门采集 master 上的审计日志。
目前测试方法，从原有的 fluentd daemonset 复制一个，修改 ds 的名字，并使用以下配置文件进行挂载即可：
```yaml
apiVersion: v1
data:
  fluent.conf: |2
        # for audit log
        <source>
          @type tail
          @id in_tail_kube_apiserver_audit
          multiline_flush_interval 5s
          path /var/log/apiserver/audit/audit.log
          pos_file /var/log/kube-apiserver-audit.log.pos
          tag kube-apiserver-audit
          <parse>
            @type json
            keep_time_key true
            time_key timestamp
            time_format %Y-%m-%dT%T.%L%Z
          </parse>
        </source>

        ## Used for health check
        <source>
          @type http
          port 9880
          bind 0.0.0.0
        </source>

        ## sink all log to elasticsearch directly
        <match **>
          @type elasticsearch
          @log_level debug
          include_tag_key true
          host elasticsearch-logging
          port 9200
          user "#{ENV['ES_USERNAME']}"
          password "#{ENV['ES_PASSWORD']}"
          scheme "#{ENV['ES_SCHEME']}"
          ca_file /etc/fluent/certs/ca.crt
          logstash_prefix audit-k8s
          logstash_format true
          # Set the chunk limit the same as for fluentd-gcp.
          reload_on_failure   true
          reconnect_on_error  true
          request_timeout 120s
          <buffer>
            @type file
            path /var/log/td-agent/buffer/elasticsearch
            chunk_limit_size 15MB
            total_limit_size 20GB
            flush_interval 3s
            flush_thread_count 8
            flush_mode interval
            # Never wait longer than 5 minutes between retries.
            retry_timeout 300
            retry_forever true
          </buffer>
        </match>
kind: ConfigMap
metadata:
  labels:
    component: fluentd
    k8s-app: fluentd
  # 新的 fluentd 使用这个 configmap
  name: fluentd-audit
  namespace: kube-system
```
注意：
* 新的 fluentd daemonset 只需要启动在 kube-oidc-proxy 部署的节点上（通过节点亲和性配置）
* 将使用的 configmap 修改为上面的，名字 fluentd-audit

4、最终在 es 里的审计记录格式如下，可以通过查询 es 来获取审计日志
```yaml
{
  "_index": "logstash-2022.08.20",
  "_type": "fluentd",
  "_id": "iRzLu4IBqmHyli33qpUa",
  "_version": 1,
  "_score": null,
  "_source": {
    "kind": "Event",
    "apiVersion": "audit.k8s.io/v1",
    "level": "Metadata",
    "auditID": "7c0072aa-b48a-4772-bc52-42e50c0e65ce",
    "stage": "ResponseComplete",
    "requestURI": "/api/v1/namespaces/addon-system/configmaps/42c733ea.clastix.capsule.io",
    "verb": "update",
    "user": {
      "username": "system:serviceaccount:addon-system:default",
      "uid": "c8cb442d-853c-4a53-9c83-c7a1520095c4",
      "groups": [
        "system:serviceaccounts",
        "system:serviceaccounts:addon-system",
        "system:authenticated"
      ]
    },
    "sourceIPs": [
      "172.22.96.146"
    ],
    "userAgent": "manager/v0.0.0 (linux/amd64) kubernetes/$Format/leader-election",
    "objectRef": {
      "resource": "configmaps",
      "namespace": "addon-system",
      "name": "42c733ea.clastix.capsule.io",
      "uid": "c4542d46-0e07-41be-8420-f912a2918e51",
      "apiVersion": "v1",
      "resourceVersion": "236579314"
    },
    "responseStatus": {
      "metadata": {},
      "code": 200
    },
    "requestReceivedTimestamp": "2022-08-20T15:07:41.991582Z",
    "stageTimestamp": "2022-08-20T15:07:42.000098Z",
    "annotations": {
      "authentication.k8s.io/legacy-token": "system:serviceaccount:addon-system:default",
      "authorization.k8s.io/decision": "allow",
      "authorization.k8s.io/reason": "RBAC: allowed by ClusterRoleBinding \"t7d.io.capsule-manager-rolebinding\" of ClusterRole \"cluster-admin\" to ServiceAccount \"default/addon-system\""
    },
    "@timestamp": "2022-08-20T15:07:42.000871648+00:00",
    "tag": "kube-apiserver-audit"
  },
  "fields": {
    "requestReceivedTimestamp": [
      "2022-08-20T15:07:41.991Z"
    ],
    "stageTimestamp": [
      "2022-08-20T15:07:42.000Z"
    ],
    "@timestamp": [
      "2022-08-20T15:07:42.000Z"
    ]
  },
  "sort": [
    1661008062000
  ]
}
```
5、如果不是标准的 K8S 资源类型的审计，应用/服务可以自己将审计写入到 /var/log/apiserver/audit 目录，比如命名为 service-audit.log，格式符合 K8S audit 消息格式即可，参考以下单条审计记录的格式：
```
{"kind":"Event","apiVersion":"audit.k8s.io/v1","level":"Metadata","auditID":"8d8d8163-54e8-457d-94f6-7851e887f3cf","stage":"ResponseComplete","requestURI":"/api/v1/namespaces/u4a-system/secrets/sh.helm.release.v1.u4a-system.v1","verb":"delete","user":{"username":"admin","groups":["system:nodes","iam.tenxcloud.com"]},"sourceIPs":["172.16.31.254"],"userAgent":"helm/v0.0.0 (darwin/amd64) kubernetes/$Format","objectRef":{"resource":"secrets","namespace":"u4a-system","name":"sh.helm.release.v1.u4a-system.v1","apiVersion":"v1"},"responseStatus":{"metadata":{},"code":200},"requestReceivedTimestamp":"2022-08-24T05:36:36.524760Z","stageTimestamp":"2022-08-24T05:36:36.529890Z"}
```
其中，重点关注的数据如下：
```
1）kind，统一用 ”Event“，查询只查询 Event 的审计

2）stage：目前都是“ResponseComplete“，只记录了响应结束的时间，没记录请求收到的时间

3）verb：增删改查

4）user.username，操作人

5）sourceIPs：客户端 IP

6）objectRef.resource：操作的资源

7）objectRef.namespace：操作的项目/namespace

8）responseStatus.code：返回代码

9）requestReceivedTimestamp：请求到达时间
```