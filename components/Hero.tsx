import Link from 'next/link';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ['Hi, My Name is Daffa Albari', 'Coding 24/7', ' an Avatar'],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col text-center space-y-8 items-center overflow-hidden justify-center">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://media-exp1.licdn.com/dms/image/D5603AQFyHFI8fiSE7g/profile-displayphoto-shrink_400_400/0/1663521254972?e=1670457600&v=beta&t=i6uhOSLcXVYO44bfuv29B-F0908LWNQOLN24wjYUMys"
        alt="profile image"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">Software Engineer</h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#D1EA6A" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href={'#experience'}>
            <button className="heroButton">Experience</button>
          </Link>
          <Link href={'#skills'}>
            <button className="heroButton">Skills</button>
          </Link>
          <Link href={'#project'}>
            <button className="heroButton">Project</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
