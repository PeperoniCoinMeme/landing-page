import React from "react";
import { Section } from "../../layout";
import {
  pepeCivilian,
  pepePets,
  pepePresident,
  pepeSpy,
  pepeSurf,
  pepeWarrior,
} from "../../assets";

import "./About.css";

const About = () => {
  const images = [
    pepeWarrior,
    pepeCivilian,
    pepePresident,
    pepeSpy,
    pepePets,
    pepeSurf,
  ];

  return (
    <Section
      id="about"
      className="py-10 flex flex-col md:flex-row justify-center"
    >
      <section className="bg-white dark:bg-zinc-800 py-20 px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
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
            <p className="text-gray-700 dark:text-gray-300">
              Our project is built on a passionate community, a deliciously
              limited supply, and real-world utilities that go far beyond the
              oven.
            </p>
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
