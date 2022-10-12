import React from "react";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/solid";

type Props = {};

const contactme = (props: Props) => {
  return (
    <div className="h-screen flex flex-col relative text-left overflow-hidden md:flex-row max-w-full px-15 justify-evenly mx-auto items-center scrollbar-w-1">
      <h3 className="uppercase absolute tracking-[15px] text-2xl text-[#d9f99d] animate-pulse top-24 ">
        Contact Me
      </h3>
      <div className="flex flex-col space-y-5  mt-[80px]">
        <h4 className="text-[12px] tracking-[4px] font-semibold text-center items-center xl:max-w-sm">
          Don`t ignore the effort of a person who tries to keep in touch. It`s
          not all the time someone cares
          <span className="overline text-[12px] text-[#d9f99d] animate-pulse">
            So what you waiting for contact me now
          </span>{" "}
        </h4>
        <div className="space-y-2 text-[12px]">
          <div className="flex items-left space-x-5 justify-center ">
            {" "}
            <PhoneIcon className="text-[#d9f99d] animate-pulse h-4 w-4" />
            <p>+63957900746</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            {" "}
            <EnvelopeIcon className="text-[#d9f99d] animate-pulse h-4 w-4 mt-1 mb-1" />
            <p>hyperteddy70@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            {" "}
            <MapPinIcon className="text-[#d9f99d] animate-pulse h-4 w-4" />
            <p>Land Of Wano , Hilongos Leyte</p>
          </div>
        </div>

        <form className="w-fit flex flex-col space-y-2 mx-auto">
          <div>
            <input type="text" />
            <input type="text" />
          </div>
          <input type="text" name="" id="" />
          <textarea name="" id=""></textarea>
          <button>submit</button>
        </form>
      </div>
    </div>
  );
};

export default contactme;
