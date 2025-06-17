import React from "react";
import { Section } from "../../layout";

import { orangeScatteredYellow1 } from "../../assets";
import LandingButton from "../design/buttons/LandingButton";
import LandingHero from "../design/tipography/LandingHero";
import LandingText from "../design/tipography/LandingText";

const SliceOfUtility = () => {
  return (
    <Section
      id="sliceofutility"
      className="py-10 md:px-20 px-4 lg:px-40 flex flex-col md:flex-row justify-center"
    >
      <section className="overflow-hidden rounded-xl py-16 md:px-16 px-6 text-center">
        <div className="relative flex flex-col jutify-center">
          <div className="mb-5 text-center">
            <LandingHero color="white">The Slice of Utility</LandingHero>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center my-6 flex-wrap relative z-50 gap-7">
            <LandingText>
              Whether you're a builder, creator, degen, or just here for the
              sauce — $PEPERONI isn't just a memecoin, it’s a full-course
              utility token inside the world’s most flavorful Web3 experience.
            </LandingText>
          </div>

          <i>
            Built on Solana for blazing speed. Fueled by community and
            creativity. Designed to be used, not just held.{" "}
          </i>

          <div className="pt-8">
            <LandingButton>Services</LandingButton>
          </div>
        </div>
      </section>
    </Section>
  );
};

export default SliceOfUtility;
