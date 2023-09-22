import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Frame1 from '../../../static/img/home/frame1.svg';
import Frame2 from '../../../static/img/home/frame2.svg';
import Frame3 from '../../../static/img/home/frame3.svg';
import Frame4 from '../../../static/img/home/frame4.svg';

const framesList = [
  {
    tab: '应用场景',
    title: '快速搭建您的云原生平台',
    svg: <Frame1 />,
    description: (
      <>
        Kubebb 提供了多集群多租户管理、菜单管理、角色和成员管理、OIDC 认证等完善的平台基础能力。内置官方组件，通过云梯低代码组件可快速发布您的应用；通过微服务框架或服务网格统一管理和治理您的应用；通过应用性能监控统一观测服务调用，设置链路告警。同时您可发布自定义组件，例如容器服务组件，形成应用的全生命周期的管理和治理。
      </>
    ),
  },
  {
    tab: '面向云原生的架构',
    title: '面向云原生的架构',
    svg: <Frame2 />,
    description: (
      <>
        Kubebb(Kubernetes Building Blocks)是一种由内核驱动的组件生命周期管理平台，集成开箱即用的云原生底座和低码组件开发能力，整合实现云原生三层组件模式。
      </>
    ),
  },
  {
    tab: '功能架构',
    title: 'Kubebb 功能架构',
    svg: <Frame3 />,
    description: (
      <>
        kubebb部署后提供了多集群多租户管理、菜单管理、角色和成员管理、OIDC认证等完善的平台基础能力。同时还提供组件市场模块，包括官方仓库和用户自定义仓库，发布开源组件和自定义组件，实现组件共享。
      </>
    ),
  },
  {
    tab: '使用流程',
    title: 'Kubebb 使用流程',
    svg: <Frame4 />,
    description: (
      <>
        Kubebb快速安装使用流程
      </>
    ),
  },
];

export default function HomepageFrames() {
  const [ curr, setCurr ] = React.useState(0);
  const currFrame = framesList.find((_, idx) => idx === curr);
  return (
    <section className={clsx(styles.frames)}>
      <div className={clsx('container', styles.title)}>Kubebb 组件全生命周期管理平台</div>
      <div className="container">
        <div className="row">
          <div className={clsx('col col--4', styles.tabs)}>
            {
              framesList.map((item, idx) => {
                return <div
                  onClick={() => {
                    setCurr(idx)
                  }}
                  className={clsx(styles.tab, idx === curr ? styles.active : undefined)}
                  key={idx}
                >
                  {item.tab}
                </div>
              })
            }
            <div className={styles.tabBg}></div>
          </div>
          <div className={clsx('col col--8', styles.content)}>
            <div className={styles.contentTitle}>{currFrame.title}</div>
            <div className={styles.contentDesc}>{currFrame.description}</div>
            <div className={styles.contentSvg}>{currFrame.svg}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
