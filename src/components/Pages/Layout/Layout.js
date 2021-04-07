import React, { useState } from 'react';
import { AnimatePresence, motion, transform, useCycle } from 'framer-motion';

import styles from './Layout.module.css';
import Header from '../../ReusableComponents/Header/Header';
import ProfileImg from '../../ReusableComponents/ProfileImg/ProfileImg';

const Layout = () => {
  const [animate, cycle] = useCycle(
    { scale: 1, rotate: 0 },
    { scale: 1.25, rotate: 90, x: '-40vw' }
  );

  const [isHeaderClicked, setIsHeaderClicked] = useState(false);

  const toggle = () => {
    setIsHeaderClicked(!isHeaderClicked);
    console.log(isHeaderClicked);
  };

  return (
    <>
      <motion.div
        className={styles.header}
        animate={animate}
        onTap={() => {
          cycle();
          toggle();
        }}
        transition={{ duration: 1, type: 'spring', stiffness: 90 }}
      >
        <Header />
      </motion.div>
      {isHeaderClicked && (
        <motion.div
          className={styles.profileImg}
          initial={{ x: '-30vw', y: '-100vh' }}
          animate={{ x: '-30vw', y: '-40vh' }}
          transition={{
            delay: 0.3,
            duration: 0.2,
            type: 'spring',
            stiffness: 100,
          }}
        >
          <ProfileImg />
        </motion.div>
      )}
    </>
  );
};

export default Layout;
