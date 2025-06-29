import React, { useEffect, useState } from "react";
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
import Social from "@/components/Social/Social";
import LandingSubtitle from "@/components/design/tipography/LandingSubtitle";
import LandingTitle from "@/components/design/tipography/LandingTitle";

const Hero = () => {
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const zIndexOven = 100;

  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const ovenWidth = "md:max-w-180 lg:max-w-230 xl:max-w-270";
  const ovenPosition =
    "left-1/2 -translate-x-1/2 md:-top-95 lg:-top-100 xl:-top-120";

  const heroSubsection = "flex flex-col flex-1";

  return (
    <Section
      id="hero"
      className={`${layout.section} ${layout.sectionHeight} overflow-hidden`}
      bgColor="#191716"
      backgroundSvg={brickBg}
    >
      {/* Desktop */}
      <div className="hidden md:grid lg:flex md:grid-rows-2 md:grid-cols-2 pt-55 px-2">
        {/* Oven container */}
        <div
          className={`md:row-start-1 md:col-span-2 lg:order-2 lg:flex-1 ${heroSubsection} justify-center min-w-1/3`}
        >
          <figure>
            <div className="hero-3d-layout">
              <HeroExperience />
            </div>
          </figure>
          <div className="relative flex flex-col justify-end">
            {/* Oven Image */}
            <img
              src={iaOven}
              alt="Pizza Stone Oven"
              className={`${ovenWidth} ${ovenPosition} absolute`}
              style={{ zIndex: zIndexOven }}
            />
            <div className="flex flex-row justify-between md:mx-60 lg:-mx-8 xl:mx-8 mt-12 lg:mt-40">
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
        </div>

        {/* First Info container */}
        <motion.div
          ref={ref1}
          initial={{ opacity: 0, y: 50 }}
          animate={inView1 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`md:row-start-2 md:col-start-1 lg:order-1 lg:flex-1 ${heroSubsection} min-w-1/4 px-10 justify-center`}
        >
          <LandingTitle className="lg:mt-30">
            DELICIOUSLY <br />
            BAKED BY YOU
          </LandingTitle>

          <div className="max-w-80 z-500">
            <LandingText>
              We're not promising world domination. We're just here to build,
              vibe, and feed the ecosystem one slice at a time.
            </LandingText>
          </div>
        </motion.div>

        {/* Wallet container */}
        <motion.div
          ref={ref1}
          initial={{ opacity: 0, y: 50 }}
          animate={inView1 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`md:row-start-2 md:col-start-2 lg:order-3 lg:flex-1 ${heroSubsection} min-w-1/4 justify-between pb-25 gap-1 items-end mt-21 lg:mt-0 flex-1 z-500`}
        >
          <LandingButton
            onClick={() => setOpen(true)}
            className="w-30 lg:mx-28 lg:my-0 absolute -top-100 -left-10 lg:-top-10 lg:left-0 md:-left-10"
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
          <div className="hidden lg:flex px-4 top-90 absolute ">
            <Social mode="hero" />
          </div>
        </motion.div>
      </div>

      {/* Mobile */}
      <div className="md:hidden pt-15 md:flex flex-col sm:flex-row justify-around px-5">
        {/* Wallet container */}
        <motion.div
          ref={ref2}
          initial={{ opacity: 0, y: 50 }}
          animate={inView2 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-2 items-end flex-1 mt-5 mb-5"
        >
          <LandingButton onClick={() => setOpen(true)} className="min-w-35">
            Connect
          </LandingButton>
        </motion.div>
        {/* Oven container */}
        <div className="flex flex-col justify-center flex-1">
          <figure>
            <div className="hero-3d-layout">
              <HeroExperience />
            </div>
          </figure>
          <div className="relative h-90">
            {/* Oven Image */}
            <img
              src={iaOven}
              alt=""
              className="absolute max-w-150 -top-30 left-1/2 -translate-x-1/2"
              style={{ zIndex: zIndexOven }}
            />
            <div className="px-6.5 absolute w-full flex flex-row justify-between top-60 left-1/2 -translate-x-1/2 z-500">
              <LandingButton
                onClick={() => setOpen(true)}
                bgColor="#228B22"
                className="w-13"
              >
                Buy
              </LandingButton>
              {/* <LandingButton
                onClick={() => setOpen(true)}
                isDisabled={true}
                className="w-14"
              >
                TBA
              </LandingButton> */}
            </div>
          </div>
        </div>
        {/* First Info container */}
        <motion.div
          ref={ref2}
          initial={{ opacity: 0, y: 50 }}
          animate={inView2 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col justify-center items-center flex-1"
        >
          <LandingHero className="text-center">
            DELICIOUSLY <br />
            BAKED BY YOU
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
