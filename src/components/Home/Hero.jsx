import React, { useState } from "react";
import { heroData } from "../../../data/hero";
import Button2 from "../Button2";

const Hero = () => {
  const cardData = heroData;
  const [currentCard, setCurrentCard] = useState(cardData[0]);

  return (
    <div className="w-full h-screen px-[129px] overflow-hidden relative py-10">
      {/* Main Content */}
      <div className="relative grid grid-cols-4 items-center justify-center">
        <div>
          <h1 className="text-[150px] font-bold leading-30 font-playfair">
            Food
            <br />
            Zone
          </h1>
          <div>
            <p className="font-inter text-[18px] ml-5">
              ---- Norem ipsum dolor sit amet, consectetur.
            </p>
          </div>
          <div className="flex gap-3 py-5">
            <Button2 text={'30 minutes'} status={'clock'} className={'bg-[#E7FAFE]'}/>
            <Button2 text={'chicken'} status={'kitchen'} className={'bg-[#E7FAFE]'}/>
          </div>
        </div>
        <div className="col-span-3">
          <img
            src={currentCard.image}
            alt={currentCard.name}
            className="w-full max-w-[1151px] h-[850px] object-fill"
          />
        </div>
        <div className="absolute top-0 left-0">
            <img src="/Badge.svg" alt="badge" className="slow-spin"/>
        </div>
      </div>

      {/* Sidebar Cards */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 flex flex-col gap-5">
        {cardData.map((card) => (
          <div
            key={card.id}
            onClick={() => setCurrentCard(card)}
            className={`flex items-center gap-5 rounded-l-full cursor-pointer transition-all duration-300 ml-auto ${
              currentCard.id === card.id
                ? "bg-[#FE7F26] w-[607px] ring-4 ring-yellow-400"
                : "bg-white w-[487px]"
            }`}
          >
            <img
              src={card.image}
              alt={card.name}
              className="w-[120px] h-[120px] rounded-full p-2"
            />
            <div className="flex flex-col gap-1">
              <h4
                className={`text-[20px] ${
                  currentCard?.id === card?.id ? "text-white" : "text-black"
                }`}
              >
                {card?.name}
              </h4>
              <p
                className={`text-[14px] ${
                  currentCard?.id === card?.id ? "text-white" : "text-black"
                }`}
              >
                {card?.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
