import React, { useState } from "react";
import { Section } from "../../layout";
import JoinButton from "../../components/JoinButton/JoinButton";
import {
  brickBg,
  logo,
  orangeScatteredYellow2,
  pepeBanner,
  pepeCar,
  pepeCivilian,
  pepeClimbing,
  pepeFitSkinny,
  pepeFitStrong,
  pepeLogo,
  pepePresident,
  pepeSpy,
  pepeSurf,
  pepeWarrior,
  transitionDownBg,
  transitionUpBg,
  waveYellowOrange2,
} from "../../assets";
import LandingHero from "../../components/design/tipography/LandingHero";
import LandingText from "../../components/design/tipography/LandingText";
import { galleryItems, overlayCards } from "../../constants";
import OverlayCard from "../../components/OverlayCard/OverlayCard";
import LandingButton from "../../components/design/buttons/LandingButton";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { layout } from "../../styles/styles";

const Join = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const panels = [
    {
      image: pepePresident,
    },
    {
      image: pepeCivilian,
    },
    {
      image: pepeClimbing,
    },
    {
      image: pepeSpy,
    },
    {
      image: pepeSurf,
    },
    {
      image: pepeFitSkinny,
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

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const images = [
    pepeBanner,
    pepeFitStrong,
    pepePresident,
    pepeCivilian,
    pepeSurf,
    pepeSpy,
    pepeClimbing,
    pepeCar,
    pepeWarrior,
    pepeLogo,
  ];
  return (
    <Section
      id="join"
      className={`${layout.section} min-h-280`}
      // bgColor="#0c0500"
    >
      <section className="relative md:px-20 px-4 py-40 lg:px-40 flex flex-col md:flex-row">
        <div className="cta-card">
          <div
            className="overflow-hidden flex items-center rounded-2xl justify-center p-4 relative"
            style={{
              backgroundImage: `url(${panels[expandedIndex].image})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="inset-0 absolute bg-[rgba(0,0,0,0.7)] backdrop-blur-md z-0"></div>
            <div className="md:p-8 p-16 flex flex-col md:flex-row gap-2 items-center justify-center z-10">
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="min-w-100 space-y-2 md:px-4 px-16"
              >
                <LandingHero>Join to the Pizza!</LandingHero>

                <LandingText>
                  At the heart of $PEPERONI is a community of pizza-pilled
                  memelords, creators, degens, and builders united by one
                  delicious mission: 🍕 To bake the most valuable pizza the
                  world has ever seen, on-chain, together.
                </LandingText>

                {/* <div className="mt-15 px-10">
                  <JoinButton />
              </div> */}
                <div className="pt-12">
                  <LandingButton>More</LandingButton>
                </div>
              </motion.div>

              <div className="flex p-4 items-center h-[70vh] justify-center gap-1">
                {panels.map((panel, index) => (
                  <div
                    key={index}
                    onClick={() => handleClick(index)}
                    className={`
              h-full rounded-2xl bg-white cursor-pointer border-1 border-black/50
              transition-all duration-500 ease-in-out overflow-hidden 
              ${
                expandedIndex === index
                  ? "w-[60%] "
                  : "w-[10%] hover:bg-gray-200"
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
      <div className="absolute top-0 min-w-full w-[1920px] h-24 bg-gradient-to-t from-transparent to-[#0c0500] pointer-events-none z-9999" />
    </Section>
  );
};

export default Join;
