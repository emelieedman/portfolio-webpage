import React from 'react';
import styles from './Header.module.css';

const Header = ({ title, subtitle }) => {
  return (
    <div to="home-page" className={styles.container}>
      {title && <h1 className={styles.title}>{title}</h1>}
      {subtitle && <h2 className={styles.subtitle}>{subtitle}</h2>}
    </div>
  );
};

export default Header;
