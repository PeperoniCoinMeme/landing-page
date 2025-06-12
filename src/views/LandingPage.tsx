import React from "react";
import { About, CTA, Hero, Tokenomics } from "../components";
import { Navbar, Footer } from "../layout";
import Feature from "../components/Feature/Feature";
import GlowingTokenOrbit from "../components/GlowingTokenOrbit/GlowingTokenOrbit";
import InfiniteCarousel from "../components/InfiniteCarousel/InfiniteCarousel";
import { logo } from "../assets";
import LogoShowcase from "../components/LogoShowcase/LogoShowcase";
import Roadmap from "../components/Roadmap/Roadmap";

const LandingPage = () => {
  return (
    <div className="overflow-hidden w-full square-framed-container">
      <Navbar />
      <Hero />
      <About />
      <LogoShowcase />
      <Roadmap />
      <Feature />
      <Tokenomics />
      <GlowingTokenOrbit
        imageSrc={logo}
        label="$PEPERONI – THE MOST DELICIOUS TOKEN"
      />
      {/* <InfiniteCarousel images={images} speed={30} /> */}
      <CTA />
      <Footer />
    </div>
  );
};

export default LandingPage;
