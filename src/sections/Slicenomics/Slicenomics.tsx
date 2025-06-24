import React from "react";
import { Section } from "../../layout";
import { overlayCards, testimonials } from "../../constants";
import {
  astronaut2,
  peperoniPizza,
  satelliteCold,
  starsBg,
} from "../../assets";
import LandingButton from "../../components/design/buttons/LandingButton";
import LandingHero from "../../components/design/tipography/LandingHero";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import StarBackground from "../../components/StarBackground/StarBackground";
import PieAnimation from "../../components/PieChart/PieChart";
import { layout } from "../../styles/styles";

const Slicenomics = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  return (
    <Section
      id="slicenomics"
      className={`${layout.section} ${layout.sectionHeight}`}
      bgColor="#000000"
    >
      <StarBackground />
      <section className="py-10 md:px-20 px-4 lg:px-40 rounded-xl py-16 md:px-16 px-6 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative flex flex-col justify-center"
        >
          <div className="mb-5 text-center">
            <LandingHero> Slicenomics: Slice by Slice </LandingHero>
          </div>

          <PieAnimation />

          <div className="my-15 md:my-5 lg:my-10">
            <LandingButton bgColor="#2b2c2f">More</LandingButton>
          </div>
        </motion.div>
      </section>

      {/* Satellite */}
      <div className="absolute -top-40 md:top-10 left-30 md:left-270 pointer-events-none w-full">
        <motion.img
          src={satelliteCold}
          alt="Satellite"
          aria-hidden="true"
          initial={{ opacity: 1, y: 0 }}
          animate={{
            x: [0, 20, 0, -20, 0, -20, 0, 40, 0, 20, 0],
            y: [0, -20, 0, 40, 0, -10, 0, -20, 0, 10, 0],
          }}
          transition={{
            duration: 65,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          style={{ zIndex: 0 }}
          className="md:w-[250px] w-[650px] rotate-[-10deg] opacity-20"
        />
      </div>
      {/* Astronaut */}
      <div className="absolute -bottom-30 left-30 pointer-events-none">
        <motion.img
          src={astronaut2}
          alt="Astronaut"
          aria-hidden="true"
          initial={{ width: 250, opacity: 1, y: 0 }}
          animate={{ y: [0, -70, 0] }}
          transition={{
            duration: 10,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          style={{ zIndex: 9999 }}
          className="rotate-[-10deg] w-[250px]"
        />
      </div>
    </Section>
  );
};

export default Slicenomics;
