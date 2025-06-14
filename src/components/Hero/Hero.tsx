import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { Section } from "../../layout";
import { logo, wave1 } from "../../assets";
import { words } from "../../constants";
import AnimatedCounter from "../AnimatedCounter/AnimatedCounter";
import HeroExperience from "../models/Hero/HeroExperience";
import WavySpacer from "../design/WavySpacer";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <Section
      id="hero"
      className="pt-28 pb-10 flex flex-col md:flex-row justify-center"
      bgColor="#060000"
    >
      <section className="relative overflow-hidden py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
          {/* Text Column */}
          <div className="hero-text">
            <h1 className="pointer-events-none text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-red-700 dark:text-red-400 leading-tight mb-6 hero-font">
              Invest in{" "}
              <span className="slide">
                <span className="wrapper">
                  {words.map((word, index) => (
                    <span
                      key={index}
                      className="flex items-center md:gap-3 gap-1 pb-2"
                    >
                      <img
                        src={word.imgPath}
                        alt="person"
                        className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                      />
                      <span>{word.text}</span>
                    </span>
                  ))}
                </span>
              </span>
              <br />
              <span className="bg-gradient-to-r from-red-500 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Peperoni Coin
              </span>
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
              <a href="#tokenomics" className="hero-btn">
                📊 View Tokenomics
              </a>
            </div>
          </div>

          {/* RIGHT: 3D Model or Visual */}
          <figure>
            <div className="hero-3d-layout">
              <HeroExperience />
            </div>
          </figure>
        </div>

        {/* Floating Background Pizza Decoration */}
        {/* <div className="absolute -top-20 -right-24 opacity-20 dark:opacity-10 z-0 pointer-events-none">
          <img
            src="/assets/pizza-bg.svg"
            alt=""
            aria-hidden="true"
            className="w-[300px] rotate-[15deg]"
          />
        </div> */}
      </section>
      <AnimatedCounter />
    </Section>
  );
};

export default Hero;
