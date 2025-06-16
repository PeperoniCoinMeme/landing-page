import React from "react";
import { About, CTA, Hero, Tokenomics } from "../components";
import { Navbar, Footer } from "../layout";

import {
  peperoniPizza,
  waveYellowOrange1,
  waveYellowOrange2,
  waveYellowWhite1,
  waveYellowWhite3,
} from "../assets";

import Roadmap from "../components/Roadmap/Roadmap";
import WavySpacer from "../components/design/WavySpacer";

const LandingPage = () => {
  return (
    <div className="overflow-hidden w-full square-framed-container m-auto">
      <Navbar />
      <Hero />
      <WavySpacer bgWaveUrl={waveYellowWhite1} flip={false} />
      {/* Pepperoni Pizza */}
      <div className="absolute top-330 md:top-250 right-0 pointer-events-none z-11 overflow-hidden">
        <img
          src={peperoniPizza}
          alt="Pepperoni Pizza"
          style={{
            zIndex: 9999,
            transformOrigin: "center center",
            animation: "clockSpin 20s linear infinite",
          }}
          className="w-[400px] relative -right-40"
        />
        <style>{`
          @keyframes clockSpin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </div>
      <About />
      <WavySpacer bgWaveUrl={waveYellowWhite3} flip={true} />
      {/* <LogoShowcase /> */}
      <Roadmap />
      <WavySpacer bgWaveUrl={waveYellowWhite1} flip={false} />
      {/* <Feature /> */}
      <Tokenomics />
      <WavySpacer bgWaveUrl={waveYellowOrange1} flip={true} />
      {/* <GlowingTokenOrbit
        imageSrc={logo}
        label="$PEPERONI – THE MOST DELICIOUS TOKEN"
      /> */}
      {/* <InfiniteCarousel images={images} speed={30} /> */}
      <CTA />
      <WavySpacer bgWaveUrl={waveYellowOrange2} flip={false} />
      <Footer />
    </div>
  );
};

export default LandingPage;
