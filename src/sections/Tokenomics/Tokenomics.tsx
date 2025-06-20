import React from "react";
import { Section } from "../../layout";
import { overlayCards, testimonials } from "../../constants";
import { peperoniPizza } from "../../assets";
import LandingButton from "../../components/design/buttons/LandingButton";
import LandingHero from "../../components/design/tipography/LandingHero";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Tokenomics = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  return (
    <Section
      id="slicenomics"
      className="py-10 md:px-20 px-4 lg:px-40 flex flex-col md:flex-row justify-center"
      bgColor="#000000"
    >
      <section className="overflow-hidden rounded-xl py-16 md:px-16 px-6 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative flex flex-col justify-center"
        >
          <div className="mb-5 text-center">
            <LandingHero color="white">
              🍕 Slicenomics: Slice by Slice
            </LandingHero>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center my-6 flex-wrap relative z-50 gap-7 min-h-150"></div>

          <div className="pt-18">
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
        </motion.div>
      </section>

      {/* Pepperoni Pizza */}
      <div className="absolute top-50 md:top-70 -right-30 opacity-30 pointer-events-none z-11 ">
        <img
          src={peperoniPizza}
          alt="Pepperoni Pizza"
          style={{
            zIndex: 9999,
            transformOrigin: "center center",
            animation: "clockSpin 20s linear infinite",
          }}
          className="w-[400px] relative -right-40"
        />
        <style>{`
          @keyframes clockSpin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </div>
    </Section>
  );
};

export default Tokenomics;
