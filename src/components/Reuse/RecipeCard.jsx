import React, { useState } from "react";
import H7 from "../../elements/Heading/H7";
import Button2 from "../Button2";
import DarkHeart from "../../assets/svg/DarkHeart";
import RedHeart from "../../assets/svg/RedHeart";

const RecipeCard = ({ title, cook_time, categories, img }) => {
  const [liked, setLiked] = useState(false); // Toggle state

  const toggleLike = (e) => {
    e.stopPropagation();
    setLiked(!liked);
  };

  return (
    <div className="relative p-4 rounded-2xl bg-[#E7F9FD] flex flex-col gap-[16px] justify-between">
      <div>
        <img
          src={img}
          alt={title}
          className="w-full h-[250px] object-fill rounded-xl"
        />
      </div>
      <div>
        <H7>{title}</H7>
        <div className="flex gap-3">
          <Button2 className={`px-0`} text="" status="clock">
            {cook_time}
          </Button2>
          <Button2 className={`px-0`} status="kitchen">
            {Array.isArray(categories) ? categories.join(", ") : categories}
          </Button2>
        </div>
      </div>

      {/* Like Button */}
      <div
        className="absolute top-5 right-5 bg-white rounded-full p-2 cursor-pointer"
        onClick={toggleLike}
      >
        {liked ? <RedHeart /> : <DarkHeart />}
      </div>
    </div>
  );
};

export default RecipeCard;
