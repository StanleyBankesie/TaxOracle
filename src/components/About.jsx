import React from "react";
import brand from "../assets/brand_img.jpg";

const About = () => {
  return (
    <div className="mt-20">
      <div className="text-center mb-8 grid grid-cols-1 md:grid-cols-2 gap-20 ">
        <div>
          <h1 className="font-bold text-3xl px-2 py-3 mb-7 text-cyan-900">
            About Us
          </h1>
          <p className="text-2xl text-neutral-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati,
            ratione! Aspernatur, modi vitae cupiditate magni officia, ab
            necessitatibus eligendi a alias repellendus ad veniam! Optio nulla
            voluptatem voluptate illo! Laudantium voluptatum eum voluptatem
            nobis est iste, blanditiis minima, fuga eligendi nulla corporis?
            Fugiat, ratione hic animi earum minima optio laudantium.
          </p>
        </div>
        <div>
          <img src={brand} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
