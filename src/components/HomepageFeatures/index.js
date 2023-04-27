import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '提供底座服务，快速开启搭建',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        基于 Kubernetes 提供了账号、认证（OIDC）、权限（RBAC）、审计（Audit）的基础功能，采用更加标准的技术方式提供构建的底座服务
      </>
    ),
  },
  {
    title: '可扩展的组件管理模式',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        基于微前端框架、低代码开发，定义了标准的组件封装及发布模式，让开发者可以在底座之上按照开发规范进行组件的快速开发及部署，并在统一的服务门户上对外提供服务
      </>
    ),
  },
  {
    title: '开放、共享的组件市场生态',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        基于 Kubebb 构建的组件均可通过开放的市场进行共享，并可以下载并部署在自己的服务门户上，让用户选择适合自己的组件进行服务的管理
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
