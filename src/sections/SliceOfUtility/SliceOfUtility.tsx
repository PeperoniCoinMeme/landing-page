import React from "react";
import { Section } from "@/layout";
import { cheeseMoon } from "@/assets";
import LandingButton from "@/components/design/buttons/LandingButton";
import LandingHero from "@/components/design/tipography/LandingHero";
import LandingText from "@/components/design/tipography/LandingText";
import { ParallaxPepperoni } from "@/components/ParallaxPepperoni/ParallaxPepperoni";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import StarBackground from "@/components/StarBackground/StarBackground";
import { layout } from "@/styles/styles";

const SliceOfUtility = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  return (
    <Section
      id="sliceofutility"
      className={`${layout.section} ${layout.sectionHeight} overflow-hidden`}
      bgColor="#000000"
      // backgroundSvg={transitionDownBg}
    >
      <StarBackground />
      <section className="relative rounded-xl md:px-20 px-4 lg:px-40 py-18 md:px-16 px-6 py-30">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative flex flex-col justify-center"
        >
          <LandingHero className="text-center md:text-left">
            The Slice of Utility
          </LandingHero>

          <div className="flex flex-col md:flex-row items-center my-6 flex-wrap relative z-50 gap-7">
            <LandingText className="text-center md:text-left">
              Whether you're a builder, creator, degen, or just here for the
              sauce, $PEPERONI isn't just a memecoin, it’s a full-course utility
              token inside the world’s most flavorful Web3 experience.
            </LandingText>

            <LandingText className="text-center md:text-left">
              Built on Solana for blazing speed. Fueled by community and
              creativity. Designed to be used, not just held.
            </LandingText>
          </div>

          {/* <div className="pt-4">
            <LandingButton>Services</LandingButton>
          </div> */}
          <ParallaxPepperoni />
        </motion.div>
      </section>

      {/* Cheese moon */}
      <div className="md:opacity-100 opacity-40 absolute top-50 -left-130 translate-x-1/3 pointer-events-none z-0">
        <motion.img
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 1 }}
          src={cheeseMoon}
          alt="Cheese moon"
          style={{
            zIndex: 100,
            transformOrigin: "center center",
            animation: "clockSpin 350s linear infinite",
            animationDelay: "0.2s",
            animationFillMode: "forwards",
          }}
          className="w-[500px] md:w-[700px] relative -right-35"
        />
      </div>
    </Section>
  );
};

export default SliceOfUtility;
