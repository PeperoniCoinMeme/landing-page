import React from "react";
import { Section } from "../../layout";

const CTA = () => {
  return (
    <Section
      id="cta"
      className="py-10 flex flex-col md:flex-row justify-center"
    >
      <section
        id="buy"
        className="bg-red-500 text-white py-16 px-6 text-center"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">
            Get Your Peperoni Coins Today!
          </h2>
          <p className="text-lg mb-6">
            Don’t miss out on the cheesiest opportunity in crypto. Buy $PEP and
            be part of the most flavorful movement on the blockchain.
          </p>
          <a
            href="/buy"
            className="bg-white text-red-600 font-semibold py-3 px-8 rounded-full hover:bg-yellow-100 transition"
          >
            Buy Now
          </a>
        </div>
      </section>
    </Section>
  );
};

export default CTA;
