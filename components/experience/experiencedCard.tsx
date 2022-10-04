import React from "react";
import { motion } from "framer-motion";

type Props = {};

const experiencedCard = (props: Props) => {
  return (
    <article className="flex flex-col overflow-hidden rounded-lg items-center space-y-8 flex-shrink-0 w-[400px] md:w-[600px] xl:w-[900px] snap-start p-10 bg-[#0f172a] hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200">
      <motion.img
        initial={{
          opacity: 0,
          y: -100,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        className="w-32  h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center "
        title="dasdas"
        src="/dafuq.png"
      />
      <div className="px-0 md:px-10 mx-auto">
        <h4 className="text-3xl font-light">CEO OF WATASHI STUDIO</h4>
        <p className="font-bold text-2xl mt-1">JABOL</p>
        <div className="flex space-x-2 my-2">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </div>
        <p></p>
        <ul className="list-disc ml-5 space-y-5 text-lg text-left">
          <li>summary of point</li>
          <li>summary of point</li>
          <li>summary of point</li>
          <li>summary of point</li>
          <li>summary of point</li>
        </ul>
      </div>
    </article>
  );
};

export default experiencedCard;
