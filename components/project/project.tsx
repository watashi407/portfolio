import { motion } from "framer-motion";
import React from "react";

type Props = {};

const project = (props: Props) => {
  const projects = [1, 2, 3, 4];

  return (
    <div className="h-screen flex flex-col relative text-left overflow-hidden md:flex-row max-w-full px-15 justify-evenly mx-auto items-center scrollbar-w-1 ">
      <h3 className="uppercase absolute tracking-[15px] text-2xl text-[#d9f99d] animate-pulse top-24">
        project
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((project, i) => (
          <div
            key={i}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
              initial={{ opacity: 0, y: -300 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-80 h-80 rounded-[15px]"
              src="https://cdn.dribbble.com/users/33073/screenshots/14072456/media/a98716486520c066c4e0e369d3086f3a.png?compress=1&resize=768x576&vertical=top"
              alt=""
            />
            <div className="space-y-10 px-0 md:px-10 max-6xl text-center items-center justify-center">
              <h4>
                Case Study {i + 1} of {projects.length}
              </h4>
              <p className="text-[12px] items-center space-y-12 xl:max-w-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                nesciunt corrupti necessitatibus, amet accusamus maxime vero
                odio facilis dicta corporis!
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute h-[500px] left-0 top-[25%] -skew-y-12 bg-[#d9f99d]/30 animate-pulse" />
    </div>
  );
};

export default project;
