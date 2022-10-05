import React from "react";

type Props = {};

const project = (props: Props) => {
  return (
    <div className="h-screen flex flex-col relative text-left overflow-hidden md:flex-row max-w-full px-15 justify-evenly mx-auto items-center">
      <h3 className="uppercase absolute tracking-[15px] text-2xl text-[#d9f99d] animate-pulse top-24">
        project
      </h3>

      <div className="w-full absolute h-[500px] left-0 top-[25%] -skew-y-12 bg-[#d9f99d]/30 animate-pulse" />
    </div>
  );
};

export default project;
