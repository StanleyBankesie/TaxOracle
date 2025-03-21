import React from "react";
import SliderComponent from "./SliderComponent";

const Testimonials = () => {
  return (
    <div className="min-h-[400px] slide mt-5">
      <div className="text-3xl text-center font-bold text-white pt-10 mb-10">
        <h1 className="satisfied">Satisfied Clients</h1>
      </div>
      <SliderComponent />
    </div>
  );
};

export default Testimonials;
