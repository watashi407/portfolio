import React from "react";
import { motion } from "framer-motion";

type Props = {};

const circle = (props: Props) => {
  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          scale: [1, 2, 2, 3, 1],
          opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
          borderRadius: ["20%", "20%", "50%", "80%", "20%"],
        }}
        transition={{
          duration: 2.5,
        }}
        className="relative flex flex-col justify-center items-center  scale-50 "
      >
        <motion.div className="absolute border border-[#333333] rounded-full  h-[200px] w-[200px] mt-52 animate-ping" />
        <motion.div className=" border border-[#262626] rounded-full  h-[300px] w-[300px] mt-52  absolute animate-pulse" />
        <motion.div className=" border border-[#262626] rounded-full  h-[500px] w-[500px] mt-52  absolute animate-pulse" />
        <motion.div className=" border border-[#b3e5fc] rounded-full opacity-20 h-[650px] w-[650px] mt-52  absolute animate-pulse" />
        <motion.div className="absolute border border-[#262626] rounded-full  h-[800px] w-[800px]  mt-52 animate-pulse" />
      </motion.div>
    </>
  );
};

export default circle;
