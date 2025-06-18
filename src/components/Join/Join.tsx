import React from "react";
import { Section } from "../../layout";
import JoinButton from "../JoinButton/JoinButton";
import {
  logo,
  orangeScatteredYellow2,
  pepeBanner,
  pepeCar,
  pepeCivilian,
  pepeClimbing,
  pepeFitStrong,
  pepeLogo,
  pepePresident,
  pepeSpy,
  pepeSurf,
  pepeWarrior,
  waveYellowOrange2,
} from "../../assets";
import LandingHero from "../design/tipography/LandingHero";
import LandingText from "../design/tipography/LandingText";

const Join = () => {
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
      className="py-18 md:px-20 px-4 lg:px-40 flex flex-col md:flex-row items-center justify-center h-[1000px]"
      bgColor="#0c0500"
    >
      <section className="cta-card relative rounded-xl shadow-lg rounded-xl bg-white md:px-16 px-6 p-8 md:py-12 flex flex-col md:flex-row">
        <div className="max-w-3xl mx-auto space-y-2 py-8">
          <LandingHero>Join to the Pizza!</LandingHero>

          <LandingText>
            Don’t miss out on the cheesiest opportunity in crypto. Buy $PEP and
            be part of the most flavorful movement on the blockchain.
          </LandingText>

          <div className="mt-15 px-10">
            <JoinButton />
          </div>
        </div>

        <div className="relative overflow-hidden justify-center flex-1">
          <div className="grid-memes">
            {images.map((src, index) => (
              <div className="grid-item" key={index}>
                <img src={src} alt={`meme-${index}`} className="h-16" />
              </div>
            ))}

            {/* Shadow */}
            {/* <TrackingShadow /> */}
          </div>
        </div>
      </section>
    </Section>
  );
};

export default Join;
