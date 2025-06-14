import React from "react";
import { Section } from "../../layout";
import JoinButton from "../JoinButton/JoinButton";
import { logo } from "../../assets";

const CTA = () => {
  return (
    <Section
      id="cta"
      className="py-10 flex flex-col md:flex-row justify-center"
      bgColor="#f0491c"
    >
      <section
        id="buy"
        className="relative px-10 bg-[#130505] text-white py-20 px-6 rounded-xl shadow-lg"
      >
        <div className="max-w-3xl mx-auto space-y-2">
          <h2 className="text-xl font-extrabold tracking-tight sm:text-4xl drop-shadow-md">
            Get Your Peperoni Coins Today!
          </h2>
          <p className="text-white/90 leading-relaxed">
            Don’t miss out on the cheesiest opportunity in crypto. Buy $PEP and
            be part of the most flavorful movement on the blockchain.
          </p>
          <div className="mt-15 px-10">
            <JoinButton />
          </div>
        </div>

        <div className="absolute top-40 right-20 justify-center md:-mt-40">
          {/* Image Column */}
          <img
            src={logo}
            alt="Illustration of Peperoni Coin - crypto meets pizza"
            className="w-[150px] md:absolute -top-10 max-w-md md:max-w-lg animate-float-slow"
          />
          <span className="w-[140px] hero-img-shadow top-60"></span>
        </div>
      </section>
    </Section>
  );
};

export default CTA;
