import React from 'react';
import styles from './ProfileImg.module.css';
import img from '../../../assets/profileImg.png';

const ProfileImg = () => {
  return <img src={img} className={styles.profileImg} />;
};

export default ProfileImg;
