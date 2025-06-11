import React from "react";
import { About, CTA, Hero, Tokenomics } from "../components";
import { Navbar, Footer } from "../layout";
import Feature from "../components/Feature/Feature";
import GlowingTokenOrbit from "../components/GlowingTokenOrbit/GlowingTokenOrbit";
import InfiniteCarousel from "../components/InfiniteCarousel/InfiniteCarousel";
import {
  logo,
  pepeCivilian,
  pepePets,
  pepePresident,
  pepeSpy,
  pepeSurf,
  pepeWarrior,
} from "../assets";

const LandingPage = () => {
  const images = [
    pepeWarrior,
    pepeCivilian,
    pepePresident,
    pepeSpy,
    pepePets,
    pepeSurf,
  ];

  return (
    <div className="bg-primary overflow-hidden w-full">
      <Navbar />
      <Hero />
      <About />
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
