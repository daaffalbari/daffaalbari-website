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
        <SocialIcon url="https://linkedin.com/in/daaffalbari" target="_blank" fgColor="gray" bgColor="transparent" />
        <SocialIcon url="https://instagram.com/daaffalbari" target="_blank" fgColor="gray" bgColor="transparent" />
        {/* <SocialIcon
          url="https://www.youtube.com/channel/UCk15vA9qvwh6BJTL8YuAQGw"
          fgColor="gray"
          bgColor="transparent"
          target={'_blank'}
        /> */}

        <SocialIcon
          url="https://open.spotify.com/user/soja3tkt2dr4usndb0q7o6e55?si=f7e55aab6eea41ea"
          target={'_blank'}
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon url="https://twitter.com/fckalgorithmm" target={'_blank'} fgColor="gray" bgColor="transparent" />
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
        <SocialIcon
          className="cursor-pointer"
          target={'_blank'}
          network="email"
          fgColor="gray"
          bgColor="transparent"
          url=""
        />
        <p className="uppercase hidden md:inline-flex text-gray-400 text-sm">Get In Touch</p>
      </motion.div>
    </header>
  );
}
