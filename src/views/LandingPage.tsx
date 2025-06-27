import React, { useEffect, useState } from "react";
import { Navbar, Footer } from "@/layout";
import {
  Hero,
  About,
  Join,
  MissionVibes,
  Roadmap,
  SliceOfUtility,
  Slicenomics,
} from "@/sections";
import RoadmapHeader from "@/sections/RoadmapHeader/RoadmapHeader";
import Loader from "@/components/Loader/Loader";
import BackToTopButton from "@/components/BackToTopButton/BackToTopButton";
import Carousel from "@/components/Carousel/Carousel";

const imageList: string[] = [];

const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => resolve();
    img.onerror = (err) => {
      console.error("Error loading:", src);
      reject(err);
    };
  });
};

const LandingPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Loading started");
    const preload = Promise.all(imageList.map(preloadImage));
    const delay = new Promise((resolve) => setTimeout(resolve, 5500));

    Promise.all([preload, delay])
      .then(() => {
        console.log("Loading finished");
        setLoading(false);
      })
      .catch((err) => {
        console.error("Some images failed to preload", err);
        setLoading(false);
      });
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
      <Carousel />
      {/* <LogoShowcase />  */}
      {/* <Feature />  */}

      {/* 4 */}
      <SliceOfUtility />

      {/* 5 */}
      <Slicenomics />

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
