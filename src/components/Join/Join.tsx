import React from "react";
import { Section } from "../../layout";
import JoinButton from "../JoinButton/JoinButton";
import { logo, orangeScatteredYellow2, waveYellowOrange2 } from "../../assets";
import LandingHero from "../design/tipography/LandingHero";

const Join = () => {
  return (
    <Section
      id="join"
      className="py-18 md:px-20 px-4 lg:px-40 flex flex-col md:flex-row justify-center"
      bgColor="#FF4500"
    >
      <section className="relative rounded-xl shadow-lg rounded-xl bg-white md:px-16 px-6 p-8 md:py-12 flex flex-col md:flex-row">
        <div className="max-w-3xl mx-auto space-y-2">
          <LandingHero>Join to the Pizza!</LandingHero>

          <p className="text-gray-500 leading-relaxed">
            Don’t miss out on the cheesiest opportunity in crypto. Buy $PEP and
            be part of the most flavorful movement on the blockchain.
          </p>
          <div className="mt-15 px-10"></div>
        </div>

        <div className="relative justify-center flex-1">
          {/* Image Column */}
        </div>
      </section>
    </Section>
  );
};

export default Join;
