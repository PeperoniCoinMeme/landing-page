import React, { useEffect, useState } from "react";
import { Section } from "@/layout";
import { brickBg, iaOven, logo } from "@/assets";
import AnimatedCounter from "@/components/AnimatedCounter/AnimatedCounter";
import LandingButton from "@/components/design/buttons/LandingButton";
import LandingHero from "@/components/design/tipography/LandingHero";
import LandingText from "@/components/design/tipography/LandingText";
import HeroExperience from "@/components/models/Hero/HeroExperience";
import { useInView } from "react-intersection-observer";
import { AnimatePresence, motion } from "framer-motion";
import { layout } from "@/styles/styles";
import Dialog from "@mui/material/Dialog";
import Social from "@/components/Social/Social";
import LandingSubtitle from "@/components/design/tipography/LandingSubtitle";
import LandingTitle from "@/components/design/tipography/LandingTitle";
import "./Hero.css";
import ComingSoon from "@/components/ComingSoon/ComingSoon";

const Hero = () => {
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const zIndexOven = 100;

  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const heroSubsection = "flex flex-col flex-1";

  return (
    <Section
      id="hero"
      className={`${layout.section} relative overflow-hidden`}
      bgColor="#191716"
      backgroundSvg={brickBg}
    >
      <section className="h-160 w-full">
        {/* Oven Container */}
        <div className="hero__oven-container">
          <div className="absolute -translate-x-1/2 left-1/2 w-full h-full z-1000">
            <img
              src={iaOven}
              alt="Pizza Stone Oven"
              className={`hero__oven`}
              style={{ zIndex: zIndexOven }}
            />
            <LandingButton
              onClick={() => setOpen(true)}
              bgColor="#228B22"
              className="w-18 z-9999 absolute top-83 md:top-92 lg:top-95 -translate-x-1/2 left-1/2"
            >
              Buy
            </LandingButton>

            <figure>
              <div className="hero-3d-layout">
                <HeroExperience />
              </div>
            </figure>
          </div>
        </div>
        {/* Flex container */}
        <div className="flex flex-col justify-between items-center h-[100%]">
          <div className="flex flex-row justify-end self-end w-full pt-25 px-5 md:px-25 lg:px-50 transition-all">
            <LandingButton onClick={() => setOpen(true)} className="w-30">
              Connect
            </LandingButton>
          </div>

          <div className="flex flex-row w-full md:h-full z-999">
            <motion.div
              ref={ref1}
              initial={{ opacity: 0, y: 20 }}
              animate={inView1 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`${heroSubsection} px-8 lg:mt-0 mt-5 w-full z-500 flex flex-col justify-center mb-25 lg:mb-5 min-w-3/12 items-center md:items-start`}
            >
              <LandingTitle className="text-center md:text-left">
                DELICIOUSLY BAKED BY YOU
              </LandingTitle>
              <LandingText className="text-center md:text-left">
                We're not promising world domination. We're just here to build,
                vibe, and feed the ecosystem one slice at a time.
              </LandingText>
            </motion.div>
            <div
              className={`${heroSubsection} hidden md:flex justify-center min-w-5/12`}
            ></div>
            <motion.div
              //   ref={ref1}
              initial={{ opacity: 0, y: 50 }}
              animate={inView1 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`${heroSubsection} hidden md:flex min-w-4/12 justify-between pb-25 gap-1 items-end mt-21 lg:mt-0 flex-1 z-500`}
            ></motion.div>
          </div>
        </div>

        {/* Social */}
        <div className="hidden lg:flex px-4 top-90 absolute right-10">
          <Social mode="hero" />
        </div>
        {/* Dialog */}
        <Dialog open={open} onClose={() => setOpen(false)} disableScrollLock>
          <AnimatePresence>
            {open && <ComingSoon setOpen={setOpen} />}
          </AnimatePresence>
        </Dialog>
      </section>
      <div className="absolute bottom-0 min-w-full w-[1920px] h-24 bg-gradient-to-b from-transparent to-[#0c0500] pointer-events-none z-9000" />
    </Section>
  );
};

export default Hero;
