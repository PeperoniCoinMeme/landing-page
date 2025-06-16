import React, { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Section } from "../../layout";
import {
  pepeCivilian,
  pepePets,
  pepePresident,
  pepeSpy,
  pepeSurf,
  pepeWarrior,
  pepeFitSkinny,
  pepeBanner,
  pepeCar,
  pepeClimbing,
  pepeFitStrong,
  pepeLogo,
  orangeScatteredYellow1,
} from "../../assets";

import "./About.css";
import { words } from "../../constants";
import LandingTitle from "../design/tipography/LandingTitle";
import LandingHero from "../design/tipography/LandingHero";

const About = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  const images = [
    pepeBanner,
    pepeFitStrong,
    pepePresident,
    pepeCivilian,
    pepeSurf,
    pepeSpy,
    pepeClimbing,
    pepeCar,
    pepeWarrior,
    pepeLogo,
  ];

  return (
    <Section
      id="about"
      className="pt-50 pb-90 md:px-20 px-4 lg:px-40 flex flex-col md:flex-row justify-center"
      backgroundSvg={orangeScatteredYellow1}
    >
      <section className="shadow-inner bg-white overflow-hidden rounded-xl md:px-16 px-6 py-10 z-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-50">
          {/* Text Column */}
          <div className="hero-text flex flex-col justify-center font-semibold relative z-50">
            <h1 className="pointer-events-none text-2xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-red-700 dark:text-red-400 leading-tight mb-6 hero-font">
              <LandingHero>About Peperoni in</LandingHero>{" "}
              <span className="slide absolute pt-0 px-2 h-[55px] overflow-hidden">
                <span className="wrapper">
                  {words.map((word, index) => (
                    <span
                      key={index}
                      className="flex items-center md:gap-3 gap-1 pb-2"
                    >
                      <img
                        src={word.imgPath}
                        alt="person"
                        className="object-contain xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                      />
                      <LandingTitle>{word.text}</LandingTitle>
                    </span>
                  ))}
                </span>
              </span>
              <br />
            </h1>
            <p className="text-lg sm:text-xl text-gray-800 dark:text-gray-300 mb-8 max-w-lg">
              The first emotionally-backed cryptocurrency built on blockchain
              and powered by pizza. Community-focused, reward-driven, and 100%
              cheesy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#buy" className="hero-btn">
                🍕 Buy Now
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="grid-memes">
              {images.map((src, index) => (
                <div className="grid-item" key={index}>
                  <img src={src} alt={`meme-${index}`} className="h-16" />
                </div>
              ))}

              {/* Shadow */}
              {/* <TrackingShadow /> */}
            </div>
          </div>
        </div>
      </section>
    </Section>
  );
};

export default About;
