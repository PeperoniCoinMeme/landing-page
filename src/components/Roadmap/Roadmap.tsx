import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import GlowCard from "../models/GlowCard";
import { roadMapCards } from "../../constants";
import {
  cheesePie,
  cloud1,
  cloud2,
  cloud3,
  grassBg,
  logo,
  mountainBg,
  parachutes1,
  parachutes2,
  parachutes3,
  parachutes4,
  pepeSun,
  sunsetGradientBg,
} from "../../assets";
import { Section } from "../../layout";
import LandingHero from "../design/tipography/LandingHero";
import { useState, useEffect } from "react";
import LandingText from "../design/tipography/LandingText";
import LandingTitle from "../design/tipography/LandingTitle";
import LandingSubtitle from "../design/tipography/LandingSubtitle";

gsap.registerPlugin(ScrollTrigger);

const Roadmap = () => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.pageYOffset);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useGSAP(() => {
    // Loop through each timeline card and animate them in
    // as the user scrolls to each card
    gsap.utils.toArray(".timeline-card").forEach((card: any) => {
      // Animate the card coming in from the left
      // and fade in
      gsap.from(card, {
        // Move the card in from the left
        xPercent: -100,
        // Make the card invisible at the start
        opacity: 0,
        // Set the origin of the animation to the left side of the card
        transformOrigin: "left left",
        // Animate over 1 second
        duration: 1,
        // Use a power2 ease-in-out curve
        ease: "power2.inOut",
        // Trigger the animation when the card is 80% of the way down the screen
        scrollTrigger: {
          // The card is the trigger element
          trigger: card,
          // Trigger the animation when the card is 80% down the screen
          start: "top 80%",
        },
      });
    });

    // Animate the timeline height as the user scrolls
    // from the top of the timeline to 70% down the screen
    // The timeline height should scale down from 1 to 0
    // as the user scrolls up the screen
    gsap.to(".timeline", {
      // Set the origin of the animation to the bottom of the timeline
      transformOrigin: "bottom bottom",
      // Animate the timeline height over 1 second
      ease: "power1.inOut",
      // Trigger the animation when the timeline is at the top of the screen
      // and end it when the timeline is at 70% down the screen
      scrollTrigger: {
        trigger: ".timeline",
        start: "top center",
        end: "70% center",
        // Update the animation as the user scrolls
        onUpdate: (self) => {
          // Scale the timeline height as the user scrolls
          // from 1 to 0 as the user scrolls up the screen
          gsap.to(".timeline", {
            scaleY: 1 - self.progress,
          });
        },
      },
    });

    // Loop through each expText element and animate them in
    // as the user scrolls to each text element
    gsap.utils.toArray(".expText").forEach((text: any) => {
      // Animate the text opacity from 0 to 1
      // and move it from the left to its final position
      // over 1 second with a power2 ease-in-out curve
      gsap.from(text, {
        // Set the opacity of the text to 0
        opacity: 0,
        // Move the text from the left to its final position
        // (xPercent: 0 means the text is at its final position)
        xPercent: 0,
        // Animate over 1 second
        duration: 1,
        // Use a power2 ease-in-out curve
        ease: "power2.inOut",
        // Trigger the animation when the text is 60% down the screen
        scrollTrigger: {
          // The text is the trigger element
          trigger: text,
          // Trigger the animation when the text is 60% down the screen
          start: "top 60%",
        },
      });
    }, "<"); // position parameter - insert at the start of the animation
  }, []);

  return (
    <Section
      id="roadmap"
      className="pt-28 pb-10 flex flex-col md:flex-row justify-center flex-center section-padding xl:px-0 overflow-hidden"
      bgColor="linear-gradient(360deg,rgba(94, 35, 13, 1) 0%, rgba(199, 84, 42, 1) 17%, rgba(191, 75, 52, 1) 36%, rgba(238, 159, 69, 1) 61%, rgba(255, 206, 97, 1) 79%, rgba(255, 204, 0, 1) 100%)"
      // backgroundSvg={sunsetGradientBg}
    >
      <div className="w-full h-full md:px-20 px-5">
        <div className="flex flex-col items-center gap-5 text-orange-500">
          <div className="hero-badge">
            <p>⏱️ Roadmap Overview </p>
          </div>
          <LandingHero>"The Oven’s Always On"</LandingHero>
        </div>

        <div className="w-full md:px-50 flex flex-row justify-center items-center text-center">
          <LandingText>
            Our roadmap isn’t bound by rigid timelines — we build as the dough
            rises and the sauce simmers. Milestones unlock based on community
            growth, development readiness, and how spicy things get.
          </LandingText>
        </div>

        <div className="mt-32 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {roadMapCards.map((card) => (
              <div key={card.title} className="exp-card-wrapper">
                <div className="xl:w-2/6 hover:-translate-y-5 transition-transform">
                  <GlowCard card={card} index={0}>
                    <div>{/* <img src ={card.imgPath} alt="exp-img" /> */}</div>
                  </GlowCard>
                </div>
                <div className="xl:w-4/6">
                  <div className="flex items-start">
                    {/* <div className="timeline-wrapper">
                      <div className="timeline" />
                      <div className="gradient-line w-1 h-full" />
                    </div> */}
                    <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                      <div className="timeline-logo">
                        <img src={logo} alt="logo" />
                      </div>
                      <div>
                        <LandingSubtitle color="white">
                          {card.title}
                        </LandingSubtitle>

                        <p className="my-5 text-gray-400">{card.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Clouds */}
      <div className="absolute top-300 left-270 pointer-events-none">
        <img
          src={cloud1}
          alt="Cloud"
          aria-hidden="true"
          style={{ zIndex: 9999 }}
          className="w-[200px]"
        />
      </div>
      <div className="absolute top-155 left-70 pointer-events-none">
        <img
          src={cloud2}
          alt="Cloud"
          aria-hidden="true"
          style={{ zIndex: 9999 }}
          className="w-[200px]"
        />
      </div>
      <div className="absolute top-130 left-140 pointer-events-none">
        <img
          src={cloud3}
          alt="Cloud"
          aria-hidden="true"
          style={{ zIndex: 9999 }}
          className="w-[200px]"
        />
      </div>

      <div className="absolute top-450 left-5 pointer-events-none">
        <img
          src={cloud1}
          alt="Cloud"
          aria-hidden="true"
          style={{ zIndex: 9999 }}
          className="w-[200px]"
        />
      </div>
      <div className="absolute top-320 left-120 pointer-events-none">
        <img
          src={cloud2}
          alt="Cloud"
          aria-hidden="true"
          style={{ zIndex: 9999 }}
          className="w-[200px]"
        />
      </div>
      <div className="absolute top-300 left-140 pointer-events-none">
        <img
          src={cloud3}
          alt="Cloud"
          aria-hidden="true"
          style={{ zIndex: 9999 }}
          className="w-[200px]"
        />
      </div>
      <div className="absolute top-600 left-240 pointer-events-none">
        <img
          src={cloud2}
          alt="Cloud"
          aria-hidden="true"
          style={{ zIndex: 9999 }}
          className="w-[200px]"
        />
      </div>
      <div className="absolute top-700 left-140 pointer-events-none">
        <img
          src={cloud3}
          alt="Cloud"
          aria-hidden="true"
          style={{ zIndex: 9999 }}
          className="w-[200px]"
        />
      </div>
      <div className="absolute top-720 left-200 pointer-events-none">
        <img
          src={cloud3}
          alt="Cloud"
          aria-hidden="true"
          style={{ zIndex: 9999 }}
          className="w-[200px]"
        />
      </div>

      {/* Parachutes1 */}
      <div
        className="absolute -top-620 left-270 pointer-events-none"
        style={{ transform: `translateY(${offsetY * 0.43}px)` }}
      >
        <img
          src={parachutes1}
          alt="Parachutes"
          aria-hidden="true"
          style={{ zIndex: 9999 }}
          className="w-[200px] rotate-[12deg]"
        />
      </div>

      {/* Parachutes2 */}
      <div
        className="absolute -top-600 -left-70 pointer-events-none"
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
          style={{ zIndex: 9999 }}
          className="w-[200px] rotate-[12deg]"
        />
      </div>

      {/* Parachutes3 */}
      {/* <div
        className="absolute -top-180 left-190 pointer-events-none"
        style={{ transform: `translateY(${offsetY * 0.4}px)` }}
      >
        <img
          src={parachutes3}
          alt="Parachutes"
          aria-hidden="true"
          style={{ zIndex: 9999 }}
          className="w-[290px] rotate-[12deg] animate-spin"
        />
      </div> */}
      {/* Parachutes4 | Provision */}
      <div
        className="absolute -top-585 right-40 pointer-events-none"
        style={{ transform: `translateY(${offsetY * 0.52}px)` }}
      >
        <img
          src={parachutes4}
          alt="Parachutes"
          aria-hidden="true"
          style={{ zIndex: 9999 }}
          className="w-[180px] rotate-[12deg]"
        />
      </div>
      {/* Mountain */}
      <div className="absolute -bottom-710 pointer-events-none">
        <img
          src={mountainBg}
          alt="Mountain"
          aria-hidden="true"
          style={{ transform: `translateY(-${offsetY * 0.3}px)` }}
          className="w-[1920px]"
        />
      </div>
      {/* Sun */}
      <div className="absolute -top-230 left-60 pointer-events-none">
        <img
          src={pepeSun}
          alt="Sun"
          aria-hidden="true"
          style={{ zIndex: -1, transform: `translateY(${offsetY * 0.43}px)` }}
        />
      </div>
      {/* Grass */}
      <div className="absolute -bottom-10 pointer-events-none">
        <img
          src={grassBg}
          alt="Grass"
          aria-hidden="true"
          style={{ zIndex: 40 }}
          className="w-[1920px]"
        />
      </div>
    </Section>
  );
};

export default Roadmap;
