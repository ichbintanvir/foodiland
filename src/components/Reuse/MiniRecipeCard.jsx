import React from "react";
import H6 from "../../elements/Heading/H6";
import P2 from "../../elements/Description/P2";

const MiniRecipeCard = ({image,title,author_name}) => {
  return (
    <div className="grid grid-cols-2 items-center gap-[24px]">
      <div className="w-[180px ] h-[120px] rounded-xl overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-fill"
        />
      </div>
      <div>
        <H6>{title}</H6>
        <P2 className={`text-black/60`}>By {author_name}</P2>
      </div>
    </div>
  );
};

export default MiniRecipeCard;
