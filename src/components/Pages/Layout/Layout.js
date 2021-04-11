import React, { useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
//scroll behaviour
import { useInView } from 'react-intersection-observer';

import styles from './Layout.module.css';
import Signature from '../../ReusableComponents/Signature/Signature';

const Layout = () => {
  const animation = useAnimation();
  const [contentRef, inView] = useInView({
    rootMargin: '-300px',
  });
  return (
    <div className={styles.center}>
      <Signature subtitle={'front end developer & digital designer'} />
    </div>
  );
};

export default Layout;
