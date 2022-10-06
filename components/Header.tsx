import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center ">
      {/* Social Icons */}
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        <SocialIcon url="https://linkedin.com/in/daaffalbari" fgColor="gray" bgColor="transparent" />
        <SocialIcon url="https://instagram.com/daaffalbari" fgColor="gray" bgColor="transparent" />
        <SocialIcon url="https://youtube.com/" fgColor="gray" bgColor="transparent" />
        <SocialIcon url="https://twitter.com/" fgColor="gray" bgColor="transparent" />
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
          duration: 1.5,
        }}
        className="flex flex-row items-center cursor-pointer text-gray-300"
      >
        <SocialIcon className="cursor-pointer" network="email" fgColor="gray" bgColor="transparent" url="https" />
        <p className="uppercase hidden md:inline-flex text-gray-400 text-sm">Get In Touch</p>
      </motion.div>
    </header>
  );
}
