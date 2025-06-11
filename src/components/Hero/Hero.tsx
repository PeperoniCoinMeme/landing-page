import React from "react";
import { Section } from "../../layout";
import { logo } from "../../assets";

const Hero = () => {
  return (
    <Section
      id="hero"
      className="py-10 bg-white flex flex-col md:flex-row justify-center"
    >
      <section className="relative overflow-hidden bg-gradient-to-br from-yellow-100 via-red-100 to-orange-100 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 py-28 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
          {/* Text Column */}
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-red-700 dark:text-red-400 leading-tight mb-6">
              Invest in Flavor.
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
              <a
                href="#buy"
                className="inline-block px-6 py-3 bg-red-600 text-white font-semibold rounded-full shadow-lg hover:bg-red-700 transition"
              >
                🍕 Buy Now
              </a>
              <a
                href="#tokenomics"
                className="inline-block px-6 py-3 bg-white dark:bg-zinc-800 border border-red-500 text-red-600 dark:text-red-300 rounded-full hover:bg-yellow-100 dark:hover:bg-zinc-700 transition"
              >
                📊 View Tokenomics
              </a>
            </div>
          </div>

          {/* Image Column */}
          <div className="relative flex justify-center">
            <img
              // src="/assets/hero-peperoni-crypto.svg"
              src={logo}
              alt="Illustration of Peperoni Coin - crypto meets pizza"
              className="w-[210px] max-w-md md:max-w-lg animate-float-slow"
            />
          </div>
        </div>

        {/* Floating Background Pizza Decoration */}
        <div className="absolute -top-20 -right-24 opacity-20 dark:opacity-10 z-0 pointer-events-none">
          <img
            src="/assets/pizza-bg.svg"
            alt=""
            aria-hidden="true"
            className="w-[300px] rotate-[15deg]"
          />
        </div>
      </section>
    </Section>
  );
};

export default Hero;
