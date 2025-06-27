import React, { useState } from "react";
import { Section } from "@/layout";
import { brickBg, iaOven } from "@/assets";
import AnimatedCounter from "@/components/AnimatedCounter/AnimatedCounter";
import LandingButton from "@/components/design/buttons/LandingButton";
import LandingHero from "@/components/design/tipography/LandingHero";
import LandingText from "@/components/design/tipography/LandingText";
import HeroExperience from "@/components/models/Hero/HeroExperience";
import { useInView } from "react-intersection-observer";
import { AnimatePresence, motion } from "framer-motion";
import { layout } from "@/styles/styles";
import Dialog from "@mui/material/Dialog";
import LandingTitle from "@/components/design/tipography/LandingTitle";

const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const zIndexOven = 100;

  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  return (
    <Section
      id="hero"
      className={`${layout.section} ${layout.sectionHeight} overflow-hidden`}
      bgColor="#191716"
      backgroundSvg={brickBg}
    >
      {/* Desktop */}
      <div className="hidden pt-38 md:flex flex-col sm:flex-row justify-around px-5">
        {/* First Info container */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col p-10 md:px-10 md:py-30 justify-center flex-1"
        >
          <LandingHero className="mt-10">
            DELICIOUSLY <br />
            COOKED BY YOU
          </LandingHero>{" "}
          <div className="max-w-80">
            <LandingText>
              We're not promising world domination. We're just here to build,
              vibe, and feed the ecosystem one slice at a time.
            </LandingText>
          </div>
        </motion.div>
        {/* Oven container */}
        <div className="flex flex-col justify-center flex-1">
          <figure>
            <div className="hero-3d-layout">
              <HeroExperience />
            </div>
          </figure>
          <div className="oven-container md:mx-20 lg:mx-0 mb-5 relative h-90 md:h-0">
            {/* Oven Image */}
            <img
              src={iaOven}
              alt=""
              className="max-w-50 absolute max-w-190 md:max-w-270 -top-40 -left-50 md:-top-135 md:-left-70"
              style={{ zIndex: zIndexOven }}
            />
            <div className="hidden lg:flex absolute md:w-130 my-28 flex-row justify-between md:-mx-4">
              <LandingButton
                onClick={() => setOpen(true)}
                bgColor="#d62828"
                className=""
              >
                Buy
              </LandingButton>
              <LandingButton
                onClick={() => setOpen(true)}
                isDisabled={true}
                className=""
              >
                TBR
              </LandingButton>
            </div>
          </div>
        </div>
        {/* Wallet container */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-1 items-center px-10 flex-1"
        >
          <LandingButton
            onClick={() => setOpen(true)}
            className="max-w-35 lg:ml-20 lg:my-0 my-12"
          >
            Connect
          </LandingButton>
          {/* <span className="flex flex-row gap-2 items-center px-5 py-1 rounded-xl bg-gradient-to-r from-orange-800 to-red-900 border-2 border-gray-100 hover:border-yellow-500 hover:text-white transition-all shadow-lg">
            <img src={logo} alt="" className="max-w-7" />
            <p className="text-sm">1.234.884</p>
          </span>
          <div className="border-2 border-gray-300 my-1 px-5 py-4 rounded-lg shadow-md">
            <p className="text-gray-900">Leader board</p>
          </div> */}
        </motion.div>
      </div>

      <div
        className="hidden md:flex lg:hidden min-w-full flex flex-col md:flex-row justify-center"
        style={{ zIndex: zIndexOven + 1 }}
      >
        <div className="flex flex-col sm:flex-row items-center justify-center z-100 -mt-8">
          <LandingButton onClick={() => setOpen(true)} bgColor="#3f2c2f">
            Buy
          </LandingButton>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden pt-15 md:flex flex-col sm:flex-row justify-around px-5">
        {/* Wallet container */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-2 items-end flex-1 mt-5 mb-5"
        >
          <LandingButton onClick={() => setOpen(true)} className="min-w-35">
            Connect
          </LandingButton>
          <LandingButton
            onClick={() => setOpen(true)}
            bgColor="#3f2c2f"
            className="min-w-35"
          >
            Buy
          </LandingButton>
        </motion.div>
        {/* Oven container */}
        <div className="flex flex-col justify-center flex-1">
          <figure>
            <div className="hero-3d-layout">
              <HeroExperience />
            </div>
          </figure>
          <div className="oven-container relative h-90">
            {/* Oven Image */}
            <img
              src={iaOven}
              alt=""
              className="absolute max-w-150 -top-30 -left-32"
              style={{ zIndex: zIndexOven }}
            />
          </div>
        </div>
        {/* First Info container */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col justify-center flex-1"
        >
          <LandingHero className="text-center">
            DELICIOUSLY <br />
            COOKED BY YOU
          </LandingHero>{" "}
          <div className="max-w-80 text-center">
            <LandingText>
              We're not promising world domination. We're just here to build,
              vibe, and feed the ecosystem one slice at a time.
            </LandingText>
          </div>
        </motion.div>
      </div>

      <div
        className="lg:hidden min-w-full flex flex-col md:flex-row justify-center"
        style={{ zIndex: zIndexOven + 1 }}
      >
        <div className="flex flex-col sm:flex-row items-center justify-center z-100 -mt-8"></div>
      </div>

      <AnimatedCounter />

      <Dialog open={open} onClose={() => setOpen(false)}>
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
                <LandingTitle className="animate-bounce">
                  🚧 Coming Soon 🚧
                </LandingTitle>
                <LandingText>
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
