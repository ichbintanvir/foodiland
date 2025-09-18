import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/HeaderFooter/Header";
import Footer from "../components/HeaderFooter/Footer";

const Main = () => {
  return (
    <div className="font-inter">
      <div className="sticky top-0 z-[99999999]">
      <Header />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
