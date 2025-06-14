import React from "react";
import { About, CTA, Hero, Tokenomics } from "../components";
import { Navbar, Footer } from "../layout";
import Feature from "../components/Feature/Feature";
import GlowingTokenOrbit from "../components/GlowingTokenOrbit/GlowingTokenOrbit";
import InfiniteCarousel from "../components/InfiniteCarousel/InfiniteCarousel";
import {
  logo,
  wave1,
  wave2,
  wave3,
  wave4,
  wave5,
  wave6,
  wave7,
} from "../assets";
import LogoShowcase from "../components/LogoShowcase/LogoShowcase";
import Roadmap from "../components/Roadmap/Roadmap";
import WavySpacer from "../components/design/WavySpacer";

const LandingPage = () => {
  return (
    <div className="overflow-hidden w-full square-framed-container">
      <Navbar />
      <Hero />
      <WavySpacer bgWaveUrl={wave7} flip={false} />
      <About />
      <WavySpacer bgWaveUrl={wave2} flip={true} />
      <LogoShowcase />
      <WavySpacer bgWaveUrl={wave2} flip={true} />
      <Roadmap />
      <WavySpacer bgWaveUrl={wave3} flip={false} />
      {/* <Feature /> */}
      <Tokenomics />
      <WavySpacer bgWaveUrl={wave5} flip={true} />
      <GlowingTokenOrbit
        imageSrc={logo}
        label="$PEPERONI – THE MOST DELICIOUS TOKEN"
      />
      {/* <InfiniteCarousel images={images} speed={30} /> */}
      <CTA />
      <WavySpacer bgWaveUrl={wave5} flip={true} />
      <Footer />
    </div>
  );
};

export default LandingPage;
