import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 2, 7, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        // borderRadius: ['80%', '20%', '50%', '80%', '20%'],
      }}
      transition={{
        duration: 2.5,
      }}
      className='relative flex items-center justify-center'
    >
      <div className='absolute border border-[#333333] rounded-full w-[200px] h-[200px] mt-64 animate-ping' />
      <div
        className='absolute rounded-full w-[300px] h-[300px] mt-64
      border border-[#333333]
      '
      />
      <div
        className='absolute rounded-full w-[500px] h-[500px] mt-64
      border border-[#333333]
      '
      />
      <div
        className='absolute rounded-full w-[680px] h-[680px] mt-64
      border border-[#F7AB0A] opacity-5 animate-pulse
      '
      />
      <div
        className='absolute rounded-full w-[800px] h-[800px] mt-64
      border border-[#333333]
      '
      />
    </motion.div>
  );
}

export default BackgroundCircles;
