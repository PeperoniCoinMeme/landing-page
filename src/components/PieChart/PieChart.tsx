import * as React from "react";
import Box from "@mui/material/Box";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import { distribution } from "./webUsageStats";
import type { PieItemIdentifier } from "@mui/x-charts/models";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import LandingSubtitle from "../design/tipography/LandingSubtitle";
import Divider from "@mui/material/Divider";
import InsightsIcon from "@mui/icons-material/Insights";
import { motion, AnimatePresence } from "framer-motion";
import { peperoniPizza } from "../../assets";
import LandingText from "../design/tipography/LandingText";
import "./PieChart.css";

function useIsSmallScreen(query = "(max-width: 768px)"): boolean {
  const [isSmallScreen, setIsSmallScreen] = React.useState(
    () => window.matchMedia(query).matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);

    const handler = (event: any) => {
      setIsSmallScreen(event.matches);
    };

    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, [query]);

  return isSmallScreen;
}

export default function PieAnimation() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  // States
  const [itemData, setItemData] = React.useState<PieItemIdentifier>();
  const [radius, setRadius] = React.useState(60);
  const [itemNb, setItemNb] = React.useState(1);
  const [currentSelectedItem, setCurrentSelectedItem] = React.useState(1);

  const isSmallScreen = useIsSmallScreen();

  // Effect 1, change char dinamically
  useEffect(() => {
    if (!inView || !isSmallScreen) {
      setItemData(undefined);
      return;
    }
    setItemData(undefined);
    let counter = 1;

    const interval = setInterval(() => {
      counter++;

      handleItemNbChange(counter);

      if (counter === 4) {
        counter = 0;
      }
    }, 3000);

    return () => {
      clearInterval(interval);
      handleItemNbChange(1);
    };
  }, [inView, isSmallScreen]);

  // Effect 2, change char data on click
  useEffect(() => {
    if (itemData) {
      setCurrentSelectedItem(itemData.dataIndex + 1);
    }
  });

  // Dinamically change the number of items in the char
  const handleItemNbChange = (newValue: number) => {
    if (typeof newValue !== "number") {
      return;
    }
    setItemNb(newValue);
    setCurrentSelectedItem(newValue);
  };

  const zIndex = 500;

  return (
    <div
      ref={ref}
      className="relative flex flex-col xl:flex-row justify-center items-center md:gap-4"
    >
      <Box
        sx={{
          width: 300,
          height: 390,
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
          position: "relative",
          marginRight: "50px",
        }}
        className="md:min-w-170 w-fit md:mx-auto relative md:pl-15 w-1/2"
      >
        <PieChart
          style={{
            zIndex: zIndex,
            pointerEvents: window.innerWidth < 768 ? "none" : "auto",
          }}
          colors={[
            "#f3441432", // Masa dorada tipo horno de piedra
            "#2f3f3b92", // Pepperoni vibrante
            "#bdbbb592", // Queso cheddar derretido
            "#09214792", // Púrpura profundo espacial
          ]}
          height={365}
          width={365}
          series={[
            {
              data: distribution,
              innerRadius: radius,
              outerRadius: 170,
              //   highlightScope: { fade: "global", highlight: "item" },
              faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
              arcLabel: (params) =>
                params.label + " " + params.value.toString() + "%",
              arcLabelMinAngle: 30,

              paddingAngle: 9,
              cornerRadius: 5,
              startAngle: -90,
            },
          ]}
          sx={{
            [`& .${pieArcLabelClasses.root}`]: {
              fill: "#ffffff",
              fontWeight: 600,
              fontSize: 14,
            },
          }}
          onItemClick={(event, d) => setItemData(d)}
        />

        {/* Pepperoni Pizza */}
        <div className="absolute md:-top-18 -left-52 md:-left-1/2 md:translate-x-1/2 opacity-75 pointer-events-none">
          <img
            src={peperoniPizza}
            alt="Pepperoni Pizza"
            style={{
              zIndex: zIndex - 1,
              transformOrigin: "center center",
              animation: "clockSpin 50s linear infinite",
            }}
            className="w-[525px] relative md:-right-45 -right-35"
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
      </Box>

      <motion.div
        layout // smooth changes
        className="min-w-1/2"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSelectedItem} // unique key
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            layout // smooth changes
            className="flex flex-col items-start text-center md:text-start gap-3 w-full mt-4 "
          >
            <div className="flex flex-col w-full items-center xl:items-start">
              <LandingSubtitle color="white">
                {distribution[currentSelectedItem - 1].label}
              </LandingSubtitle>

              <span className="rounded-full border-1 border-white/50 flex flex-row items-center justify-center gap-2 px-4 py-1">
                <InsightsIcon />
                <p>{distribution[currentSelectedItem - 1].alocation} </p> |
                <span className="text-green-400 font-bolder">
                  {distribution[currentSelectedItem - 1].percent}
                </span>
              </span>
            </div>

            <Divider
              orientation="horizontal"
              flexItem
              sx={{ borderColor: "#FFA8005A" }}
            />
            <LandingText className="text-white">
              {distribution[currentSelectedItem - 1].purpose}
            </LandingText>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
