import React from 'react';
import styles from './StartPage.module.css';

const StartPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.name}>Emelie Edman</h1>
      <h2 className={styles.profession}>
        Front End Developer {'&'} Digital Designer
      </h2>
    </div>
  );
};

export default StartPage;
