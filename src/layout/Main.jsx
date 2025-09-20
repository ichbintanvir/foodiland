import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/HeaderFooter/Header";
import Footer from "../components/HeaderFooter/Footer";
import UppArrow from "../assets/svg/UppArrow";

const Main = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const pageHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const halfwayPoint = pageHeight / 2;
      setShowButton(window.scrollY > halfwayPoint); // Show button after half screen scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <div className="font-inter">
        <div className="sticky top-0 z-[99999999]">
          <Header />
        </div>
        <Outlet />
        <Footer />
      </div>
      <div>
        {showButton && (
          <button
            onClick={scrollToTop}
            className={`fixed bottom-20 md:bottom-25 lg:bottom-5 right-2 md:right-5 flex items-center gap-1 px-4 py-2 bg-black rounded-full shadow-lg transition cursor-pointer z-[99999999999999]`}
          >
            {/* ↑ Top */}
            <div className="flex justify-center items-center w-[20px] h-[20px] rounded-full border border-white">
              <UppArrow />
            </div>
            <span className="text-white font-[400] flex gap-1 text-[16px]">
              <span className="hidden md:block">Back to </span>Top
            </span>
          </button>
        )}
      </div>
    </>
  );
};

export default Main;
