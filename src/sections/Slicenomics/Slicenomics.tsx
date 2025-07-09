import { Section } from "@/layout";
import { astronaut2, satelliteCold } from "@/assets";
import LandingHero from "@/components/design/tipography/LandingHero";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import StarBackground from "@/components/StarBackground/StarBackground";
import PieAnimation from "@/components/PieChart/PieChart";
import { layout } from "@/styles/styles";
import LandingText from "@/components/design/tipography/LandingText";

const Slicenomics = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  return (
    <Section
      id="slicenomics"
      className={`${layout.section} ${layout.sectionHeight} min-h-280 lg:min-h-230`}
      bgColor="#000000"
    >
      <StarBackground />
      <section className="md:px-20 px-4 lg:px-40 rounded-xl py-30 md:py-16 md:px-16 px-6 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative flex flex-col justify-center lg:items-start items-center"
        >
          <LandingHero className="mb-5 text-center">
            Slicenomics: Slice by Slice
          </LandingHero>

          <div className="lg:flex lg:flex-col lg:text-left grid grid-cols-2 w-full mb-12 gap-8">
            <div className="flex flex-col lg:flex-row gap-3 items-center">
              <LandingText>Total Supply:</LandingText>
              <span className="text-red-400 text-2xl"> 1,790,000,000</span>
              <LandingText>$PEPERONI.</LandingText>
            </div>
            <div className="flex flex-col lg:flex-row gap-3 items-center">
              <LandingText>Milestone Burn:</LandingText>
              <span className="text-red-400 text-2xl">790,000,000</span>
              <LandingText>
                will be burned progressively across project milestones.
              </LandingText>
            </div>
            <div className="col-span-2 justify-self-center flex flex-col lg:flex-row gap-3 items-center">
              <LandingText>Distribution of</LandingText>
              <span className="text-red-400 text-2xl">1,000,000,000</span>
              <LandingText>Remaining Supply:</LandingText>
            </div>
          </div>

          <PieAnimation />

          <div className="my-15 md:my-5 lg:my-10">
            {/* <LandingButton bgColor="#2b2c2f">More</LandingButton> */}
          </div>
        </motion.div>
      </section>

      {/* Satellite */}
      <div className="absolute -top-40 md:-top-50 -translate-x-1/2 -right-30 pointer-events-none">
        <motion.img
          src={satelliteCold}
          alt="Satellite"
          aria-hidden="true"
          initial={{ opacity: 1, y: 0 }}
          animate={{
            x: [0, 20, 0, -20, 0, -20, 0, 40, 0, 20, 0],
            y: [0, -20, 0, 40, 0, -10, 0, -20, 0, 10, 0],
          }}
          transition={{
            duration: 65,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          style={{ zIndex: 0 }}
          className="md:w-[250px] w-[400px] lg:w-[450px] rotate-[-10deg] opacity-20"
        />
      </div>
      {/* Astronaut */}
      <div className="absolute -bottom-50 md:-bottom-100 left-20 md:left-0 pointer-events-none">
        <motion.img
          src={astronaut2}
          alt="Astronaut"
          aria-hidden="true"
          initial={{ width: 250, opacity: 1, y: 0 }}
          animate={{ y: [0, -70, 0] }}
          transition={{
            duration: 10,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          style={{ zIndex: 9999 }}
          className="rotate-[-10deg] w-[220px]"
        />
      </div>
    </Section>
  );
};

export default Slicenomics;
