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

import {
  CurrencyDollarIcon,
  FireIcon,
  ShoppingCartIcon,
  ChartBarIcon,
  GiftIcon,
} from "@heroicons/react/24/solid";
import LandingText from "../design/tipography/LandingText";

// Array de objetos con texto e iconos relacionados
const cryptoPizzaWords = [
  {
    text: "Bitcoin Payments",
    icon: (
      <CurrencyDollarIcon className="xl:size-12 md:size-10 size-7 text-orange-500" />
    ),
  },
  {
    text: "Pizza Delivery",
    icon: <FireIcon className="xl:size-12 md:size-10 size-7 text-yellow-500" />,
  },
  {
    text: "Crypto Commerce",
    icon: (
      <ShoppingCartIcon className="xl:size-12 md:size-10 size-7 text-gray-800" />
    ),
  },
  {
    text: "Market Trends",
    icon: (
      <ChartBarIcon className="xl:size-12 md:size-10 size-7 text-green-300" />
    ),
  },
  {
    text: "Special Rewards",
    icon: <GiftIcon className="xl:size-12 md:size-10 size-7 text-yellow-400" />,
  },
  {
    text: "Hot Deals",
    icon: <FireIcon className="xl:size-12 md:size-10 size-7 text-orange-600" />,
  },
];

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
      <section className="rounded-xl md:px-16 px-6 py-10 z-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-50">
          {/* Text Column */}
          <div className="hero-text flex flex-col justify-center font-semibold relative z-50">
            <h1 className="pointer-events-none text-2xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-red-700 dark:text-red-400 leading-tight mb-6 hero-font">
              <LandingHero color="white">About Peperoni in</LandingHero>{" "}
              <span className="slide absolute pt-0 px-2 h-[55px] overflow-hidden">
                <span className="wrapper">
                  {/* {words.map((word, index) => (
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
                  ))} */}
                  {cryptoPizzaWords.map((item, index) => (
                    <span
                      key={index}
                      className="flex flex-row items-center md:gap-3 gap-1"
                    >
                      <span className="object-contain rounded-full bg-white bg-opacity-50">
                        {item.icon}
                      </span>
                      <LandingTitle color="white">{item.text}</LandingTitle>
                    </span>
                  ))}
                </span>
              </span>
              <br />
            </h1>
            <div className="mb-8 max-w-lg">
              <LandingText color="white">
                The first emotionally-backed cryptocurrency built on blockchain
                and powered by pizza. Community-focused, reward-driven, and 100%
                cheesy.
              </LandingText>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#buy"
                className="hero-btn md:bg-transparent md:text-white bg-orange-300"
              >
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
