import { motion } from "framer-motion";
import React from "react";

type Props = {};

const skills = (props: Props) => {
  return (
    <motion.div className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
      <div className="absolute top-24 uppercase tracking-[15px] text-[#d9f99d] text-2xl">
        skills
      </div>
      <h3>Hover over a skill for current profieciency level</h3>
    </motion.div>
  );
};

export default skills;
