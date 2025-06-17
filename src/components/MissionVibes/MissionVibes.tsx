import React from "react";
import { Section } from "../../layout";

import { orangeScatteredYellow1 } from "../../assets";
import LandingButton from "../design/buttons/LandingButton";
import LandingHero from "../design/tipography/LandingHero";
import LandingText from "../design/tipography/LandingText";

const MissionVibes = () => {
  return (
    <Section
      id="missionvibes"
      className="py-10 md:px-20 px-4 lg:px-40 flex flex-col md:flex-row justify-center"
    >
      <section className="overflow-hidden rounded-xl py-16 md:px-16 px-6 text-center">
        <div className="relative flex flex-col jutify-center">
          <div className="mb-5 text-center">
            <LandingHero color="white">Mission & Vibes</LandingHero>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center my-6 flex-wrap relative z-50 gap-7">
            <LandingText>
              What happens when you throw community, culture, and a little
              insanity into a Solana oven? You get $PEPERONI — a decentralized
              memecoin that isn’t built on hype, but on fun, fairness, and
              freedom.
            </LandingText>
          </div>

          <div>
            Built different: - ✅ LP burned - ✅ Ownership renounced - ✅
            Meme-first mission - ✅ Permissionless utility layer on Solana It’s
            not just a vibe — it’s a movement with mozzarella.
          </div>

          <div className="pt-8">
            <LandingButton>See</LandingButton>
          </div>
        </div>
      </section>
    </Section>
  );
};

export default MissionVibes;
