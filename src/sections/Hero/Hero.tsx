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
      className={`${layout.section} h-180 relative`}
      bgColor="#191716"
      backgroundSvg={brickBg}
    >
      <div className="hero__oven-container md:flex pt-55 px-2">
        <motion.div
          ref={ref1}
          initial={{ opacity: 0, y: 50 }}
          animate={inView1 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="hero__info-container lg:mt-30 md:mt-20 mt-0"
        >
          <LandingTitle className="mb-48 md:mb-25 lg:mb-3">
            DELICIOUSLY <br />
            BAKED BY YOU
          </LandingTitle>

          <LandingText className="max-w-full md:max-w-70 lg:max-w-full z-500">
            We're not promising world domination. We're just here to build,
            vibe, and feed the ecosystem one slice at a time.
          </LandingText>
        </motion.div>

        <img
          src={iaOven}
          alt="Pizza Stone Oven"
          className={`hero__oven`}
          style={{ zIndex: zIndexOven }}
        />
      </div>

      {/* Flex container */}
      <div className="flex flex-col justify-between pt-25 h-[100%] px-5 md:px-25 lg:px-50">
        <div className="flex flex-row justify-end">
          <LandingButton onClick={() => setOpen(true)} className="w-30">
            Connect
          </LandingButton>
        </div>

        <div className="flex flex-row">
          {" "}
          <div
            className={`${heroSubsection} min-w-1/4 px-10 justify-center`}
          ></div>
          <div className={`${heroSubsection} justify-center min-w-1/3`}>
            <figure>
              <div className="hero-3d-layout">
                <HeroExperience />
              </div>
            </figure>
          </div>
          <motion.div
            ref={ref1}
            initial={{ opacity: 0, y: 50 }}
            animate={inView1 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`${heroSubsection} min-w-1/4 justify-between pb-25 gap-1 items-end mt-21 lg:mt-0 flex-1 z-500`}
          >
            {/* <span className="flex flex-row gap-2 items-center px-5 py-1 rounded-xl bg-gradient-to-r from-orange-800 to-red-900 border-2 border-gray-100 hover:border-yellow-500 hover:text-white transition-all shadow-lg">
            <img src={logo} alt="" className="max-w-7" />
            <p className="text-sm">1.234.884</p>
          </span>
          <div className="border-2 border-gray-300 my-1 px-5 py-4 rounded-lg shadow-md">
            <p className="text-gray-900">Leader board</p>
          </div>
          <div className="hidden lg:flex px-4 top-90 absolute ">
            <Social mode="hero" />
          </div> */}
          </motion.div>
        </div>

        <div className="flex flex-row justify-center mb-30">
          <LandingButton
            onClick={() => setOpen(true)}
            bgColor="#228B22"
            className="w-18"
          >
            Buy
          </LandingButton>
          {/* <LandingButton
              onClick={() => setOpen(true)}
              isDisabled={true}
              className="w-18"
            >
              TBA
            </LandingButton> */}
        </div>
      </div>

      <div
        className="lg:hidden min-w-full flex flex-col md:flex-row justify-center"
        style={{ zIndex: zIndexOven + 1 }}
      >
        <div className="flex flex-col sm:flex-row items-center justify-center z-100 -mt-8"></div>
      </div>

      <AnimatedCounter />

      <Dialog open={open} onClose={() => setOpen(false)} disableScrollLock>
        <AnimatePresence>
          {open && (
            <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="flex flex-col justify-center items-center shadow-xl max-w-md text-white w-full text-center gap-3"
              >
                <LandingSubtitle className="animate-bounce">
                  🚧 Coming Soon 🚧
                </LandingSubtitle>
                <LandingText className="px-10">
                  We’re building something amazing. Check back soon!
                </LandingText>
                <LandingButton onClick={() => setOpen(false)} className="my-5">
                  Close
                </LandingButton>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </Dialog>
      <div className="absolute bottom-0 min-w-full w-[1920px] h-24 bg-gradient-to-b from-transparent to-[#0c0500] pointer-events-none z-9999" />
    </Section>
  );
};

export default Hero;
