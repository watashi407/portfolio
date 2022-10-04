import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

const header = (props: Props) => {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      {/* social icons */}

      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center cursor-pointer"
      >
        <SocialIcon
          url="https://www.facebook.com/mayatamaw/"
          fgColor="#d9f99d"
          bgColor="transparent"
          target="_blank"
        />
      </motion.div>

      {/* email */}
      <motion.div
        className="flex flex-row items-center text-white cursor-pointer"
        initial={{
          x: 500,
          opacity: 1,
          scale: 1,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        <SocialIcon
          className="cursor-pointer"
          fgColor="#d9f99d"
          network="email"
          bgColor="transparent"
          target="_blank"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-[#b2dfdb] animate-pulse">
          Get In Touch
        </p>
      </motion.div>
    </header>
  );
};

export default header;
