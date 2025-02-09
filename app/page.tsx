import React from "react";
import Hero from "./components/Hero";

import Navbar from "./components/Navbar";
import Works from "./components/Works";
import About from "./components/About";
import Workstation from "./components/WorkStation";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const page = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Works />
      <About />
      <Workstation />
      <Contact />
      <Footer />
    </main>
  );
};

export default page;
