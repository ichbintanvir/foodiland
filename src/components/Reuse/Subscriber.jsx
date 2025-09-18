import React from "react";
import H2 from "../../elements/Heading/H2";
import P1 from "../../elements/Description/P1";
import Button from "../Button";
import SectionHeading from "../SectionHeading";
import Input from "./Input";
const Subscriber = () => {
  const title = 'Deliciousness to your inbox';
  const description = 'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim'
  return (
    <div className="container mx-auto py-10 relative overflow-hidden ">
      <div className="relative bg-[#E7F9FD] max-h-[442px] rounded-2xl py-[80px] space-y-[24px] flex flex-col justify-center items-center overflow-hidden">
        <SectionHeading title={title} description={description}/>
        <Input/>
      </div>
      <div className="absolute left-0 bottom-0 -z-10]">
        <img src="/subscriber/left.svg" alt="" />
      </div>
      <div className="absolute right-0 bottom-0 -z-10 md:z-0">
        <img src="/subscriber/right.svg" alt="" />
      </div>
    </div>
  );
};

export default Subscriber;
