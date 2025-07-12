import { useEffect, useState } from "react";
import { Navbar, Footer } from "@/layout";
import {
  Hero,
  About,
  Join,
  MissionVibes,
  Roadmap,
  RoadmapHeader,
  SliceOfUtility,
  Slicenomics,
} from "@/sections";
import Loader from "@/components/Loader/Loader";
import BackToTopButton from "@/components/BackToTopButton/BackToTopButton";
import Carousel from "@/components/Carousel/Carousel";
import React from "react";
import {
  astronaut1,
  astronaut2,
  brickBg,
  cheeseMoon,
  goldenMemeCoin,
  iaOven,
  mountainBg,
  parachutes1,
  parachutes2,
  parachutes3,
  parachutes4,
  peperoniPizza,
  planetBg,
  satelliteCold,
  smartPhone,
} from "@/assets";
import { meltingCheese } from "../assets";

const imageList: string[] = [
  iaOven,
  brickBg,
  goldenMemeCoin,
  smartPhone,
  cheeseMoon,
  peperoniPizza,
  astronaut1,
  astronaut2,
  parachutes1,
  parachutes2,
  parachutes3,
  parachutes4,
  planetBg,
  mountainBg,
  meltingCheese,
  satelliteCold,
];

const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      //   console.log(`✅ Img loaded: ${src}`);
      resolve();
    };
    img.onerror = (err) => {
      console.error("Error loading:", src);
      reject(err);
    };
  });
};

const LandingPage = () => {
  const [loading, setLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

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
      {!isDialogOpen && <BackToTopButton />}

      {/* 1 */}
      <Hero />

      {/* 2 */}
      <About />

      {/* 3 */}
      <MissionVibes />
      <Carousel />

      {/* 4 */}
      <SliceOfUtility />

      {/* 5 */}
      <Slicenomics />

      {/* 6 */}
      <RoadmapHeader />
      <Roadmap />

      {/* 7 */}
      <Join setIsDialogOpen={setIsDialogOpen} />

      <Footer />
    </div>
  );
};

export default LandingPage;
