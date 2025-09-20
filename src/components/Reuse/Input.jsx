import React from "react";
import Button from "../Button";

const Input = () => {
  return (
    <>
      <div
          className="flex flex-col lg:flex-row gap-1 items-center bg-white p-4 rounded-xl shadow-md space-x-3 
                w-2/3 lg:w-1/3 lg:mt-[64px] z-[999]"
        >
          <input
            type="text"
            placeholder="Enter your email"
            className="w-full sm:w-auto flex-grow px-4 py-2 rounded-lg border border-gray-300 focus:outline-none transition"
          />
          <Button className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition">
            Subscribe
          </Button>
        </div>
    </>
  );
};

export default Input;
