import React from "react";
import { motion } from "framer-motion";
import ExperiencedCard from "./experiencedCard";
type Props = {};

const experience = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -200,
      }}
      transition={{ duration: 1.2 }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      className="h-screen flex flex-col relative text-left overflow-hidden md:flex-row max-w-full px-15 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute uppercase tracking-[15px] text-[#d9f99d] animate-pulse top-24 text-2xl">
        experience
      </h3>
      <div className="w-full flex space-x-3 overflow-x-scroll  scrollbar-w-1 scrollbar-thumb-lime-300 scrollbar-track-slate-900 p-10 snap-x snap-mandatory md:scale-75 xl:max-w-xl">
        <ExperiencedCard />
        <ExperiencedCard />
      </div>

      <h2 className="text-[7px] absolute uppercase tracking-[6px] animate-pulse bottom-0 mb-2 md:invisible">
        ➜ scroll side
      </h2>
    </motion.div>
  );
};

export default experience;
