import { motion } from "framer-motion";
import React from "react";
import Skill from "./skill";

type Props = {};

const skills = (props: Props) => {
  return (
    <motion.div className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[15px] text-[#d9f99d] text-2xl">
        skills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-[#c9f872] text-[8px] text-center">
        Hover over a skill for current profieciency
      </h3>

      <div className="grid md:grid-cols-4 gap-5 grid-cols-3 p-10 overflow-x-hidden">
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
      <h2 className="text-[7px] absolute uppercase tracking-[6px] animate-pulse bottom-0 mb-5 ">
        👆 Hover the icons
      </h2>
    </motion.div>
  );
};

export default skills;
