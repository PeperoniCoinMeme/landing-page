import React from "react";
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
} from "../../assets";

import "./About.css";

const About = () => {
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
      className="py-10 flex flex-col md:flex-row justify-center"
      bgColor="#f0491c"
    >
      <section className="bg-[#130505] py-20 px-16 overflow-hidden rounded-xl">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center min-h-[350px]">
          <div>
            <h2 className="text-3xl font-bold text-red-600 dark:text-red-400 mb-4">
              What is Peperoni Coin?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Peperoni Coin ($PEP) was created with a simple purpose: to combine
              the love of pizza with the power of blockchain. Whether you're a
              crypto enthusiast or a pepperoni lover, there's a slice for
              everyone here.
            </p>

            <div className="flex flex-row justify-between gap-4 my-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#buy" className="hero-btn">
                  🍕 Buy Now
                </a>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="grid-memes">
              {images.map((src, index) => (
                <div className="grid-item" key={index}>
                  <img src={src} alt={`meme-${index}`} className="h-16" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Section>
  );
};

export default About;
