import React from "react";
import { Section } from "../../layout";

import { orangeScatteredYellow1, splash } from "../../assets";
import LandingButton from "../design/buttons/LandingButton";
import LandingHero from "../design/tipography/LandingHero";
import LandingText from "../design/tipography/LandingText";

const MissionVibes = () => {
  return (
    <Section
      id="missionvibes"
      className="py-10 md:px-20 px-4 lg:px-40 flex flex-col md:flex-row justify-center"
      bgColor="#ffffff"
    >
      <section className="overflow-hidden rounded-xl py-16 md:px-16 px-6">
        <div className="relative flex flex-col jutify-center">
          <div className="text-center">
            <LandingHero>Mission & Vibes</LandingHero>
          </div>
          <div className="flex flex-col md:flex-row items-center my-6 flex-wrap relative z-50 gap-7">
            <LandingText>
              What happens when you throw community, culture, and a little
              insanity into a Solana oven? You get $PEPERONI — a decentralized
              memecoin that isn’t built on hype, but on fun, fairness, and
              freedom.
            </LandingText>
            <LandingText>
              No tax scams. No VCs calling shots. Just a growing tribe of meme
              chefs baking something tastier than the usual crypto soup.
            </LandingText>
          </div>
          <p className="text-red-500 font-bold my-4 underline px-4 py-4">
            Built different
          </p>
          <div className="flex flex-col md:flex-row gap-4 -mt-5 z-50">
            <div className="w-full md:w-40 flex justify-center items-center text-xs text-white shadow-lg font-bold bg-gradient-to-r from-zinc-800 to-zinc-800 rounded-xl px-4 py-3 md:py-1">
              LP burned
            </div>
            <div className="w-full md:w-40 flex justify-center items-center text-xs text-white shadow-lg font-bold bg-gradient-to-r from-zinc-800 to-zinc-800 rounded-xl px-4 py-3 md:py-1">
              Ownership renounced
            </div>
            <div className="w-full md:w-40 flex justify-center items-center text-xs text-white shadow-lg font-bold bg-gradient-to-r from-zinc-800 to-zinc-800 rounded-xl px-4 py-3 md:py-1">
              Meme-first mission
            </div>
            <div className="w-full md:w-40 flex justify-center items-center text-xs text-white shadow-lg font-bold bg-gradient-to-r from-zinc-800 to-zinc-800 rounded-xl px-4 py-3 md:py-1">
              Permissionless utility layer on Solana
            </div>
          </div>
          It’s not just a vibe — it’s a movement with mozzarella.
          <div className="py-8">
            {/* <LandingButton>See</LandingButton> */}:
          </div>
        </div>
        {/* Cheese With Pepperoni Splash */}
        <div className="top-190 md:top-55 md:right-50 absolute pointer-events-none z-0 overflow-hidden">
          <img
            src={splash}
            alt="Pepperoni Pizza"
            style={{
              zIndex: 9999,
              transformOrigin: "center center",
            }}
            className="w-[500px] relative"
          />
        </div>
      </section>
    </Section>
  );
};

export default MissionVibes;
