import React from "react";
import Hero from "../components/Home/Hero";
import Subscriber from "../components/Reuse/Subscriber";
import CheifCard from "../components/Home/CheifCard";
import Instagram from "../components/Home/Instagram";
import TastyRecipies from "../components/Home/TastyRecipies";
import DeliciousRecipies from "../components/Home/DeliciousRecipies";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <TastyRecipies />
      <CheifCard />
      <div className="hidden">
        <Instagram />
      </div>
      <DeliciousRecipies />
      <Subscriber />
    </div>
  );
};

export default HomePage;
