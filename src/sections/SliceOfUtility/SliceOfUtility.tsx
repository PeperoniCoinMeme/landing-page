import React, { useRef } from "react";
import { Section } from "../../layout";

import {
  brickBg,
  orangeScatteredYellow1,
  orangeScatteredYellow2,
  transitionDownBg,
} from "../../assets";

import { MouseParallax } from "react-just-parallax";
import LandingButton from "../../components/design/buttons/LandingButton";
import LandingHero from "../../components/design/tipography/LandingHero";
import LandingText from "../../components/design/tipography/LandingText";
import { ParallaxPepperoni } from "../../components/ParallaxPepperoni/ParallaxPepperoni";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SliceOfUtility = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  return (
    <Section
      id="sliceofutility"
      className="relative md:px-20 px-4 lg:px-40 flex flex-col md:flex-row justify-center min-h-255"
      bgColor="linear-gradient(180deg, #0c0500, #000000 )"
      // backgroundSvg={transitionDownBg}
    >
      <section className="relative rounded-xl py-16 md:px-16 px-6 py-30">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative flex flex-col justify-center"
        >
          <div className="text-center">
            <LandingHero color="white">The Slice of Utility</LandingHero>
          </div>

          <div className="flex flex-col md:flex-row items-center my-6 flex-wrap relative z-50 gap-7">
            <LandingText>
              Whether you're a builder, creator, degen, or just here for the
              sauce — $PEPERONI isn't just a memecoin, it’s a full-course
              utility token inside the world’s most flavorful Web3 experience.
            </LandingText>

            <LandingText>
              Built on Solana for blazing speed. Fueled by community and
              creativity. Designed to be used, not just held.
            </LandingText>
          </div>

          <div className="pt-4">
            <LandingButton>Services</LandingButton>
          </div>
          <ParallaxPepperoni />
        </motion.div>
      </section>
    </Section>
  );
};

export default SliceOfUtility;
