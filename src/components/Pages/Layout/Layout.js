import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
//scroll behaviour
import { useInView } from 'react-intersection-observer';

import styles from './Layout.module.css';
import Signature from '../../ReusableComponents/Signature/Signature';

const Layout = () => {
  const animation = useAnimation();
  const [contentRef, inView] = useInView({
    rootMargin: '-50px',
  });

  useEffect(() => {
    if (inView) {
      animation.start('visible');
    }
  }, [animation, inView]);

  return (
    <motion.div
      className={styles.signature}
      ref={contentRef}
      animate={animation}
      initial="hidden"
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 7, ease: [0.6, 0.05, -0.01, 0.9] },
        },
        hidden: {
          opacity: 0,
          y: 72,
        },
      }}
    >
      <Signature subtitle={'front end developer & digital designer'} />
    </motion.div>
  );
};

export default Layout;
