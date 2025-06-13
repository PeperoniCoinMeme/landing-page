import React from "react";
import { Section } from "../../layout";
import GlowCard from "../models/GlowCard";
import { overlayCards, testimonials } from "../../constants";
import OverlayCard from "../OverlayCard/OverlayCard";
import { pepeCivilian, pepeFitStrong } from "../../assets";

const Tokenomics = () => {
  return (
    <Section
      id="tokenomics"
      className="py-10 bg-red-500 flex flex-col md:flex-row justify-center"
    >
      <section className="bg-yellow-100 dark:bg-zinc-900 py-20 px-6">
        <div className="max-w-6xl mx-auto relative">
          <h2 className="text-3xl font-bold text-center text-red-700 dark:text-red-400 mb-12">
            🍕 Tokenomics: Slice by Slice
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {/* <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow text-gray-800 dark:text-gray-100">
              <h3 className="text-xl font-semibold mb-3">Total Supply</h3>
              <p className="text-lg">1,000,000,000 $PEP</p>
            </div>

            <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow text-gray-800 dark:text-gray-100">
              <h3 className="text-xl font-semibold mb-3">Distribution</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>50% Presale</li>
                <li>25% Liquidity</li>
                <li>15% Community & Rewards</li>
                <li>10% Team & Development</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow text-gray-800 dark:text-gray-100">
              <h3 className="text-xl font-semibold mb-3">Burn Rate</h3>
              <p>1% per transaction. Fewer tokens, more flavor!</p>
            </div>

            <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow text-gray-800 dark:text-gray-100">
              <h3 className="text-xl font-semibold mb-3">Rewards</h3>
              <p>2% redistributed to holders with every transaction.</p>
            </div> */}
          </div>

          <div className="flex flex-col md:flex-row items-center my-6 flex-wrap relative z-50 gap-y-8">
            {overlayCards.map((content, index) => (
              <div key={index}>
                <OverlayCard item={content} />
              </div>
            ))}
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
      ;
    </Section>
  );
};

export default Tokenomics;
