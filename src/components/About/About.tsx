import React from "react";
import { Section } from "../../layout";

const About = () => {
  return (
    <Section id="about" className="h-[400px] my-10 bg-orange-300">
      <div className="flex flex-col md:flex-row justify-center">
        <div className="text-2xl text-center m-auto">About</div>
      </div>
    </Section>
  );
};

export default About;
