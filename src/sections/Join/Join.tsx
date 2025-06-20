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
      className="md:px-20 px-4 py-20 lg:px-40 flex flex-col md:flex-row items-center justify-center min-h-340"
      // bgColor="#0c0500"
      backgroundSvg={transitionUpBg}
    >
      <section className="cta-card relative rounded-xl shadow-lg flex flex-col md:flex-row">
        <div
          className="h-full w-full overflow-hidden flex items-center rounded-2xl justify-center p-4 relative"
          style={{
            backgroundImage: `url(${panels[expandedIndex].image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="inset-0 absolute bg-[rgba(0,0,0,0.7)] backdrop-blur-md z-0"></div>
          <div className="p-16 flex w-full h-full gap-2 items-center justify-center z-10">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="min-w-50 mx-auto space-y-2 py-8"
            >
              <LandingHero>Join to the Pizza!</LandingHero>

              <LandingText>
                Don’t miss out on the cheesiest opportunity in crypto. Buy $PEP
                and be part of the most flavorful movement on the blockchain.
              </LandingText>

              {/* <div className="mt-15 px-10">
                  <JoinButton />
              </div> */}
              <div className="pt-18">
                <LandingButton>More</LandingButton>
              </div>
            </motion.div>

            <div className="flex p-6 w-full items-center h-[70vh] justify-center gap-1">
              {panels.map((panel, index) => (
                <div
                  key={index}
                  onClick={() => handleClick(index)}
                  className={`
              h-full rounded-2xl bg-white cursor-pointer border-1 border-black/12
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
    </Section>
  );
};

export default Join;
