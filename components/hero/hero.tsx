import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Circle from "./circle";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const hero = (props: Props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [text] = useTypewriter({
    words: [
      "Hi , It`s me Alvin",
      "`The guy who love ☕`",
      "< Zero To Hero ☠️ />",
      "HireMeNow.tsx ",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-8 text-center overflow-hidden relative scale-75 md:scale-90">
      <Circle />
      <img
        className="relative object-cover rounded-full mx-auto h-32 w-32 hover:animate-spin cursor-pointer"
        src="/wtf1.jpg"
        alt="Watashi WtF Momenet"
      />
      <div className="z-10">
        <h2 className="uppercase flex flex-col mx-auto lg:text-md lg:tracking-[15px] pb-5 text-[#4A5862]  tracking-[8px] text-[10px]">
          Software Engineer{" "}
          {/* <span className="text-[9px] text-[#4A5862]  tracking-[2px] sm:text-[3px]">
            (Currently Web Dev FrontEnd/BackEnd Not FullStack){" "}
          </span> */}
        </h2>
        <h1 className="mx-auto text-2xl md:text-6xl lg:text-6xl text-lime-200 font-semibold px-10">
          <span className="mr-3 animate-pulse">{text}</span>
          <Cursor cursorColor="#607d8b" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">ABOUT</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">SKILLS</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">EXPERIENCE</button>
          </Link>
          <Link href="#project">
            <button className="heroButton">PROJECTS</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default hero;
