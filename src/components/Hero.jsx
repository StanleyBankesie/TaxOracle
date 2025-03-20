import React from "react";

const Hero = () => {
  return (
    <div className="my-own-background min-h-[300px] mb-0">
      <div className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white ">
        <h1
          className="text-5xl sm:text-6x1 md:text-6x1 inline-block max-w-3x1 font-semibold pt-20"
          data-aos="flip-left"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          Your One Stop For all your Tax needs
        </h1>
        <div className="space-x-6 mt-16 ">
          <button className="border border-white px-8 py-3 rounded">
            Book an Appointment
          </button>
          <a
            href="#Contact"
            className="bg-gradient-to-tr from-cyan-950 to-lime-800 px-8 py-3 rounded border-1 hover:bg-gray-700"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
