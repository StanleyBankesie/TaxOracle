import React from "react";
import who from "../assets/who.jpg";
import { TbAccessPoint } from "react-icons/tb";

const Whoweare = () => {
  return (
    <div className="flex flex-row min-h-[500px] justify-between gap-15 m-10">
      <div className="my-10 ml-5 m-5 w-50vw">
        <img src={who} alt="" className="" />
      </div>
      <div className="my-10 mx-0 w-50vw">
        <h1 className="font-bold text-cyan-900 text-2xl">
          We are Professional Tax Accountants, Tax Advisors and Management
          Consultants
        </h1>
        <p className="mt-5 text-lg text-gray-700 text-s">
          Our team consists of highly qualified Tax Consultants and Accountants.
          At Tax Oracle, we provide:
        </p>
        <div className="mt-7">
          <ul>
            <li className="flex mt-5 text-cyan-900 text-4xl font-bold my-10">
              <TbAccessPoint size={25} className="mr-3" />
              Accounting Services
            </li>
            <li className="flex mt-5 text-cyan-900 text-4xl font-bold my-10">
              <TbAccessPoint size={25} className="mr-3" /> Tax Services
            </li>
            <li className="flex mt-5 text-cyan-900 text-4xl font-bold my-10">
              <TbAccessPoint size={25} className="mr-3" /> Business Advisory
              Services
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Whoweare;
