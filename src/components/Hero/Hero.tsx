import React from "react";
import { Section } from "../../layout";
import { iaOven, logo, wave1 } from "../../assets";
import AnimatedCounter from "../AnimatedCounter/AnimatedCounter";
import HeroExperience from "../models/Hero/HeroExperience";
import WavySpacer from "../design/WavySpacer";
import LandingTitle from "../design/tipography/LandingTitle";
import LandingHero from "../design/tipography/LandingHero";
import LandingButton from "../design/buttons/LandingButton";

const Hero = () => {
  return (
    <Section
      id="hero"
      className="relative pt-28 pb-10 flex flex-col md:flex-row justify-around overflow-hidden"
      bgColor="#ffffff"
    >
      <div className="flex flex-col sm:flex-row justify-around p-5">
        {/* First Info container */}
        <div className="flex flex-col p-10 justify-center flex-1">
          <LandingHero>
            DELICIOUSLY <br />
            COOKED BY YOU
          </LandingHero>{" "}
          <p className="text-gray-400 max-w-80 text-sm">
            Not just a coin, not just a meme. $PEPERONI is a community payment
            token built to celebrate the people who make Web3 spicy—creators,
            builders, and degens.
          </p>
        </div>
        {/* Oven container */}
        <div className="flex flex-col p-5 justify-center flex-1">
          <div className="oven-container mx-5 mb-5 relative">
            <figure>
              <div className="hero-3d-layout">
                <HeroExperience />
              </div>
            </figure>
            {/* Oven Image */}
            <img src={iaOven} alt="" className="max-w-60 md:max-w-110" />
          </div>{" "}
          {/* <div className="flex flex-col sm:flex-row justify-around gap-3">
            <a href="#buy" className="hero-btn">
              🍕 Buy
            </a>
            <a href="#tokenomics" className="hero-btn">
              📊 Bake
            </a>
          </div> */}
        </div>
        {/* Wallet container */}
        <div className="flex flex-col gap-1 items-end p-10 pt-25 flex-1">
          <LandingButton>Connect</LandingButton>
          {/* <span className="flex flex-row gap-2 items-center px-5 py-1 rounded-xl bg-gradient-to-r from-orange-800 to-red-900 border-2 border-gray-100 hover:border-yellow-500 hover:text-white transition-all shadow-lg">
            <img src={logo} alt="" className="max-w-7" />
            <p className="text-sm">1.234.884</p>
          </span>
          <div className="border-2 border-gray-300 my-1 px-5 py-4 rounded-lg shadow-md">
            <p className="text-gray-900">Leader board</p>
          </div> */}
        </div>
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

      <AnimatedCounter />
    </Section>
  );
};

export default Hero;
