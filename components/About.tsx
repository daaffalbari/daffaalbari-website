import { motion } from 'framer-motion';
import React from 'react';

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1.2,
        }}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[400px] xl:h-[500px] xl:mt-11"
        src="https://media-exp1.licdn.com/dms/image/D5603AQFyHFI8fiSE7g/profile-displayphoto-shrink_400_400/0/1663521254972?e=1670457600&v=beta&t=i6uhOSLcXVYO44bfuv29B-F0908LWNQOLN24wjYUMys"
        alt="daffa ganteng"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a <span className="underline decoration-[#D1EA6A]/50">Little</span> Background
        </h4>
        <p className="text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum animi, at quasi dolor architecto nulla labore
          sequi dolorem dolores neque rem maxime blanditiis. Libero quos minus dolor esse sed, impedit, dolorum nesciunt
          expedita eligendi quae ratione odio rem, consequatur saepe. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Reiciendis, sapiente reprehenderit! Aliquid minima officiis voluptates culpa velit enim quia amet! Unde
          tempore perferendis sed tempora, asperiores earum? Hic autem necessitatibus optio vel error, dolore voluptate
          in magnam cumque.
        </p>
      </div>
    </motion.div>
  );
}
