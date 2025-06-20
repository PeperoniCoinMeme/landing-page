import React from "react";
import { Section } from "../../layout";
import Clients from "../Clients/Clients";

const Feature = () => {
  return (
    <Section id="feature" className="">
      <div className="flex flex-row w-full justify-around h-[300px] items-center">
        <Clients />
      </div>
    </Section>
  );
};

export default Feature;
