import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Section } from "@/layout";
import { goldenMemeCoin } from "@/assets";
import "./About.css";

import LandingHero from "@/components/design/tipography/LandingHero";
import LandingText from "@/components/design/tipography/LandingText";
import LandingButton from "@/components/design/buttons/LandingButton";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { layout } from "@/styles/styles";

// const cryptoPizzaWords = [
//   {
//     text: "Bitcoin Payments",
//     icon: (
//       <CurrencyDollarIcon className="xl:size-12 md:size-10 size-7 text-orange-500" />
//     ),
//   },
//   {
//     text: "Pizza Delivery",
//     icon: <FireIcon className="xl:size-12 md:size-10 size-7 text-yellow-500" />,
//   },
//   {
//     text: "Crypto Commerce",
//     icon: (
//       <ShoppingCartIcon className="xl:size-12 md:size-10 size-7 text-gray-800" />
//     ),
//   },
//   {
//     text: "Market Trends",
//     icon: (
//       <ChartBarIcon className="xl:size-12 md:size-10 size-7 text-green-300" />
//     ),
//   },
//   {
//     text: "Special Rewards",
//     icon: <GiftIcon className="xl:size-12 md:size-10 size-7 text-yellow-400" />,
//   },
//   {
//     text: "Hot Deals",
//     icon: <FireIcon className="xl:size-12 md:size-10 size-7 text-orange-600" />,
//   },
// ];

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <Section
      id="about"
      className={`${layout.section} ${layout.sectionHeight} overflow-hidden square-framed-bg`}
      // bgColor="linear-gradient(to bottom, transparent, #0c0500)"
      // backgroundSvg={transitionUpBg}
    >
      <section className="md:px-20 px-4 lg:px-40 flex my-20 md:px-16 px-6 py-10">
        <div className="mx-auto grid md:grid-cols-2 gap-16 items-center relative">
          {/* Text Column */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col justify-center relative"
          >
            <LandingHero>About Peperoni</LandingHero>
            {/*<h1 className="pointer-events-none text-2xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6 hero-font">
             
              <span className="slide absolute pt-0 px-2 h-[55px] overflow-hidden">
                <span className="wrapper">
                 in {words.map((word, index) => (
                    <span
                      key={index}
                      className="flex items-center md:gap-3 gap-1 pb-2"
                    >
                      <img
                        src={word.imgPath}
                        alt="person"
                        className="object-contain xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                      />
                      <LandingTitle>{word.text}</LandingTitle>
                    </span>
                  ))} 
             {cryptoPizzaWords.map((item, index) => (
                    <span
                      key={index}
                      className="flex flex-row items-center md:gap-3 gap-1"
                    >
                      <span className="object-contain rounded-full bg-white bg-opacity-50">
                        {item.icon}
                      </span>
                      <LandingTitle>{item.text}</LandingTitle>
                    </span>
                  ))} 
                </span>
              </span>
              <br />
            </h1>*/}
            <div className="mb-8 max-w-lg">
              <LandingText color="white">
                It’s not just a coin. It’s not just a meme. $PEPERONI is a
                community payment token built to celebrate the people who make
                Web3 spicy creators, builders, and degens. It’s fast. It’s fair.
                It’s food-themed financial freedom. Distributed, delicious, and
                baked on Solana.
              </LandingText>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a className="hero-btn md:bg-transparent md:text-white bg-orange-300"></a>
              <LandingButton> Download LitePaper </LandingButton>
            </div>
          </motion.div>

          <div className="relative">
            {/* Image Column */}
            <div className="flex flex-col items-center">
              <img
                src={goldenMemeCoin}
                alt="Illustration of Peperoni Coin - crypto meets pizza"
                className="w-[100px] md:w-[400px] animate-float-slow meme-coin--glow"
              />
              {/* <span className="w-[180 px] hero-img-shadow top-60"></span> */}
            </div>
          </div>
        </div>
      </section>

      {/* Gradient separator  */}
      <div className="absolute bottom-0 min-w-full w-[1920px] h-24 bg-gradient-to-b from-transparent to-[#0c0500] pointer-events-none z-9999" />
      <div className="absolute top-0 min-w-full w-[1920px] h-24 bg-gradient-to-t from-transparent to-[#0c0500] pointer-events-none z-9999" />
    </Section>
  );
};

export default About;
