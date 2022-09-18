import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';

import Photo from '../images/photo.png';

type Props = {};

export default function Hero({}: Props) {
  // library documentation
  const [text, count] = useTypewriter({
    words: [
      'Hi, My name is Xenia ',
      'I am coder />',
      'I am a creator ',
      'I am a thinker',
      'I am a problem solver',
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <div className='relative w-48 h-48 mx-auto '>
        <Image
          src={Photo}
          alt='Picture of the author'
          layout='fill'
          objectFit='contain'
        />
      </div>
      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
          Software Engineer
        </h2>
        <h1 className='text-4xl lg:text-5xl font-semibold px-10'>
          <span>{text}</span>
          <Cursor cursorColor='#F7AB0A' />
        </h1>

        <div className='pt-5'>
          <Link href='#about'>
            <button className='heroBtn'>About</button>
          </Link>
          <Link href='#experience'>
            <button className='heroBtn'>Experience</button>
          </Link>
          <Link href='#skills'>
            <button className='heroBtn'>Skills</button>
          </Link>
          <Link href='#projects'>
            <button className='heroBtn'>Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
