import React from "react";
import { Section } from "../../layout";
import JoinButton from "../JoinButton/JoinButton";
import { logo, orangeScatteredYellow2, waveYellowOrange2 } from "../../assets";

const CTA = () => {
  return (
    <Section
      id="cta"
      className="py-18 md:px-20 px-4 lg:px-40 flex flex-col md:flex-row justify-center"
      bgColor="#FF4500"
    >
      <section className="relative rounded-xl shadow-lg overflow-hidden rounded-xl bg-white md:px-16 px-6 p-8 flex flex-col md:flex-row">
        <div className="max-w-3xl mx-auto space-y-2">
          <h2 className="text-xl font-extrabold text-orange-500 sm:text-4xl drop-shadow-md">
            Get Your Peperoni Coins Today!
          </h2>
          <p className="text-gray-500 leading-relaxed">
            Don’t miss out on the cheesiest opportunity in crypto. Buy $PEP and
            be part of the most flavorful movement on the blockchain.
          </p>
          <div className="mt-15 px-10">
            <JoinButton />
          </div>
        </div>

        <div className="relative justify-center flex-1">
          {/* Image Column */}
          <img
            src={logo}
            alt="Illustration of Peperoni Coin - crypto meets pizza"
            className="w-[150px] md:absolute max-w-md md:max-w-lg animate-float-slow"
          />
          <span className="w-[140px] hero-img-shadow top-60"></span>
        </div>
      </section>
    </Section>
  );
};

export default CTA;
