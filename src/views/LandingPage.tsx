import React from "react";
import { About, CTA, Hero, Tokenomics } from "../components";
import { Navbar, Footer } from "../layout";

import {
  peperoniPizza,
  waveYellowBlack1,
  waveYellowBlack2,
  waveYellowBlack4,
  waveYellowBlack5,
  waveYellowDark1,
  waveYellowDark2,
  waveYellowOrange1,
  waveYellowOrange2,
  waveYellowWhite1,
  waveYellowWhite2,
  waveYellowWhite3,
} from "../assets";

import Roadmap from "../components/Roadmap/Roadmap";
import WavySpacer from "../components/design/WavySpacer";
import MissionVibes from "../components/MissionVibes/MissionVibes";

import Join from "../components/Join/Join";
import SliceOfUtility from "../components/SliceOfUtility/SliceOfUtility";
import Feature from "../components/Feature/Feature";

const LandingPage = () => {
  return (
    <div className="overflow-hidden w-full max-w-[1920px] square-framed-container m-auto">
      <Navbar />
      {/* 1 */}
      <Hero />

      {/* 2 */}
      <About />
      <WavySpacer bgWaveUrl={waveYellowDark1} flip={false} />

      {/* 3 */}
      <MissionVibes />
      <Feature />
      {/* 4 */}
      <SliceOfUtility />
      <WavySpacer bgWaveUrl={waveYellowDark2} flip={true} />

      {/* 5 */}
      <Tokenomics />
      {/* Pepperoni Pizza */}
      <div className="absolute top-900 md:top-1200 right-0 opacity-30 pointer-events-none z-11 overflow-hidden">
        <img
          src={peperoniPizza}
          alt="Pepperoni Pizza"
          style={{
            zIndex: 9999,
            transformOrigin: "center center",
            animation: "clockSpin 20s linear infinite",
          }}
          className="w-[450px] relative -right-40"
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

      <WavySpacer bgWaveUrl={waveYellowDark1} flip={false} />
      {/* <LogoShowcase /> */}

      {/* 6 */}
      <Roadmap />
      <WavySpacer bgWaveUrl={waveYellowBlack4} flip={false} />
      {/* <GlowingTokenOrbit
        imageSrc={logo}
        label="$PEPERONI – THE MOST DELICIOUS TOKEN"
      /> */}
      {/* <InfiniteCarousel images={images} speed={30} /> */}
      {/* <WavySpacer bgWaveUrl={waveYellowBlack1} flip={true} /> */}
      {/* 7 */}
      <Join />
      {/* <CTA /> */}
      {/* <WavySpacer bgWaveUrl={waveYellowBlack1} flip={false} /> */}

      <Footer />
    </div>
  );
};

export default LandingPage;
