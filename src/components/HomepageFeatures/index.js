import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '提供底座服务，快速开启搭建',
    Svg: require('@site/static/img/buidling-block.svg').default,
    description: (
      <>
        提供账号、认证(OIDC)、权限(RBAC)、审计(Audit)的基础功能，采用更加标准的技术方式提供构建的底座服务
      </>
    ),
  },
  {
    title: '内核驱动的声明式组件管理',
    Svg: require('@site/static/img/open-market.svg').default,
    description: (
      <>
        提供声明式的组件仓库管理、组件同步、组件订阅部署以及多维度的组件评级,完整适配Helm生态,集成微前端框架
      </>
    ),
  },
  {
    title: '灵活的组件开发模式',
    Svg: require('@site/static/img/component-arch.svg').default,
    description: (
      <>
        基于微前端框架和低代码开发，定义了标准的组件封装及发布模式，让开发者可以在底座之上按照开发规范进行组件的快速开发和发布，并在统一的服务门户上对外提供服务
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
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
