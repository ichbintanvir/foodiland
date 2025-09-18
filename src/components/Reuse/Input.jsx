import React from "react";
import Button from "../Button";

const Input = () => {
  return (
    <>
      <div className="flex items-center bg-white p-4 rounded-xl shadow-md space-x-3 max-w-md w-full mt-[64px] z-[99]">
        <input
          type="text"
          placeholder="Enter your email"
          className="flex-grow px-4 py-2 rounded-lg focus:outline-none transition"
        />
        <Button className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition">
          Subscribe
        </Button>
      </div>
    </>
  );
};

export default Input;
