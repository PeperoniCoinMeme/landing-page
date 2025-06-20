import React from "react";
import { Section } from "../../layout";
import { brickBg, iaOven } from "../../assets";
import AnimatedCounter from "../../components/AnimatedCounter/AnimatedCounter";
import LandingButton from "../../components/design/buttons/LandingButton";
import LandingHero from "../../components/design/tipography/LandingHero";
import LandingText from "../../components/design/tipography/LandingText";
import HeroExperience from "../../components/models/Hero/HeroExperience";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <Section
      id="hero"
      className="relative flex flex-col md:flex-row justify-around overflow-hidden min-h-255"
      bgColor="#191716"
      backgroundSvg={brickBg}
    >
      <div className="pt-40 flex flex-col sm:flex-row justify-around px-5">
        {/* First Info container */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col p-10 md:p-18 justify-center flex-1"
        >
          <LandingHero>
            DELICIOUSLY <br />
            COOKED BY YOU
          </LandingHero>{" "}
          <div className="max-w-80">
            <LandingText>
              Not just a coin, not just a meme. $PEPERONI is a community payment
              token built to celebrate the people who make Web3 spicy—creators,
              builders, and degens.
            </LandingText>
          </div>
        </motion.div>
        {/* Oven container */}
        <div className="flex flex-col px-5 justify-center flex-1">
          <div className="oven-container mx-5 mb-5 relative">
            <figure>
              <div className="hero-3d-layout">
                <HeroExperience />
              </div>
            </figure>
            {/* Oven Image */}
            <img
              src={iaOven}
              alt=""
              className="absolute max-w-60 md:max-w-280 -top-100 -left-90"
              style={{ zIndex: 400 }}
            />
          </div>{" "}
          {/* <div className="flex flex-col sm:flex-row justify-around gap-3">
            <a href="#buy" className="hero-btn">
              🍕 Buy
            </a>
            <a href="#tokenomics" className="hero-btn">
              📊 Bake
            </a>
          </div> */}
        </div>
        {/* Wallet container */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-1 items-end p-10 pt-25 flex-1"
        >
          <LandingButton>🔗 Connect</LandingButton>
          {/* <span className="flex flex-row gap-2 items-center px-5 py-1 rounded-xl bg-gradient-to-r from-orange-800 to-red-900 border-2 border-gray-100 hover:border-yellow-500 hover:text-white transition-all shadow-lg">
            <img src={logo} alt="" className="max-w-7" />
            <p className="text-sm">1.234.884</p>
          </span>
          <div className="border-2 border-gray-300 my-1 px-5 py-4 rounded-lg shadow-md">
            <p className="text-gray-900">Leader board</p>
          </div> */}
        </motion.div>
      </div>

      {/* Floating Background Pizza Decoration */}
      {/* <div className="absolute -top-20 -right-24 opacity-20 dark:opacity-10 z-0 pointer-events-none">
        <img
          src="/assets/pizza-bg.svg"
          alt=""
          aria-hidden="true"
          className="w-[300px] rotate-[15deg]"
        />
      </div> */}

      <AnimatedCounter />
    </Section>
  );
};

export default Hero;
