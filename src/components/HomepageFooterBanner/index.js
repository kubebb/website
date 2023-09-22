import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function HomepageFooterBanner() {
  return (
    <section className={styles.footerBanner}>
      <div className="container">
        <div className={styles.title}>在 Kubernetes 上以搭积木的方式构建自己的服务门户</div>
      </div>
    </section>
  );
}
