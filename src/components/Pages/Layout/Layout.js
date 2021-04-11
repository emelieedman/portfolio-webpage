import React, { useState } from 'react';
import { AnimatePresence, motion, transform, useCycle } from 'framer-motion';

import styles from './Layout.module.css';

import Signature from '../../ReusableComponents/Signature/Signature';
import Header from '../../ReusableComponents/Header/Header';
import ProfileImg from '../../ReusableComponents/ProfileImg/ProfileImg';
import MobileMockUp from '../../ReusableComponents/MobileMockUp/MobileMockUp';
import img from '../../../gym.png';

const staggerChildrenVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, pathLength: 0 },
  show: {
    opacity: 1,
    pathLength: 1,
    transition: { duration: 2, ease: 'easeInOut' },
  },
};

const mobileDevice = (
  <motion.svg
    className={styles.svg}
    width="311"
    height="563"
    viewBox="0 0 311 563"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <motion.path
      d="M3 536.5V27C3 13.7452 13.7452 3 27 3H284C297.255 3 308 13.7452 308 27V536.5C308 549.755 297.255 560.5 284 560.5H27C13.7452 560.5 3 549.755 3 536.5Z"
      stroke="white"
      stroke-width="5"
      variants={item}
    />
    <motion.path
      d="M35 493.5V59H276V493.5H35Z"
      stroke="white"
      stroke-width="5"
      variants={item}
    />
    <motion.path
      d="M166.545 509.814C173.088 516.158 173.242 526.612 166.894 533.152C160.546 539.692 150.093 539.85 143.556 533.5C136.745 526.884 136.917 515.893 143.925 509.486C150.365 503.598 160.281 503.739 166.545 509.814Z"
      stroke="white"
      stroke-width="6"
      variants={item}
    />
    <motion.path
      d="M134 36H176"
      stroke="white"
      stroke-width="5"
      stroke-linecap="round"
      variants={item}
    />
    <motion.image
      href={img}
      x="31px"
      y="55px"
      width="250px"
      variants={staggerChildrenVariants}
    />
  </motion.svg>
);

const Layout = () => {
  const [animate, cycle] = useCycle(
    { scale: 1, rotate: 0 },
    { scale: 1.25, rotate: 90, x: '-40vw' }
  );

  const [isHeaderClicked, setIsHeaderClicked] = useState(false);
  const [isProjectsClicked, setIsProjectsClicked] = useState(false);

  const toggleHeader = () => {
    setIsHeaderClicked(!isHeaderClicked);
    setIsProjectsClicked(false);
  };

  const onViewProjects = () => {
    setIsProjectsClicked(true);
  };

  return (
    <>
      <motion.div
        className={styles.header}
        animate={animate}
        onTap={() => {
          cycle();
          toggleHeader();
        }}
        transition={{ duration: 1, type: 'spring', stiffness: 50 }}
      >
        <Signature subtitle={'Front End Developer & Digital Designer'} />
      </motion.div>
      {isHeaderClicked && !isProjectsClicked && (
        <motion.div
          className={styles.profileImg}
          initial={{ x: '-30vw', y: '-100vh' }}
          animate={{ x: '-30vw', y: '-40vh' }}
          transition={{
            delay: 0.4,
            duration: 0.2,
            type: 'spring',
            stiffness: 100,
          }}
        >
          <ProfileImg />
        </motion.div>
      )}
      {isHeaderClicked && (
        <motion.div
          className={styles.projects}
          onClick={() => onViewProjects()}
        >
          <Header title={'Projects'} />
        </motion.div>
      )}
      {isProjectsClicked && (
        <motion.div
          className={styles.mobileMockUpsContainer}
          variants={staggerChildrenVariants}
          initial="hidden"
          animate="show"
        >
          <motion.div className={styles.mobileMockUp} id={styles.child1}>
            {mobileDevice}
          </motion.div>
          <motion.div className={styles.mobileMockUp} id={styles.child2}>
            {mobileDevice}
          </motion.div>
          <motion.div className={styles.mobileMockUp} id={styles.child3}>
            {mobileDevice}
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Layout;
