import React from "react";
import chart1 from "../assets/chart.png";
import bank from "../assets/bank.png";
import briefcase from "../assets/briefcase.png";
import gold from "../assets/gold.png";
import calculator from "../assets/calculator.png";
import tax from "../assets/tax.png";
import balance from "../assets/balance.png";
import analysis from "../assets/analysis.png";
import business from "../assets/business.png";
import growth from "../assets/growth.png";

const Services = () => {
  return (
    <div className="relative mt-20 min-h-[500px] test md-5">
      <div className="text-cyan-900 text-center font-bold text-3xl">
        Our Services
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 ">
        <div className="bg-white rounded p-8 shadow-lg gap-5 mx-18 md:mx-2.5 flex flex-col justify-center hover:border-b-8 hover:border-green-700 mt-10">
          <div>
            <img src={chart1} alt="" className="size-35 w-full h-full " />
          </div>
          <div>
            <p>Tax Planning & Advisory</p>
          </div>
        </div>
        <div className="bg-white rounded p-8 shadow-lg gap-5 mx-18 md:mx-2.5 flex flex-col justify-center mt-10">
          <div>
            <img src={bank} alt="" className="w-full h-full size-35" />
          </div>
          <div>
            <p className="text-center">Payroll Processing</p>
          </div>
        </div>

        <div className="bg-white rounded p-8 shadow-lg gap-5 mx-18 flex flex-col justify-center mt-10 md:mx-2.5">
          <div>
            <img src={briefcase} alt="" className="w-full size-35 h-full" />
          </div>
          <div>
            <p className="text-center">Company & Business Registration</p>
          </div>
        </div>
        <div className="bg-white rounded p-8 shadow-lg gap-5 mx-18 flex flex-col justify-center md:mx-2.5 mt-10">
          <div>
            <img src={gold} alt="" className="w-full size-35 h-full" />
          </div>
          <div>
            <p className="text-center">Credit Risk Assessment </p>
          </div>
        </div>
        <div className="bg-white rounded p-8 shadow-lg gap-5 mx-18 flex flex-col justify-center md:mx-2.5 mt-10">
          <div>
            <img src={calculator} alt="" className="size-35 w-full h-full" />
          </div>
          <div>
            <p className="text-center">Tax Audit Representation</p>
          </div>
        </div>
        <div className="bg-white rounded p-8 shadow-lg gap-5 mx-18 md:mx-2.5 justify-center flex flex-col mt-5">
          <div>
            <img src={tax} alt="" />
          </div>
          <div>
            <p className="text-center">Tax Compliance </p>
          </div>
        </div>
        <div className="bg-white rounded p-8 shadow-lg gap-5 mx-18 md:mx-2.5 justify-center flex flex-col mt-5">
          <div>
            <img src={balance} alt="" />
          </div>
          <div>
            <p></p>
          </div>
        </div>
        <div className="bg-white rounded p-8 shadow-lg gap-5 mx-18 md:mx-2.5 justify-center flex flex-col mt-5">
          <div>
            <img src={analysis} alt="" />
          </div>
          <div>
            <p></p>
          </div>
        </div>
        <div className="bg-white rounded p-8 shadow-lg gap-5 mx-18 md:mx-2.5 justify-center flex flex-col mt-5">
          <div>
            <img src={business} alt="" />
          </div>
          <div></div>
        </div>
        <div className="bg-white rounded p-8 shadow-lg gap-5 mx-18 md:mx-2.5 justify-center flex flex-col mt-5">
          <div>
            <img src={growth} alt="" />
          </div>
          <div></div>
        </div>
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
