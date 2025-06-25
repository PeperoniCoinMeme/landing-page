import React, { useState } from "react";
import { Section } from "@/layout";
import { brickBg, iaOven } from "@/assets";
import AnimatedCounter from "@/components/AnimatedCounter/AnimatedCounter";
import LandingButton from "@/components/design/buttons/LandingButton";
import LandingHero from "@/components/design/tipography/LandingHero";
import LandingText from "@/components/design/tipography/LandingText";
import HeroExperience from "@/components/models/Hero/HeroExperience";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { layout } from "@/styles/styles";
import ComingSoonDialog from "@/components/ComingSoonDialog/ComingSoonDialog";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const zIndexOven = 100;

  const [open, setOpen] = useState(false);

  return (
    <Section
      id="hero"
      className={`${layout.section} ${layout.sectionHeight} overflow-hidden`}
      bgColor="#191716"
      backgroundSvg={brickBg}
    >
      <div className="pt-38 flex flex-col sm:flex-row justify-around px-5">
        {/* First Info container */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col p-10 md:p-18 md:py-30 justify-center flex-1"
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
          <div className="oven-container mb-5 relative h-90 md:h-0">
            {/* Oven Image */}
            <img
              src={iaOven}
              alt=""
              className="absolute max-w-190 md:max-w-270 -top-40 -left-50 md:-top-135 md:-left-86"
              style={{ zIndex: zIndexOven }}
            />
          </div>
        </div>
        {/* Wallet container */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-1 md:items-center px-10 flex-1"
        >
          <LandingButton
            onClick={() => setOpen(true)}
            className="max-w-35 ml-20"
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
        className="min-w-full flex flex-col md:flex-row justify-center"
        style={{ zIndex: zIndexOven + 1 }}
      >
        <div className="flex flex-col sm:flex-row items-center justify-center z-100 -mt-8">
          <LandingButton onClick={() => setOpen(true)} bgColor="#3f2c2f">
            Buy
          </LandingButton>
          <Dialog open={open} onClose={() => setOpen(false)}>
            <DialogContent>
              <ComingSoonDialog />
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <AnimatedCounter />
      <div className="absolute bottom-0 min-w-full w-[1920px] h-24 bg-gradient-to-b from-transparent to-[#0c0500] pointer-events-none z-9999" />
    </Section>
  );
};

export default Hero;
