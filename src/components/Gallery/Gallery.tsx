import React from "react";
import "./Gallery.css";
import { div } from "framer-motion/client";
import LandingSubtitle from "../design/tipography/LandingSubtitle";
import {
  pepeBanner,
  pepeCar,
  pepeCivilian,
  pepeClimbing,
  pepeFitStrong,
  pepeLogo,
  pepePresident,
  pepeSpy,
  pepeSurf,
  pepeWarrior,
} from "../../assets";
import GalleryCard from "./GalleryCard";

const Gallery = () => {
  const images = [
    pepeFitStrong,
    pepePresident,
    pepeCivilian,
    pepeSurf,
    pepeSpy,
    pepeClimbing,
    pepeCar,
    pepeWarrior,
  ];

  const strips = ["one", "two", "three", "four"];

  const galleryBorder = "border-gray-200/20";

  return (
    <div
      className="relative max-w-[1000px] bg-gradient-to-b from-black/80 to-black/70"
      style={{ zIndex: 9999 }}
    >
      <div
        className={`h-[100vh] px-7 relative flex flex-row justify-between overflow-hidden border-x-1 ${galleryBorder}`}
        style={{ zIndex: 9999 }}
      >
        {strips.map((strip, stripIndex) => {
          const isEven = stripIndex % 2 === 0;
          const orderedImages = isEven ? images : [...images].reverse();

          return (
            <div key={strip} className={`gap-5 gallery__strip--${strip}`}>
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
      <div className="absolute bottom-0 w-full flex justify-center items-center bg-gradient-to-b from-bg-black/10 to-black/95 h-18 z-9999"></div>
      <div className="absolute top-0 w-full flex justify-center items-center bg-gradient-to-t from-bg-black/10 to-black/40 h-18 z-9999">
        <LandingSubtitle>The Peperoni gallery</LandingSubtitle>
      </div>
    </div>
  );
};

export default Gallery;
