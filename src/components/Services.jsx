import React from "react";
import chart1 from "../assets/chart.png";
import bank from "../assets/bank.png";
import briefcase from "../assets/briefcase.png";
import gold from "../assets/gold.png";
import calculator from "../assets/calculator.png";

const Services = () => {
  return (
    <div className="relative mt-20 min-h-[500px] test md-5">
      <div className="text-cyan-900 text-center font-bold text-3xl">
        Our Services
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 mt-5 ">
        <div className="bg-white rounded p-8 shadow-lg gap-5 mx-2.5 flex flex-col justify-center hover:border-b-8 hover:border-green-700">
          <div>
            <img src={chart1} alt="" className="size-35 w-full" />
          </div>
          <div>
            <p>Tax Planning & Advisory</p>
          </div>
        </div>
        <div className="bg-white rounded p-8 shadow-lg gap-5 mx-2.5 flex flex-col justify-center">
          <div>
            <img src={bank} alt="" className="w-full size-35" />
          </div>
          <div>
            <p className="text-center">Payroll Processing</p>
          </div>
        </div>

        <div className="bg-white rounded p-8 shadow-lg gap-5 mx-2.5 flex flex-col justify-center">
          <div>
            <img src={briefcase} alt="" className="w-full size-35" />
          </div>
          <div>
            <p className="text-center">Company & Business Registration</p>
          </div>
        </div>
        <div className="bg-white rounded p-8 shadow-lg gap-5 mx-2.5 flex flex-col justify-center">
          <div>
            <img src={gold} alt="" className="w-full size-35" />
          </div>
          <div>
            <p className="text-center">Credit Risk Assessment </p>
          </div>
        </div>
        <div className="bg-white rounded p-8 shadow-lg gap-5 mx-2.5 flex flex-col justify-center">
          <div>
            <img src={calculator} alt="" className="size-35 w-full" />
          </div>
          <div>
            <p text-center>Tax Audit Representation</p>
          </div>
        </div>
        <div className="bg-white rounded p-8 shadow-lg gap-5 mx-2.5 mt-5 h-60 md-5"></div>
        <div className="bg-white rounded p-8 shadow-lg gap-5 mx-2.5 mt-5 h-60 md-5"></div>
        <div className="bg-white rounded p-8 shadow-lg gap-5 mx-2.5 mt-5 h-60 md-5"></div>
        <div className="bg-white rounded p-8 shadow-lg gap-5 mx-2.5 mt-5 h-60 md-5"></div>
        <div className="bg-white rounded p-8 shadow-lg gap-5 mx-2.5 mt-5 h-60 md-5"></div>
      </div>
      <div className="mt-10 flex justify-center text-center">
        <button className="bg-cyan-950 rounded-2xl px-3 py-2 shadow-lg text-white hover:bg-cyan-700">
          View all Services
        </button>
      </div>
    </div>
  );
};

export default Services;
