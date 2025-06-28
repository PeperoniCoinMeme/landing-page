import React, { useMemo } from "react";
import "./Gallery.css";
import { div } from "framer-motion/client";
import LandingSubtitle from "../design/tipography/LandingSubtitle";
import {
  pepeAviator,
  pepeBanner,
  pepeBaseball,
  pepeBoxer,
  pepeCar,
  pepeCatPizza,
  pepeCivilian,
  pepeClimbing,
  pepeCook,
  pepeCop,
  pepeDavinci,
  pepeFitSkinny,
  pepeFitStrong,
  pepeGamer,
  pepeGifted,
  pepeHonors,
  pepeJumproper,
  pepeLanding,
  pepeLibrary,
  pepeLogo,
  pepeMilitary,
  pepeMiner,
  pepePeperoni,
  pepePets,
  pepePig,
  pepePresident,
  pepeSamurai,
  pepeSpy,
  pepeWar,
  pepeWarrior,
  pepeWelder,
} from "../../assets";
import GalleryCard from "./GalleryCard";
import LandingTitle from "../design/tipography/LandingTitle";

const useResponsiveStrips = (): string[] => {
  return useMemo(() => {
    const isSmall = window.matchMedia("(max-width: 768px)").matches;
    return isSmall ? ["one", "two"] : ["one", "two", "three", "four"];
  }, []);
};

const Gallery = () => {
  const images = [
    pepeCop,
    pepeDavinci,
    pepeMiner,
    pepeGamer,
    pepeMilitary,
    pepeGifted,
    pepeHonors,
    pepeJumproper,
    pepeLanding,
    pepeLibrary,
    pepePeperoni,
    pepePig,
    pepeCar,
    pepeCivilian,
    pepeClimbing,
    pepeFitStrong,
    pepeFitSkinny,
    pepePets,
    pepePresident,
    pepeSpy,
    pepeWarrior,
    pepeAviator,
    pepeBaseball,
    pepeBoxer,
    pepeCatPizza,
    pepeCook,
    pepeWelder,
    pepeSamurai,
    pepeWar,
  ];

  const galleryBorder = "border-gray-200/20";

  return (
    <div
      className="relative max-w-[1000px] bg-gradient-to-b from-black/80 to-black/70"
      style={{ zIndex: 9999 }}
    >
      <div
        className={`h-[100vh] md:px-7 px-2 relative flex flex-row justify-around overflow-hidden border-x-1 ${galleryBorder}`}
        style={{ zIndex: 9999 }}
      >
        {useResponsiveStrips().map((strip, stripIndex) => {
          const chunkSize = Math.ceil(
            images.length / useResponsiveStrips().length
          );
          const start = stripIndex * chunkSize;
          const end = start + chunkSize;
          const chunk = images.slice(start, end);

          const isEven = stripIndex % 2 === 0;
          const orderedImages = isEven ? chunk : [...chunk].reverse();

          return (
            <div
              key={strip}
              className={`gap-5 gallery__strip gallery__strip--${strip}`}
            >
              {orderedImages.map((src, imgIndex) => (
                <GalleryCard
                  key={`${stripIndex}-${imgIndex}`}
                  imageUrl={src}
                  className={`my-2 mx-1 md:my-4 md:mx-2 rounded-lg gallery-card border-1 ${galleryBorder}`}
                />
              ))}
            </div>
          );
        })}
      </div>
      <div className="absolute top-0 lg:hidden w-full flex justify-center items-center bg-gradient-to-t lg:bg-gradient-to-b from-bg-black/10 to-black/95 h-18 z-9999"></div>
      <div className="absolute bottom-0 lg:top-0 w-full flex justify-center items-center bg-gradient-to-b lg:bg-gradient-to-t from-bg-black/10 to-black/40 h-18 z-9999">
        <LandingTitle className="lg:text-4xl text-xl my-2">
          Gallery
        </LandingTitle>
      </div>
    </div>
  );
};

export default Gallery;
