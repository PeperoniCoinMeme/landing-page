import React from "react";
import { About, CTA, Hero, Tokenomics } from "../components";
import { Navbar, Footer } from "../layout";

const LandingPage = () => {
  return (
    <div className="bg-primary overflow-hidden w-full">
      <Navbar />
      <Hero />
      <About />
      <Tokenomics />
      <CTA />
      <Footer />
    </div>
  );
};

export default LandingPage;
