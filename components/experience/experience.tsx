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
      className="h-screen flex flex-col relative text-lft overflow-hidden md:flex-row max-w-full px-15 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute uppercase tracking-[15px] text-[#d9f99d] animate-pulse top-24 text-2xl">
        experience
      </h3>

      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory ">
        <ExperiencedCard />
        <ExperiencedCard />
        <ExperiencedCard />
      </div>
    </motion.div>
  );
};

export default experience;
