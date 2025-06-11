import React from "react";
import { Section } from "../../layout";

const Hero = () => {
  return (
    <Section id="hero" className="h-[400px] my-10 bg-white">
      <div className="flex flex-col md:flex-row justify-center">
        <div className="text-2xl text-center m-auto">Hero</div>
      </div>
    </Section>
  );
};

export default Hero;
