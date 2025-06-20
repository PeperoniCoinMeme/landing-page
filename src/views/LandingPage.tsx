import React from "react";
import { Navbar, Footer } from "../layout";
import { peperoniPizza, planetBg, waveYellowDark1 } from "../assets";
import WavySpacer from "../components/design/WavySpacer";
import Feature from "../components/Feature/Feature";
import {
  Hero,
  About,
  Tokenomics,
  Join,
  MissionVibes,
  Roadmap,
  SliceOfUtility,
} from "../sections";
import RoadmapHeader from "../sections/RoadmapHeader/RoadmapHeader";
import ScrollReveal from "../components/ScrollReveal/ScrollReveal";
import BackToTopButton from "../components/BackToTopButton/BackToTopButton";

const LandingPage = () => {
  return (
    <div className="overflow-hidden w-full max-w-[1920px] square-framed-container m-auto">
      <Navbar />
      <BackToTopButton />

      {/* 1 */}
      <Hero />

      {/* 2 */}
      <About />

      {/* 3 */}
      <MissionVibes />
      <Feature />

      {/* 4 */}
      <SliceOfUtility />

      {/* 5 */}
      <Tokenomics />

      {/* <LogoShowcase /> */}

      {/* 6 */}
      <RoadmapHeader />
      <Roadmap />

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
