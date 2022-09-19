import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import Experience from '../images/experience.png';

export default function ExperienceCard() {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-70 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className='relative w-32 h-32 rounded-full 
        xl:h-[200px]
        xl:w-[200px] '
      >
        <Image
          src={Experience}
          alt=''
          layout='fill'
          objectFit='contain'
        />
      </motion.div>
      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>Front-End developer</h4>
        <p className='font-bold text-2xl mt-1'>Papelimos</p>
        <div className='flex space-x-2 my-2'>{/* Tech used */}</div>

        <img
          src='https://img.icons8.com/dusk/344/javascript-logo.png'
          className='h-10 w-10 rounded-full'
          alt='technology
        '
        />
        <p className='uppercase py-5 text-gray-300'>Started work... Ended...</p>
        <ul className='list-disc space-y-4 ml-5 text-lg'>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
            nobis!
          </li>
          <li>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita,
            dicta suscipit molestias dignissimos similique maiores.
          </li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit,
            facere?
          </li>
        </ul>
      </div>
    </article>
  );
}
