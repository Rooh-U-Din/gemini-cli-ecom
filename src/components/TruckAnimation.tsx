
'use client';

import React from 'react';
import { motion } from 'framer-motion';

const TruckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-8 h-8 text-white"
  >
    <path d="M18.5 13.5H16V11h2.5a.5.5 0 01.5.5v2zM15 13.5H3.7l.9-2.25h10.4V13.5z" />
    <path
      fillRule="evenodd"
      d="M2.25 4.5A2.25 2.25 0 000 6.75v10.5A2.25 2.25 0 002.25 19.5h2.305a2.25 2.25 0 004.49 0h5.91a2.25 2.25 0 004.49 0h.555A2.25 2.25 0 0024 17.25V10.5a3.75 3.75 0 00-3.75-3.75H16.5V6A1.5 1.5 0 0015 4.5H2.25zm3.045 13.5a.75.75 0 100-1.5.75.75 0 000 1.5zm9.66 0a.75.75 0 100-1.5.75.75 0 000 1.5z"
      clipRule="evenodd"
    />
  </svg>
);

const TruckAnimation = () => {
  return (
    <motion.div
      initial={{ x: -100 }}
      animate={{ x: 100 }}
      transition={{ duration: 2, ease: 'linear', repeat: Infinity, repeatType: 'reverse' }}
    >
      <TruckIcon />
    </motion.div>
  );
};

export default TruckAnimation;
