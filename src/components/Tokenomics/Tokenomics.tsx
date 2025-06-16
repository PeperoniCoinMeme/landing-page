import React from "react";
import { Section } from "../../layout";
import GlowCard from "../models/GlowCard";
import { overlayCards, testimonials } from "../../constants";
import OverlayCard from "../OverlayCard/OverlayCard";
import {
  orangeScatteredYellow1,
  pepeCivilian,
  pepeFitStrong,
} from "../../assets";
import LandingButton from "../design/buttons/LandingButton";
import LandingHero from "../design/tipography/LandingHero";

const Tokenomics = () => {
  return (
    <Section
      id="tokenomics"
      className="py-10 md:px-20 px-4 lg:px-40 flex flex-col md:flex-row justify-center"
      backgroundSvg={orangeScatteredYellow1}
    >
      <section className="overflow-hidden shadow-inner rounded-xl bg-white py-16 md:px-16 px-6 text-center">
        <div className="relative flex flex-col jutify-center">
          <div className="mb-5 text-center">
            <LandingHero>🍕 Tokenomics: Slice by Slice</LandingHero>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center my-6 flex-wrap relative z-50 gap-7">
            {overlayCards.map((content, index) => (
              <div key={index}>
                <OverlayCard item={content} />
              </div>
            ))}
          </div>

          <div className="pt-8">
            <LandingButton>More</LandingButton>
          </div>

          {/* <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
            {testimonials.map((testimonial, index) => (
              <GlowCard card={testimonial} key={index} index={index}>
                <div className="flex items-center gap-3">
                  <div>
                    <img src={testimonial.imgPath} alt="" />
                  </div>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-white-50">{testimonial.mentions}</p>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div> */}
        </div>
      </section>
    </Section>
  );
};

export default Tokenomics;
