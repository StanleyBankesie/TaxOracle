import React, { useEffect } from "react";
import Navbar from "./components/NavbarComp";
import Header from "./components/Header";
import About from "./components/About";
import Hero from "./components/Hero";
import AOS from "aos";
import "aos/dist/aos.css";
import Services from "./components/Services";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import NavbarComp from "./components/NavbarComp";
import ServicesPage from "./pages/ServicesPage";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <NavbarComp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/Services" element={<ServicesPage />} />
      </Routes>
    </>
  );
};

export default App;
