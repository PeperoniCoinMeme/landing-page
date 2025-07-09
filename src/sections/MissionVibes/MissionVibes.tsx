import { Section } from "@/layout";
import { smartPhone, tiktokVideo } from "@/assets";
import LandingHero from "@/components/design/tipography/LandingHero";
import LandingText from "@/components/design/tipography/LandingText";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { layout } from "@/styles/styles";
import LandingVideo from "@/components/LandingVideo/LandingVideo";
import LandingCaption from "@/components/design/tipography/LandingCaption";
import Checkmark from "@/assets/svg/checkmark";
import "./MissionVibes.css";

const MissionVibes = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const halfSectionPadding = "px-4 py-25 md:px-20 lg:px-40";

  const highlights = [
    "LP burned",
    "Ownership renounced",
    "Meme-first mission",
    "Permissionless utility layer on Solana",
  ];

  return (
    <Section
      id="missionvibes"
      className={`${layout.section} min-h-190`}
      bgColor="linear-gradient(180deg, #0c0500, #000000)"
    >
      <section
        className={`overflow-hidden flex flex-col lg:flex-row-reverse ${halfSectionPadding} relative`}
      >
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative flex flex-col jutify-center flex-1"
        >
          <div className="flex flex-col items-center lg:items-start my-6 flex-wrap relative z-50 gap-4">
            <LandingHero className="text-center lg:text-left">
              Mission & Vibes
            </LandingHero>

            <LandingText className="text-center lg:text-left">
              "Cooked by the People". What happens when you throw community,
              culture, and a little insanity into a Solana oven? You get
              $PEPERONI, a decentralized memecoin that isn’t built on hype, but
              on fun, fairness, and freedom.
            </LandingText>
            <LandingText className="text-center lg:text-left">
              No tax scams. No VCs calling shots. Just a growing tribe of meme
              chefs baking something tastier than the usual crypto soup.
            </LandingText>
          </div>
          <p className="text-red-500 text-semibold text-xl underline pt-4 pb-4 text-center lg:text-left">
            Built different
          </p>
          {/* It’s not just a vibe — it’s a movement with mozzarella. */}
          <div className="grid grid-cols-2 lg:flex lg:flex-row gap-5 mt-2 z-50 lg:max-w-150">
            {highlights.map((text, index) => (
              <div
                key={index}
                className="px-5 lg:px-0
            w-full lg:w-44 text-sm text-gray-100 transition-transform duration-300 hover:scale-110
            flex flex-col gap-3 text-center lg:text-start items-center lg:items-start"
              >
                <Checkmark />
                <LandingCaption>{text}</LandingCaption>
              </div>
            ))}
          </div>
          <div className="py-8">{/* <LandingButton>See</LandingButton> */}</div>
        </motion.div>

        <div className="absolute -translate-x-1/2 left-1/2 lg:translate-x-0 lg:left-5 xl:-left-10 top-15 lg:-top-17 lg:relative flex-1 flex flex-col items-center min-w-6/12 transition-transform duration-400">
          <div className="lg:opacity-100 opacity-30 h-150 w-100 parent-depth relative ">
            <LandingVideo
              src={tiktokVideo}
              className="video-depth absolute transform shadow-2xl"
            />
            {/* <div className="m2"></div> */}

            <div
              style={{
                background: `url(${smartPhone})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              className="h-150 w-100 parent-depth absolute"
            ></div>
          </div>

          {/* <div className="absolute top-0 left-0 w-full h-full flex items-center bg-black/10 justify-center z-10 text-white"></div> */}
        </div>

        {/* <div className="hole absolute bottom-20 left-1/2">
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </div> */}

        {/* Cheese With Pepperoni Splash */}
        {/* <div className="top-110 right-40 md:top-100 md:right-0 absolute pointer-events-none z-0 overflow-hidden">
          <img
            src={splash}
            alt="Pepperoni Pizza"
            style={{
              zIndex: 9999,
              transformOrigin: "center center",
            }}
            className="md:w-[350px] w-[250px] relative"
          />
        </div> */}
      </section>
      <div className="absolute top-0 min-w-full w-[1920px] h-24 bg-gradient-to-t from-transparent to-[#0c0500] pointer-events-none z-9999" />
    </Section>
  );
};

export default MissionVibes;
