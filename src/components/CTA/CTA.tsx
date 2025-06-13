import React from "react";
import { Section } from "../../layout";
import JoinButton from "../JoinButton/JoinButton";

const CTA = () => {
  return (
    <Section
      id="cta"
      className="py-10 flex flex-col md:flex-row justify-center"
    >
      <section
        id="buy"
        className="px-10 bg-gradient-to-r from-zinc-800 to-zinc-800 text-white py-20 px-6 rounded-lg shadow-lg"
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
      </section>
    </Section>
  );
};

export default CTA;
