import React from "react";
import P1 from "../../elements/Description/P1";
import P2 from "../../elements/Description/P2";
import P3 from "../../elements/Description/P3";
import Facebook from "../../assets/svg/Facebook";
import Twitter from "../../assets/svg/Twitter";
import Instagram2 from "../../assets/svg/Instagram2";

const Footer = () => {
  return (
    <div className="container mx-auto py-[48px]">
      <div className="flex justify-between">
        <div>
          <P1 className={`font-lobster text-[24px]`}>Foodieland</P1>
          <P1>Lorem ipsum dolor sit amet, consectetuipisicing elit, </P1>
        </div>
        <div className="flex items-center gap-5">
          <P2 className={`text-[16px]`}>Recipes</P2>
          <P2 className={`text-[16px]`}>Blog</P2>
          <P2 className={`text-[16px]`}>Contact</P2>
          <P2 className={`text-[16px]`}>About us</P2>
        </div>
      </div>
      <div className="py-[48px]">
        <hr className="border-t border-black/10" />
      </div>
      <div className="flex justify-between items-center w-full py-4">
        <div className="flex-1 text-center">
          <P3 className="font-[400]">© 2020 Flowbase. Powered by Webflow</P3>
        </div>
        <div className="flex items-center gap-5">
          <Facebook />
          <Twitter />
          <Instagram2 />
        </div>
      </div>
    </div>
  );
};

export default Footer;
