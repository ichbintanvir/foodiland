import React from "react";
import P1 from "../elements/Description/P1";
import H2 from "../elements/Heading/H2";
import { cn } from "../../lib/cn";

const SectionHeading2 = ({ title, description,className }) => {
  return (
    <div className={cn(`flex justify-between items-center`,className)}>
      <H2 className={`max-w-[550px] leading-15`}>{title}</H2>
      <P1 className={`max-w-[620px]`}>{description}</P1>
    </div>
  );
};

export default SectionHeading2;
