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
import "./Hero.css";
import ComingSoon from "@/components/ComingSoon/ComingSoon";
import BackgroundImage from "@/components/BackgroundImage/BackgroundImage";

const Hero = () => {
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const zIndexOven = 500;

  const [open, setDialogOpen] = useState(false);
  const handleClose = () => setDialogOpen(false);

  const heroSubsection = "flex flex-col flex-1";

  return (
    <Section
      id="hero"
      className={`${layout.section} lg:h-200 relative overflow-hidden`}
      bgColor="#191716"
      backgroundSvg={brickBg}
    >
      {/* <img
        src={iaOven}
        alt="Pizza Stone Oven"
        className={`hero__oven`}
        style={{ zIndex: zIndexOven }}
      /> */}
      <section className="h-185 w-full">
        {/* Oven Container */}

        <div className="absolute -translate-x-1/2 left-1/2 w-full h-full z-500"></div>
        {/* Flex container */}
        <div className="flex flex-col justify-between items-center h-[100%]">
          <div className="flex flex-row justify-end self-end w-full pt-10 px-5 md:px-25 lg:px-50 transition-all">
            <LandingButton
              onClick={() => setDialogOpen(true)}
              className="w-30 translate-y-15 md:translate-x-9 lg:translate-x-18 translate-x-4"
            >
              Connect
            </LandingButton>
          </div>

          <div className="z-5000">
            <BackgroundImage
              imageUrl={iaOven}
              className="h-90 w-170 md:h-100 md:w-200 "
            />
          </div>

          {/* <div className="flex flex-row w-full xl:h-full z-999 border-2">
            <motion.div
              ref={ref1}
              initial={{ opacity: 0, y: 20 }}
              animate={inView1 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`${heroSubsection} px-6 mb-12 w-full z-500 flex flex-col justify-center min-w-4/12 items-center xl:items-start`}
            >
              <LandingHero className="text-center xl:text-left">
                Deliciously Baked by You
              </LandingHero>
              <LandingText className="text-center xl:text-left px-10 xl:px-0">
                We're not promising world domination. We're just here to build,
                vibe, and feed the ecosystem one slice at a time.
              </LandingText>
            </motion.div>
            <div
              className={`${heroSubsection} hidden xl:flex justify-center min-w-5/12`}
            ></div>
            <motion.div
              // ref={ref1}
              initial={{ opacity: 0, y: 50 }}
              animate={inView1 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`${heroSubsection} hidden xl:flex min-w-4/12 justify-between pb-25 gap-1 items-end mt-21 lg:mt-0 flex-1 z-500`}
            >
              <span className="flex flex-row gap-2 items-center px-5 py-1 rounded-xl bg-gradient-to-r from-orange-800 to-red-900 border-2 border-gray-100 hover:border-yellow-500 hover:text-white transition-all shadow-lg">
                <img src={logo} alt="" className="max-w-7" />
                <p className="text-sm">1.234.884</p>
              </span>
              <div className="border-2 border-gray-300 my-1 px-5 py-4 rounded-lg shadow-md">
                <p className="text-gray-900">Leader board</p>
              </div>

              <LandingButton
                onClick={() => setOpen(true)}
                isDisabled={true}
                className="w-18"
              >
                TBA
              </LandingButton>
            </motion.div>
          </div> */}

          <div className="flex flex-col w-full justify-end items-center lg:h-65 md:h-70 h-75 gap-3">
            <LandingButton
              onClick={() => setDialogOpen(true)}
              bgColor="#228B22"
              className="w-18 z-500 self-center -ml-2"
            >
              Buy
            </LandingButton>

            <motion.div
              ref={ref1}
              initial={{ opacity: 0, y: 20 }}
              animate={inView1 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`${heroSubsection} px-6 mb-12 w-full z-500 flex flex-col justify-start items-center`}
            >
              <LandingHero className="text-center px-5 md:px-20">
                Deliciously Baked by You
              </LandingHero>
              <LandingText className="text-center px-8 xl:px-0 z-500">
                We're not promising world domination. We're just here to build,
                vibe, and feed the ecosystem one slice at a time.
              </LandingText>
            </motion.div>
          </div>
        </div>

        {/* Social */}
        <div className="hidden lg:flex px-4 top-90 absolute right-10 z-5000">
          <Social mode="hero" />
        </div>

        {/* Dialog */}
        <Dialog
          open={open}
          onClose={() => setDialogOpen(false)}
          disableScrollLock
        >
          <AnimatePresence>
            {open && <ComingSoon setOpen={setDialogOpen} />}
          </AnimatePresence>
        </Dialog>
      </section>

      {/* 3d layout  */}
      <figure>
        <div className="hero-3d-layout">
          <HeroExperience />
        </div>
      </figure>

      <div className="absolute bottom-0 min-w-full w-[1920px] h-24 bg-gradient-to-b from-transparent to-[#0c0500] pointer-events-none z-9000" />
    </Section>
  );
};

export default Hero;
