import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import { distribution } from "./webUsageStats";
import type { PieItemIdentifier } from "@mui/x-charts/models";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import LandingSubtitle from "../design/tipography/LandingSubtitle";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import InsightsIcon from "@mui/icons-material/Insights";
import { motion, AnimatePresence } from "framer-motion";
import { peperoniPizza } from "../../assets";
import LandingText from "../design/tipography/LandingText";

export default function PieAnimation() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  // States
  const [itemData, setItemData] = React.useState<PieItemIdentifier>();
  const [radius, setRadius] = React.useState(10);
  const [itemNb, setItemNb] = React.useState(1);
  const [currentSelectedItem, setCurrentSelectedItem] = React.useState(1);

  // Effect 1, change char dinamically
  useEffect(() => {
    if (!inView) {
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
  }, [inView]);

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
      className="relative flex flex-col xl:flex-row justify-between items-center md:gap-10"
    >
      <Box
        sx={{
          width: 300,
          height: 400,
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
          position: "relative",
          marginRight: "50px",
        }}
        className="md:min-w-170 w-fit md:mx-auto relative md:pl-45 w-1/2"
      >
        <PieChart
          style={{
            zIndex: zIndex,
            pointerEvents: window.innerWidth < 768 ? "none" : "auto",
          }}
          colors={[
            "#09214792", // Púrpura profundo espacial
            "#bdbbb592", // Queso cheddar derretido
            "#2f3f3b92", // Pepperoni vibrante
            "#f3441432", // Masa dorada tipo horno de piedra
          ]}
          height={400}
          width={400}
          series={[
            {
              data: distribution,
              innerRadius: radius,
              outerRadius: 170,
              highlightScope: { fade: "global", highlight: "item" },
              faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
              arcLabel: (params) => params.label ?? "",
              arcLabelMinAngle: 30,

              paddingAngle: 9,
              cornerRadius: 5,
              startAngle: -105,
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
        <div className="absolute md:-top-18 -left-50 md:-left-1/2 md:translate-x-1/2 opacity-75 pointer-events-none">
          <img
            src={peperoniPizza}
            alt="Pepperoni Pizza"
            style={{
              zIndex: zIndex - 1,
              transformOrigin: "center center",
              animation: "clockSpin 50s linear infinite",
            }}
            className="w-[525px] relative -right-45"
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
                <p>{distribution[currentSelectedItem - 1].alocation}</p>
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
