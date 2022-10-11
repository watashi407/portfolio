import React from "react";
import { motion } from "framer-motion";

type Props = {};

const experiencedCard = (props: Props) => {
  return (
    <article className=" mb-5 flex flex-col overflow-hidden rounded  items-center space-y-12 flex-shrink-0 w-[300px]  md:w-[420px] xl:w-[420px] snap-center bg-[#76a13c] hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 mt-5">
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
        className="w-32  h-32 rounded-full xl:w-[150px] xl:h-[150px] object-cover object-center p-2 "
        title="dasdas"
        src="/dafuq.png"
      />
      <div className="px-12 md:px-10 mx-auto hover:animate-pulse">
        <h4 className="text-[12px] font-light text-center tracking-[5px] ">
          CEO OF WATASHI STUDIO
        </h4>
        <p className="font-bold text-2xl mt-1 mx-auto">JABOL</p>
        <div className="flex space-x-2 my-2">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </div>
        <p></p>
        <ul className="list-disc list-inside ml-5 space-y-4 text-lg text-ellipsis overflow-hidden py-8">
          <li>summary of point</li>
          <li>summary of point</li>
        </ul>
      </div>
    </article>
  );
};

export default experiencedCard;
