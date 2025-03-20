import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Whoweare from "../components/Whoweare";
import Visionnmission from "../components/Visionnmission";

const Home = () => {
  return (
    <>
      <Hero />
      <Whoweare />
      <Visionnmission />
      <Services />
      <Testimonials />
    </>
  );
};

export default Home;
