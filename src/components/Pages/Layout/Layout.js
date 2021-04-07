import React, { useState } from 'react';
import { AnimatePresence, motion, transform, useCycle } from 'framer-motion';

import styles from './Layout.module.css';
import Header from '../../ReusableComponents/Header/Header';
import ProfileImg from '../../ReusableComponents/ProfileImg/ProfileImg';
import MobileMockUp from '../../ReusableComponents/MobileMockUp/MobileMockUp';

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
    setIsProjectsClicked(!isProjectsClicked);
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
        <Header
          title={'Emelie Edman'}
          subtitle={'Front End Developer & Digital Designer'}
        />
      </motion.div>
      {isHeaderClicked && (
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
          initial={{ y: '30vh', x: '-10vw' }}
          animate={{ y: '-5vh', x: '-10vw' }}
          transition={{
            delay: 0.7,
            type: 'spring',
            stiffness: 80,
          }}
        >
          <Header title={'Projects'} />
        </motion.div>
      )}
      {isProjectsClicked && (
        <motion.div>
          <MobileMockUp />
        </motion.div>
      )}
    </>
  );
};

export default Layout;
