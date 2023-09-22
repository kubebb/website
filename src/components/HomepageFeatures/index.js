import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '提供底座服务，快速开启搭建',
    description: (
      <>
        提供账号、认证(OIDC)、权限(RBAC)、审计(Audit)的基础功能，采用更加标准的技术方式提供构建的底座服务
      </>
    ),
  },
  {
    title: '内核驱动的声明式组件管理',
    description: (
      <>
        提供声明式的组件仓库管理、组件同步、组件订阅部署以及多维度的组件评级,完整适配Helm生态,集成微前端框架
      </>
    ),
  },
  {
    title: '灵活的组件开发模式',
    description: (
      <>
        基于微前端框架和低代码开发，定义了标准的组件封装及发布模式，让开发者可以在底座之上按照开发规范进行组件的快速开发和发布，并在统一的服务门户上对外提供服务
      </>
    ),
  },
];

function Feature({ idx, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <div className={clsx(styles.bg, styles['bg' + idx])} />
      </div>
      <div className="text--center padding-horiz--md">
        <div className={styles.title}>{title}</div>
        <div className={styles.desc}>{description}</div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(props) {
  return (
    <section className={clsx(styles.features, props.isDark ? styles.dark : undefined)}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} idx={idx + 1} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
