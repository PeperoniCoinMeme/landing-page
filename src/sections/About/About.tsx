import { Section } from "@/layout";
import { goldenMemeCoin } from "@/assets";
import "./About.css";

import LandingHero from "@/components/design/tipography/LandingHero";
import LandingText from "@/components/design/tipography/LandingText";
import LandingButton from "@/components/design/buttons/LandingButton";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { layout } from "@/styles/styles";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const litePaper = "https://github.com/PeperoniCoinMeme/litepaper";

  return (
    <Section
      id="about"
      className={`${layout.section} ${layout.sectionHeight} min-h-170 square-framed-bg overflow-hidden`}
      // bgColor="linear-gradient(to bottom, transparent, #0c0500)"
      // backgroundSvg={transitionUpBg}
    >
      <section className="flex my-18 md:my-20 md:p-16 p-8 lg:p-40">
        <div className="mx-auto flex lg:flex-row flex-col-reverse gap-8 md:gap-16 items-center relative">
          {/* Text Column */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col justify-center items-center lg:items-start relative"
          >
            <LandingHero className="text-center lg:text-left">
              About Peperoni
            </LandingHero>

            <div className="mb-8 max-w-lg">
              <LandingText color="white" className="text-center lg:text-left">
                It’s not just a coin. It’s not just a meme. $PEPERONI is a
                community payment token built to celebrate the people who make
                Web3 spicy creators, builders, and degens. It’s fast. It’s fair.
                It’s food-themed financial freedom. Distributed, delicious, and
                baked on Solana.
              </LandingText>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 md:items-start items-center">
              {/* <a className="hero-btn md:bg-transparent md:text-white bg-orange-300"></a> */}
              <LandingButton href={litePaper}>Go To LitePAPER</LandingButton>
            </div>
          </motion.div>

          {/* Image Column */}
          <div className="flex flex-col items-center relative">
            <img
              src={goldenMemeCoin}
              alt="Illustration of Peperoni Coin - crypto meets pizza"
              className="w-[200px] md:w-[300px] animate-float-slow meme-coin--glow"
            />
            {/* <span className="w-[180 px] hero-img-shadow top-60"></span> */}
          </div>
        </div>
      </section>

      {/* Gradient separator  */}
      <div className="absolute bottom-0 min-w-full w-[1920px] h-24 bg-gradient-to-b from-transparent to-[#0c0500] pointer-events-none z-9999" />
      <div className="absolute top-0 min-w-full w-[1920px] h-24 bg-gradient-to-t from-transparent to-[#0c0500] pointer-events-none z-9999" />
    </Section>
  );
};

export default About;
