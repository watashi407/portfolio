import { motion } from "framer-motion";
import React from "react";

type Props = {
  directionLeft?: boolean;
};

const skill = ({ directionLeft }: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -100 : 100,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src="https://img.icons8.com/plasticine/344/react.png"
        className="rounded-full border border-[#d9f99d]/20 object-cover md:w-20 md:h-20 xl:w-30 xl:h-30 w-20 h-20 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white rounded-full md:w-20 md:h-20 xl:w-30 xl:h-30 w-20 h-20 z-0">
        <div className="flex justify-center items-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">100%</p>
        </div>
      </div>
    </div>
  );
};

export default skill;
