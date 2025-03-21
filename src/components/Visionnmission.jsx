import React from "react";
import man2 from "../assets/man2.jpg";
import woman1 from "../assets/woman1.jpg";
import brand from "../assets/brand_img.jpg";

const Visionnmission = () => {
  return (
    <div className="min-h-[400px] vision px-5 md:px-16">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        <h1 className="font-bold text-teal-400 text-3xl mt-5 justify-between text-start">
          Our goal is to protect your financial asset and to make it grow.
        </h1>
        <h3 className="text-white text-2xl mt-5 ">
          It doesn’t matter whether you’re just starting out, We know what’s
          required to create a win-win relationship for you…
        </h3>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-6 mt-8">
        <div className="bg-white flex">
          <div>
            <button className="px-10 py-20 font-semibold text-cyan-900 hover:bg-cyan-900 hover:text-white">
              About Us
            </button>
          </div>
          <div className="flex m-0 h-90vw">
            <img src={brand} alt="" className="m-0 object-cover" />
          </div>
        </div>
        <div className="bg-white flex">
          <div>
            <button className="px-10 py-20 font-semibold text-cyan-900 hover:bg-cyan-900 hover:text-white">
              About Us
            </button>
          </div>
          <div className="flex m-0 h-90vw">
            <img src={man2} alt="" className="m-0 object-cover" />
          </div>
        </div>
        <div className="bg-white flex">
          <div>
            <button className="px-10 py-20 font-semibold text-cyan-900 hover:bg-cyan-900 hover:text-white">
              About Us
            </button>
          </div>
          <div className="flex m-0 h-90vw">
            <img src={woman1} alt="" className="m-0 object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visionnmission;
