import React from "react";
import H1 from "../../elements/Heading/H1";
import P1 from '../../elements/Description/P1'
import Button from "../Button";
import SectionHeading2 from "../SectionHeading2";
const CheifCard = () => {

  const title = 'Everyone can be a chef in their own kitchen';
  const description = 'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim';

  return (
    <div className="container mx-auto py-[80px]">
      <div className="grid grid-cols-2 justify-between items-center">
        <div className="flex flex-col space-y-5">
            <SectionHeading2 title={title} description={description} className={`flex-col justify-start items-start`}/>
            <div>
                <Button className={`text-white bg-black`}>learn more</Button>
            </div>
        </div>
        <div className="flex justify-end">
            <img src="/chef.svg" alt="chef" />
        </div>
      </div>
    </div>
  );
};

export default CheifCard;
