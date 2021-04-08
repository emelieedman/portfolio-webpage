import React from 'react';
import { motion } from 'framer-motion';

import styles from './Signature.module.css';

const pathVariants = {
  initial: { opacity: 0, pathLength: 0 },
  animate: {
    opacity: 1,
    pathLength: 1,
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
};
const pathVariants2 = {
  initial: { opacity: 0, pathLength: 0 },
  animate: {
    opacity: 1,
    pathLength: 1,
    transition: { delay: 0.3, duration: 0.2, ease: 'easeInOut' },
  },
};
const pathVariants3 = {
  initial: { opacity: 0, pathLength: 0 },
  animate: {
    opacity: 1,
    pathLength: 1,
    transition: { delay: 0.4, duration: 0.2, ease: 'easeInOut' },
  },
};
const pathVariants4 = {
  initial: { opacity: 0, pathLength: 0 },
  animate: {
    opacity: 1,
    pathLength: 1,
    transition: { delay: 0.4, duration: 1, ease: 'easeInOut' },
  },
};
const pathVariants5 = {
  initial: { opacity: 0, pathLength: 0 },
  animate: {
    opacity: 1,
    pathLength: 1,
    transition: { delay: 1.4, duration: 0.2, ease: 'easeInOut' },
  },
};
const pathVariants6 = {
  initial: { opacity: 0, pathLength: 0 },
  animate: {
    opacity: 1,
    pathLength: 1,
    transition: { delay: 1.6, duration: 0.2, ease: 'easeInOut' },
  },
};
const pathVariants7 = {
  initial: { opacity: 0, pathLength: 0 },
  animate: {
    opacity: 1,
    pathLength: 1,
    transition: { delay: 1.8, duration: 0.2, ease: 'easeInOut' },
  },
};
const pathVariants8 = {
  initial: { opacity: 0, pathLength: 0 },
  animate: {
    opacity: 1,
    pathLength: 1,
    transition: { delay: 2, duration: 1, ease: 'easeInOut' },
  },
};

const Signature = ({ subtitle }) => {
  return (
    <div className={styles.container}>
      <svg
        className={styles.svg}
        width="670"
        height="100"
        viewBox="0 0 670 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M64.1923 3.04346C57.2823 10.7407 50.4887 18.0214 45.4095 27.1481C40.0157 36.8401 34.5067 46.1219 30.905 56.6788C29.0787 62.0315 26.5545 69.5924 28.8701 75.2529C31.5648 81.8399 40.1095 82.4867 46.2442 82.7139C58.5632 83.1701 69.1198 81.4647 80.6794 77.1834C90.9139 73.3928 100.029 66.106 107.184 60.2267"
          stroke="white"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
          variants={pathVariants}
          initial="initial"
          animate="animate"
        />
        <motion.path
          d="M11.3906 39.566C37.3372 39.566 63.2889 39.7177 89.2349 39.566C95.5931 39.5288 102.432 39.4936 108.644 37.8964C110.765 37.3509 109.511 36.7485 108.122 36.7485"
          stroke="white"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
          variants={pathVariants2}
          initial="initial"
          animate="animate"
        />
        <motion.path
          d="M2 17.0262C13.9131 17.0262 25.4978 16.1439 37.3743 15.2001C56.7753 13.6583 98.1653 14.5151 117.5 12"
          stroke="white"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
          variants={pathVariants3}
          initial="initial"
          animate="animate"
        />
        <motion.path
          d="M113.757 40.5048C113.757 52.2937 110.992 62.2389 106.453 73.166C104.573 77.6905 102.382 82.1423 100.192 86.5226C98.8901 89.1263 96.6532 96.1292 94.0354 97.5836C91.8196 98.8146 94.908 91.651 94.9745 91.5314C98.4181 85.3328 101.769 79.354 106.244 73.7921C112.509 66.006 120.634 61.1659 130.662 61.1659C136.021 61.1659 132.982 74.8994 132.592 78.0182C132.53 78.5187 132.178 82.0457 133.062 80.7834C135.876 76.7629 140.043 72.9542 143.81 69.8268C145.998 68.01 151.73 63.3579 155.079 65.1311C156.671 65.9735 156.324 72.0493 156.958 73.7921C158.587 78.2724 174.084 75.789 180.632 71.4507C183.408 69.6111 184.204 63.3305 180.935 63.9696C179.694 64.2123 178.236 65.7307 176.975 67.4913C174.413 71.069 175.153 75.4624 179.028 77.5486V77.5486C185.683 81.1324 194.889 78.5093 201.097 75.4617C211.258 70.4738 220.573 62.4268 227.915 53.8614C236.577 43.7555 241.899 22.5532 238.141 9.66965C236.436 3.82148 230.9 2 225.515 2C220.526 2 216.037 6.01131 213.097 9.93052C208.388 16.2098 206.476 23.4144 205.787 30.8939C204.479 45.0843 209.178 60.9386 220.837 69.1329V69.1329C224.021 71.3706 227.311 72.4693 231.091 73.3929C234.561 74.2406 237.907 74.3091 241.422 73.2795C247.736 71.4298 253.076 66.5249 255.568 60.4354V60.4354C255.658 60.2145 257.342 55.7499 257.446 57.4093C257.664 60.9024 258.915 63.0342 260.733 65.8616C265.687 73.5682 277.355 73.3393 284.629 69.0964C292.436 64.542 275.193 57.3688 277.376 65.8616C280.061 76.3015 296.538 73.3747 304.455 73.3747C316.385 73.3747 338.5 67.5 338.5 70.5"
          stroke="white"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
          variants={pathVariants4}
          initial="initial"
          animate="animate"
        />
        <motion.path
          d="M397.378 2.93945C393.735 9.94477 387.862 14.7588 383.76 21.357C379.895 27.5757 376.404 35.7199 374.421 42.8008C374.093 43.9726 373.838 45.1485 373.641 46.3281C372.164 55.1409 373.42 65.0716 380.473 70.5576V70.5576C384.49 73.6812 389.701 74.8146 395.148 74.9109C408.464 75.1465 421.965 70.7089 432.857 63.0444V63.0444C434.531 61.8658 438.764 58.8679 440.5 58"
          stroke="white"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
          variants={pathVariants5}
          initial="initial"
          animate="animate"
        />
        <motion.path
          d="M361.691 32.9916C376.092 32.9916 390.492 32.9916 404.892 32.9916C410.031 32.9916 414.434 32.9916 419.529 32.9916C423.207 32.9916 427.529 32.9916 432.127 31.1133"
          stroke="white"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
          variants={pathVariants6}
          initial="initial"
          animate="animate"
        />
        <motion.path
          d="M372.021 10.4525C388.564 10.4525 424.029 13.606 438.529 9.60596"
          stroke="white"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
          variants={pathVariants7}
          initial="initial"
          animate="animate"
        />
        <motion.path
          d="M467 61.3748C459.386 58.593 458.568 52.4031 450.178 52.7139C444.884 52.9099 439.651 58.5119 438.751 63.4618C437.756 68.9333 440.214 71.4967 445.743 71.4967C453.514 71.4967 459.77 66.7632 464.843 60.9201C468.709 56.4683 471.373 51.1193 473.582 45.6528C474.994 42.158 476.135 38.8335 476.695 34.7169C476.983 32.6012 476.478 29.0438 475.337 27.2387V27.2387C474.058 25.214 472.84 28.0842 471.808 30.2457C468.767 36.6181 468.02 40.6434 464.995 51C464.103 56.9114 459.461 66.5302 464.995 70.088C470.205 73.4372 474.426 72.7076 479.03 68.6793C481.191 66.7882 488.897 57.0889 489.413 65.8618C490.136 78.1642 503.369 69.3236 509.135 66.5923C517.115 62.8121 515.592 77.7368 524.578 72.0184C527.255 70.3153 531.791 65.1901 535.431 67.0097C538.346 68.4674 540.559 71.3197 543.413 72.9054C545.933 74.3051 549.092 70.5785 551.789 66.6168C554.973 61.9392 558.341 56.2564 564 56.2564V56.2564C566.955 56.2564 572.245 64.2385 569.448 61.3748C567.481 59.3609 562.804 52.9118 560.787 57.6183C560.063 59.3093 554.925 71.0964 559.431 72.3837C562.545 73.2733 567.509 66.2165 569.709 64.5053C571.472 63.1344 577.013 73.7202 578.631 75.2533C583.704 80.0594 586.552 77.6246 590.37 72.9576C591.899 71.0895 593.134 68.8257 595.066 67.3227C597.049 65.7804 600.728 71.0542 601.901 72.2271C611.221 81.5468 612.127 58.9746 620.423 67.2706C623.748 70.5958 626.191 74.579 631.223 74.3141V74.3141C636.023 74.0615 641.069 74.2043 645.805 73.3826C655.946 71.6232 670.941 68.2651 667.5 71.4967"
          stroke="white"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
          variants={pathVariants8}
          initial="initial"
          animate="animate"
        />
      </svg>
      <motion.h2
        className={styles.subtitle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8, duration: 2 }}
      >
        {subtitle}
      </motion.h2>
    </div>
  );
};

export default Signature;
