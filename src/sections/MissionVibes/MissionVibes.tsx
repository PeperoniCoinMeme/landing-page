import React from "react";
import { Section } from "../../layout";

import {
  brickBg,
  splash,
  transitionDownBg,
  transitionUpBg,
} from "../../assets";
import LandingHero from "../../components/design/tipography/LandingHero";
import LandingText from "../../components/design/tipography/LandingText";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { layout } from "../../styles/styles";

const MissionVibes = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <Section
      id="missionvibes"
      className={`${layout.section} ${layout.sectionHeight}`}
      bgColor="linear-gradient(180deg, #0c0500, #000000)"
    >
      <section className="overflow-hidden px-4 md:px-20 lg:px-40 rounded-xl py-16 md:px-16 px-6 py-25">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative flex flex-col jutify-center"
        >
          <div className="text-center">
            <LandingHero>Mission & Vibes</LandingHero>
          </div>
          <div className="flex flex-col md:flex-row items-center my-6 flex-wrap relative z-50 gap-7">
            <LandingText>
              "Cooked by the People". What happens when you throw community,
              culture, and a little insanity into a Solana oven? You get
              $PEPERONI, a decentralized memecoin that isn’t built on hype, but
              on fun, fairness, and freedom.
            </LandingText>
            <LandingText>
              No tax scams. No VCs calling shots. Just a growing tribe of meme
              chefs baking something tastier than the usual crypto soup.
            </LandingText>
          </div>
          <p className="text-red-500 text-semibold text-xl underline pt-10 pb-4">
            Built different
          </p>
          {/* It’s not just a vibe — it’s a movement with mozzarella. */}
          <div className="flex flex-col md:flex-row gap-4 mt-2 z-50">
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
          <div className="py-8">{/* <LandingButton>See</LandingButton> */}</div>
        </motion.div>

        <div className="hole absolute bottom-20 left-1/2">
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </div>

        {/* Cheese With Pepperoni Splash */}
        <div className="top-110 left-40 md:top-60 md:left-150 absolute pointer-events-none z-0 overflow-hidden">
          <img
            src={splash}
            alt="Pepperoni Pizza"
            style={{
              zIndex: 9999,
              transformOrigin: "center center",
            }}
            className="md:w-[500px] w-[250px] relative"
          />
        </div>
      </section>
      <div className="absolute top-0 min-w-full w-[1920px] h-24 bg-gradient-to-t from-transparent to-[#0c0500] pointer-events-none z-9999" />
    </Section>
  );
};

export default MissionVibes;
