import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

export default function BackgroundCircles({}: Props) {
  return (
    <div className="relative flex justify-center items-center">
      <div className="absolute border border-gray rounded-full h-[200px] w-[200px] animate-ping mt-52" />
      <div className="border border-[#333333] rounded-full h-[300px] w-[300px] absolute mt-52" />
      <div className="border border-[#333333] rounded-full h-[500px] w-[500px] absolute mt-52 " />
      <div className="border border-[#F7AB0A] rounded-full h-[650px] w-[650px] absolute mt-52 opacity-20 animate-pulse" />
      <div className="rounded-full border border-[#333333] h-[800px] w-[800px] absolute mt-52" />
    </div>
  );
}
