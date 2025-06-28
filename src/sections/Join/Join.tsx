import React, { useState } from "react";
import { Section } from "@/layout";

import {
  pepeBaseball,
  pepeBoxer,
  pepeCar,
  pepeCivilian,
  pepeClimbing,
  pepeFitSkinny,
  pepeFitStrong,
  pepeJumproper,
  pepePresident,
  pepeSpy,
  pepeWelder,
} from "@/assets";
import LandingHero from "@/components/design/tipography/LandingHero";
import LandingText from "@/components/design/tipography/LandingText";
import LandingButton from "@/components/design/buttons/LandingButton";
import { useInView } from "react-intersection-observer";
import { AnimatePresence, motion } from "framer-motion";
import { layout } from "@/styles/styles";
import Gallery from "@/components/Gallery/Gallery";
import XMarkIcon from "@heroicons/react/24/solid/XMarkIcon";

const Join = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const panels = [
    {
      image: pepePresident,
    },
    {
      image: pepeWelder,
    },
    {
      image: pepeClimbing,
    },
    {
      image: pepeBoxer,
    },
    {
      image: pepeBaseball,
    },
    {
      image: pepeJumproper,
    },
    {
      image: pepeFitStrong,
    },
    {
      image: pepeCar,
    },
  ];

  const handleClick = (index: number) => {
    setExpandedIndex(index);
  };

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <Section
      id="join"
      className={`${layout.section} min-h-120`}
      // bgColor="#0c0500"
    >
      <section className="relative md:px-20 px-4 py-40 lg:px-40 flex flex-col md:flex-row">
        <div className="cta-card">
          <div
            className="overflow-hidden flex items-center rounded-2xl justify-center p-4 relative border-1 border-gray-200/30"
            style={{
              backgroundImage: `url(${panels[expandedIndex].image})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="inset-0 absolute bg-[rgba(0,0,0,0.7)] backdrop-blur-md z-0"></div>
            <div className="md:p-8 p-16 flex flex-col xl:flex-row gap-2 items-center justify-center z-10">
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="min-w-100 space-y-2 md:px-4 px-16"
              >
                <LandingHero className="text-center md:text-left">
                  Join to the Pizza!
                </LandingHero>

                <LandingText className="text-center md:text-left">
                  At the heart of $PEPERONI is a community of pizza-pilled
                  memelords, creators, degens, and builders united by one
                  delicious mission: To bake the most valuable pizza the world
                  has ever seen, on-chain, together.
                </LandingText>

                {/* <div className="mt-15 px-10">
                  <JoinButton />
                </div> */}
                <div className="pt-12 relative flex flex-row justify-center md:justify-start">
                  <LandingButton onClick={toggleMenu}>Gallery</LandingButton>
                </div>
              </motion.div>

              <div className="hidden lg:flex px-16 py-8 items-center h-[80vh] max-h-[500px] justify-center gap-1">
                {panels.map((panel, index) => (
                  <div
                    key={index}
                    onClick={() => handleClick(index)}
                    className={`
              h-full rounded-lg bg-white cursor-pointer border-1 border-black/50
              transition-all duration-500 ease-in-out overflow-hidden 
              ${
                expandedIndex === index
                  ? "w-[60%] "
                  : "w-[8%] hover:bg-gray-200"
              }
              min-w-[40px] block
            `}
                  >
                    <img
                      src={panel.image}
                      alt=""
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col md:flex-row items-center justify-center m-2 flex-wrap relative z-50 gap-7"
        >
          {overlayCards.map((content, index) => (
            <div key={index}>
              <OverlayCard item={content} />
            </div>
          ))}
        </motion.div> */}

        {/* <div className="relative overflow-hidden justify-center flex-1">
          <div className="grid-memes">
            {images.map((src, index) => (
              <div className="grid-item" key={index}>
                <img src={src} alt={`meme-${index}`} className="h-16" />
              </div>
            ))}

            Shadow 
            <TrackingShadow />
          </div>
        </div> */}
      </section>

      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay blur background */}
            <motion.div
              className="fixed inset-0 bg-black-800 bg-opacity-90 backdrop-blur-md z-500"
              onClick={toggleMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Modal panel */}
            <motion.div
              className="fixed z-600 inset-0 flex h-full items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <div
                className="relative bg-dark-dough p-6 w-full space-y-6 flex justify-center max-w-[1920px]"
                onClick={(e) => e.stopPropagation()}
              >
                <Gallery />
                <button
                  onClick={toggleMenu}
                  className="absolute top-15 right-0 text-[var(--color-pepperoni)] hover:text-red-400 transition z-9999"
                >
                  <XMarkIcon className="h-8 w-8 my-10 mx-3 text-orange-600 text-shadow-lg" />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      <div className="absolute top-0 min-w-full w-[1920px] h-24 bg-gradient-to-t from-transparent to-[#0c0500] pointer-events-none z-500" />
    </Section>
  );
};

export default Join;
