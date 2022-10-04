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
      className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-wd-7xl px-10 justify-evenly mx-auto items-center"
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
        className="-mb-20 md:mb-0 flex-shrink-0 scale-x-75 rounded-full w-56 h-56 object-cover md:rounded-lg md:h-64 md:h-95 xl:w-[300px] xl:h-[400px] cursor-pointer"
        src="/a2.png"
        alt="Watashi WtF Momenet"
      />
      <div className="space-y-10 px-0 md:px-10 ">
        <h4 className=" md:text-4xl font-semibold animate-pulse text-[15px]">
          Here is a <span className="overline text-[#d9f99d]">little</span>
          background
        </h4>
        <p className="text-[12px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto eius
          atque ipsa, pariatur est aperiam iure cum quam temporibus illum, nisi
          maxime repellendus blanditiis esse error accusantium perspiciatis
          accusamus in officia amet, officiis distinctio? Vitae fugiat
          dignissimos, at ea tenetur quibusdam accusantium eos officia officiis
          odio?
        </p>
      </div>
    </motion.div>
  );
};

export default about;
