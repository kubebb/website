import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageFrames from '@site/src/components/HomepageFrames';
import HomepageFooterBanner from '@site/src/components/HomepageFooterBanner';

import styles from './index.module.css';

function HomepageHeader({ isDark }) {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx(isDark ? styles.dark : undefined)}>
      <div className={clsx(styles.heroBanner)}>
        <div className="container">
          <div className="row">
            <div className={clsx('col col--8')}>
              <div className={styles.title}>{siteConfig.title}</div>
              <div className={styles.subtitle}>{siteConfig.tagline}</div>
              <div className={styles.buttons}>
                <Link
                  className={styles['banner-button']}
                  to="/docs/quick-start/prerequisite">
                  教程-5min →
                </Link>
              </div>
            </div>
            <div className={clsx('col col--4')}>
              <div className={styles.videoWrapper} onClick={() => {
                window.open('https://cdn.tenxcloud.com/kubebb/kubebb_intro.mp4')
              }}>
              </div>
            </div>
          </div>
          <div className={styles.circle1}>
          </div>
          <div className={styles.circle2}>
          </div>
        </div>
      </div>
      <div className={clsx('container', styles.clickcards)}>
        <div className="row">
          <Link to="/docs/intro" className={clsx('col col--4', styles.cardItem)}>
            <div className={styles.cardtitle}>核心技术</div>
            <div className={styles.carddesc}>由内核驱动的组件生命周期管理，集成云原生底座和低码组件，整合实现云原生三层组件模式</div>
            <div className={clsx(styles.carddesc, styles.cardjoin)}>了解更多 →</div>
          </Link>
          <Link to="/docs/quick-start/prerequisite" className={clsx('col col--4', styles.cardItem)}>
            <div className={styles.cardtitle}>使用教程</div>
            <div className={styles.carddesc}>通过本教程，可以快速搭建一个基于 Kubebb 的门户底座，并开发一个自己的 Hello world 组件，部署到门户上进行体验</div>
            <div className={clsx(styles.carddesc, styles.cardjoin)}>了解更多 →</div>
          </Link>
          <Link href="https://github.com/kubebb/core/issues" target="_blank" className={clsx('col col--4', styles.cardItem)}>
            <div className={styles.cardtitle}>开源社区</div>
            <div className={styles.carddesc}>加入社区获得帮助，参与互动并获取 Kubebb 的最新消息！</div>
            <div className={clsx(styles.carddesc, styles.cardjoin)}>加入我们 →</div>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const [isDark, setIsDark] = React.useState(window?.localStorage.getItem('theme') === 'dark');
  React.useEffect(() => {
    window.addEventListener('storage', (e) => {
      if (e.key === 'theme') {
        setIsDark(e.newValue === 'dark')
      }
    })
  }, [window?.localStorage.getItem('theme')])
  return (
    <Layout
      title={`Homepage of ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader isDark={isDark} />
      <main>
        <HomepageFeatures isDark={isDark} />
        <HomepageFrames isDark={isDark} />
        <HomepageFooterBanner isDark={isDark} />
      </main>
    </Layout>
  );
}
