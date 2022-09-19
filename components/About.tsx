import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import author from '../images/author.png';

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
    >
      <h3 className='absolute text-center tracking-[20px] uppercase text-gray-500 text-xl top-24'>
        About
      </h3>
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        // animation only once
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className='relative -mb-20 mt-10 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
      >
        <Image
          src={author}
          alt='author image'
          layout='fill'
          objectFit='contain'
        />
      </motion.div>

      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold'>
          Here’s a bit about myself{' '}
          <span className='underline decoration-[#EBBB77]'>to help you</span>{' '}
          understand where I’m coming from
        </h4>
        <p className='text-base'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa,
          possimus doloremque illum, asperiores similique ipsa consequuntur
          dolore repellendus perferendis odit cumque vel eos molestiae veniam
          quas iure sit perspiciatis deleniti a atque non voluptatum doloribus
          expedita? Quasi magni odio quidem, fuga, vel quisquam esse facilis
          harum quod molestias nam quo! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Sapiente totam quidem voluptatem adipisci iure error
          eligendi, nihil facere nemo repudiandae perspiciatis id, consequuntur
          officia tempore fuga vero eaque eos minima ipsa! Possimus incidunt cum
          quas quo quia, earum architecto pariatur fuga ex sequi recusandae
          corrupti voluptatum qui dolorum. Autem, quasi?
        </p>
      </div>
    </motion.div>
  );
}
