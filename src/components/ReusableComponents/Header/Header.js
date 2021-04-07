import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  const name = 'Emelie Edman';
  const profession = 'Front End Developer & Digital Designer';

  return (
    <div to="home-page" className={styles.container}>
      <h1 className={styles.name}>{name}</h1>
      <h2 className={styles.profession}>{profession}</h2>
    </div>
  );
};

export default Header;
