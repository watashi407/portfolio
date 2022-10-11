import React from "react";
import { motion } from "framer-motion";

type Props = {};

const about = (props: Props) => {
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
      className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-wd-7xl px-10 justify-evenly  mx-auto items-center  xl:justify-center"
    >
      <h3 className="absolute uppercase tracking-[15px] text-[#d9f99d] animate-pulse top-24 text-2xl">
        about
      </h3>
      <motion.img
        initial={{
          opacity: 0,
          x: -200,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        className="-mb-20 md:mb-0 flex-shrink-0 scale-x-75 rounded-full w-48 h-48 object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[300px] xl:h-[400px] cursor-pointer items-center"
        src="/a2.png"
        alt="Watashi WtF Momenet"
      />
      <motion.div
        initial={{
          opacity: 0,
          x: 200,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        className="space-y-10 px-0 md:px-10 "
      >
        <h4 className=" md:text-4xl font-semibold animate-pulse text-[15px]">
          Here is a <span className="overline text-[#d9f99d]">little</span>
          background
        </h4>
        <p className="text-[12px] items-center xl:max-w-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos deserunt
          cupiditate esse officia corrupti, minus blanditiis voluptas
          necessitatibus quos doloribus magnam tempora temporibus repellendus
          architecto error consectetur sit amet at natus facilis? Minima optio
          impedit incidunt ipsum. Iste fuga, esse aliquid officia iusto neque
          animi nemo eum voluptatem distinctio quibusdam!
        </p>
      </motion.div>
    </motion.div>
  );
};

export default about;
