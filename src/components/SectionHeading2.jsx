import React from "react";
import P1 from "../elements/Description/P1";
import H2 from "../elements/Heading/H2";
import { cn } from "../../lib/cn";

const SectionHeading2 = ({ title, description,className }) => {
  return (
    <div className={cn(`flex flex-col justify-between p-10`,className)}>
      <H2 className={`leading-5 lg:leading-15`}>{title}</H2>
      <P1 className={``}>{description}</P1>
    </div>
  );
};

export default SectionHeading2;
