import React from "react";
import { Section } from "../../layout";

const About = () => {
  return (
    <Section
      id="about"
      className="py-10 flex flex-col md:flex-row justify-center"
    >
      <section className="bg-white dark:bg-zinc-800 py-20 px-6">
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
          <img
            src="/assets/peperoni-crypto-illustration.svg"
            alt="Peperoni Coin crypto illustration"
            className="w-full max-w-sm mx-auto"
          />
        </div>
      </section>
    </Section>
  );
};

export default About;
