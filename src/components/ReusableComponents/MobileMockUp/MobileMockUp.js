import React from 'react';
import { motion } from 'framer-motion';

import styles from './MobileMockUp.module.css';

// const pathVariantsDelay = {
//   initial: { opacity: 0, pathLength: 0 },
//   animate: {
//     opacity: 1,
//     pathLength: 1,
//     transition: { delay: 0.5, duration: 2, ease: 'easeInOut' },
//   },
// };

const MobileMockUp = ({ hidden, show }) => {
  return (
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
        initial={hidden}
        animate={show}
      />
      <motion.path
        d="M35 493.5V59H276V493.5H35Z"
        stroke="white"
        stroke-width="5"
        initial={hidden}
        animate={show}
      />
      <motion.path
        d="M166.545 509.814C173.088 516.158 173.242 526.612 166.894 533.152C160.546 539.692 150.093 539.85 143.556 533.5C136.745 526.884 136.917 515.893 143.925 509.486C150.365 503.598 160.281 503.739 166.545 509.814Z"
        stroke="white"
        stroke-width="6"
        initial={hidden}
        animate={show}
      />
      <motion.path
        d="M134 36H176"
        stroke="white"
        stroke-width="5"
        stroke-linecap="round"
        initial={hidden}
        animate={show}
      />
    </motion.svg>
  );
};

export default MobileMockUp;
