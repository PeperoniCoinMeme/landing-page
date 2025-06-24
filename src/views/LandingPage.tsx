import React, { useEffect, useState } from "react";
import { Navbar, Footer } from "../layout";
import { peperoniPizza, planetBg, waveYellowDark1 } from "../assets";
import WavySpacer from "../components/design/WavySpacer";
import Feature from "../components/Feature/Feature";
import {
  Hero,
  About,
  Join,
  MissionVibes,
  Roadmap,
  SliceOfUtility,
  Slicenomics,
} from "../sections";
import RoadmapHeader from "../sections/RoadmapHeader/RoadmapHeader";
import ScrollReveal from "../components/ScrollReveal/ScrollReveal";
import BackToTopButton from "../components/BackToTopButton/BackToTopButton";
import Loader from "../components/Loader/Loader";

const imageList = [
  "/images/hero.jpg",
  "/images/logo.png",
  "/images/banner.jpg",
];

const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => resolve();
    img.onerror = () => reject();
  });
};

const LandingPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all(imageList.map(preloadImage))
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="overflow-hidden w-full max-w-[1920px] m-auto">
      <Navbar />
      <BackToTopButton />

      {/* 1 */}
      <Hero />

      {/* 2 */}
      <About />

      {/* 3 */}
      <MissionVibes />
      {/* <Feature /> */}

      {/* 4 */}
      <SliceOfUtility />

      {/* 5 */}
      <Slicenomics />

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
