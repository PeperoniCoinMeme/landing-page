import { logo, planetBg } from "@/assets";
import LandingHero from "@/components/design/tipography/LandingHero";
import LandingText from "@/components/design/tipography/LandingText";
import { Section } from "@/layout";
import { roadMapCardsA } from "@/constants";
import GlowCard from "@/components/models/GlowCard";
import LandingSubtitle from "@/components/design/tipography/LandingSubtitle";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { layout } from "@/styles/styles";

const RoadmapHeader = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  //   const [offsetY, setOffsetY] = useState(0);
  //   const handleScroll = () => setOffsetY(window.pageYOffset);
  //   useEffect(() => {
  //     window.addEventListener("scroll", handleScroll);
  //     return () => window.removeEventListener("scroll", handleScroll);
  //   }, []);

  return (
    <Section
      id="roadmap"
      className={`${layout.section}`}
      backgroundSvg={planetBg}
    >
      <section className={`${layout.roadMapSection} pt-60 pb-18`}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="md:px-40 px-5 items-center flex flex-col mb-32"
        >
          <div className="flex flex-col items-center gap-5 text-orange-500">
            <div className="hero-badge">
              {/* <p>⏱️ Roadmap Overview </p> */}
            </div>
            <LandingHero color="white" className="text-center">
              "The Oven’s Always On"
            </LandingHero>
          </div>
          <LandingText className="text-center">
            Our roadmap isn’t bound by rigid timelines. We build as the dough
            rises and the sauce simmers. Milestones unlock based on community
            growth, development readiness, and how spicy things get.
          </LandingText>
        </motion.div>

        <div className={`${layout.roadMapMilestoneContainer}`}>
          {roadMapCardsA.map((card) => {
            const { ref: cardRef, inView: cardInView } = useInView({
              triggerOnce: false,
              threshold: 0.2,
            });

            return (
              <motion.div
                ref={cardRef}
                initial={{ opacity: 0, x: -50 }}
                animate={cardInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, ease: "easeOut" }}
                key={card.title}
                className="flex flex-col-reverse xl:items-start items-center xl:flex-row xl:gap-20 gap-10 justify-between"
              >
                <div className="xl:w-2/6 hover:-translate-y-5 transition-transform">
                  <GlowCard card={card} index={0}></GlowCard>
                </div>
                <div className="xl:w-4/6">
                  <div className="flex items-start">
                    <div className="flex xl:gap-20 md:gap-10 gap-3 md:gap-5 relative z-20">
                      <div className="timeline-logo">
                        <img src={logo} alt="logo" />
                      </div>
                      <div className="max-w-110 md:min-w-110">
                        <LandingSubtitle color="white" className="text-left">
                          {card.title}
                        </LandingSubtitle>
                        <LandingText className="my-5 text-white text-left">
                          {card.date}
                        </LandingText>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </Section>
  );
};

export default RoadmapHeader;
