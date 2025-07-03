import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import GlowCard from "@/components/models/GlowCard";
import { roadMapCardsB } from "@/constants";
import {
  logo,
  mountainBg,
  parachutes1,
  parachutes2,
  parachutes3,
  parachutes4,
} from "@/assets";
import { Section } from "@/layout";
import { useState, useEffect } from "react";
import LandingSubtitle from "@/components/design/tipography/LandingSubtitle";
import Clouds from "./Clouds";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { layout } from "@/styles/styles";
import LandingText from "@/components/design/tipography/LandingText";

gsap.registerPlugin(ScrollTrigger);

const Roadmap = () => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.pageYOffset);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Section
      id="roadmap"
      className={`${layout.section}`}
      bgColor="linear-gradient(360deg,rgba(94, 35, 13, 1) 0%, rgba(199, 84, 42, 1) 14%, rgba(238, 159, 69, 1) 38%, rgba(255, 206, 97, 1) 65%, rgba(155, 214, 255, 1) 100%)"
      // backgroundSvg={sunsetGradientBg}
    >
      <section className={`${layout.roadMapSection} py-10`}>
        <div className={`${layout.roadMapMilestoneContainer}`}>
          {roadMapCardsB.map((card, index) => {
            const { ref: cardRef, inView: cardInView } = useInView({
              triggerOnce: false,
              threshold: 0.2,
            });

            return (
              <motion.div
                ref={cardRef}
                initial={{ opacity: 0, x: -50 }}
                animate={cardInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                }}
                key={card.title}
                className="flex flex-col-reverse xl:items-start items-center xl:flex-row xl:gap-20 gap-10 justify-between transition-all"
              >
                <div className="xl:w-2/6 hover:-translate-y-5 transition-all">
                  <GlowCard
                    card={card}
                    index={index}
                    textColor={index === 5 ? "text-white" : ""}
                  ></GlowCard>
                </div>
                <div className="xl:w-4/6 transition-all">
                  <div className="flex items-start transition-all">
                    <div className="milestone flex xl:gap-20 md:gap-10 gap-5 relative z-20 transition-all">
                      <div className="timeline-logo">
                        <img src={logo} alt="logo" />
                      </div>
                      <div>
                        <LandingSubtitle color="white" className="text-left">
                          {card.title}
                        </LandingSubtitle>
                        <LandingText className="my-5 text-white text-left">
                          {card.date}
                        </LandingText>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Clouds */}
      <Clouds />
      {/* Parachutes1 */}
      <div
        className="absolute -top-620 right-10 -translate-x-1/2 pointer-events-none"
        style={{ transform: `translateY(${offsetY * 0.38}px)` }}
      >
        <img
          src={parachutes1}
          alt="Parachutes"
          aria-hidden="true"
          className="w-[200px] rotate-[12deg]"
        />
      </div>
      {/* Parachutes2 */}
      <div
        className="absolute -top-650 -left-70 pointer-events-none"
        style={{
          transform: `translateX(${offsetY * 0.09}px) translateY(${
            offsetY * 0.5
          }px)`,
        }}
      >
        <img
          src={parachutes2}
          alt="Parachutes"
          aria-hidden="true"
          className="w-[200px] rotate-[12deg]"
        />
      </div>
      {/* Parachutes3 */}
      <div
        className="absolute -top-330 md:left-190 pointer-events-none"
        style={{ transform: `translateY(${offsetY * 0.4}px)` }}
      >
        <img
          src={parachutes3}
          alt="Parachutes"
          aria-hidden="true"
          className="w-[290px] rotate-[12deg]"
          // className="w-[290px] rotate-[12deg] animate-spin"
        />
      </div>
      {/* Parachutes4 | Provision */}
      <div
        className="absolute -top-500 right-60 pointer-events-none"
        style={{ transform: `translateY(${offsetY * 0.42}px)` }}
      >
        <img
          src={parachutes4}
          alt="Parachutes"
          aria-hidden="true"
          className="w-[180px] rotate-[12deg]"
        />
      </div>
      {/* Mountain */}
      <div className="absolute bottom-0 pointer-events-none">
        <img
          src={mountainBg}
          alt="Mountain"
          aria-hidden="true"
          style={{ zIndex: 40 }}
          className="w-[1920px]"
        />
      </div>
      <div className="absolute bottom-0 min-w-full w-[1920px] h-24 bg-gradient-to-b from-transparent to-[#0c0500] pointer-events-none z-9999" />
    </Section>
  );
};

export default Roadmap;
