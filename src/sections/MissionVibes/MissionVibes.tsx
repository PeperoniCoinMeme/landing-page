import React from "react";
import { Section } from "../../layout";

import { brickBg, splash, transitionDownBg } from "../../assets";
import LandingHero from "../../components/design/tipography/LandingHero";
import LandingText from "../../components/design/tipography/LandingText";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const MissionVibes = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <Section
      id="missionvibes"
      className="md:px-20 px-4 lg:px-40 flex flex-col md:flex-row justify-center min-h-255"
      // bgColor="#1e1e1e"
      backgroundSvg={transitionDownBg}
    >
      <section className="overflow-hidden rounded-xl py-16 md:px-16 px-6 py-25">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative flex flex-col jutify-center"
        >
          <div className="text-center">
            <LandingHero color="white ">Mission & Vibes</LandingHero>
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

        {/* Cheese With Pepperoni Splash */}
        <div className="top-190 md:top-90 md:right-50 absolute pointer-events-none z-0 overflow-hidden">
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
