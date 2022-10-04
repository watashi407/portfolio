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
      className="h-screen flex flex-col relative text-lft max-w-full overflow-hidden text-center md:text-left md:flex-row px-15 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute uppercase tracking-[15px] text-[#d9f99d] animate-pulse top-24 text-2xl">
        experience
      </h3>

      <div className="w-full flex space-x-6 overflow-x-scroll p-15 snap-x snap-mandatory ">
        <ExperiencedCard />
        <ExperiencedCard />
      </div>
    </motion.div>
  );
};

export default experience;
