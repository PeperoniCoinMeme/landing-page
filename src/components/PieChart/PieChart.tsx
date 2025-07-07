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
import Chip from "@mui/material/Chip";
import RotatingGalaxy from "../RotatingGalaxy/RotatingGalaxy";

function useIsSmallScreen(query = "(max-width: 768px)"): boolean {
  const [isSmallScreen, setIsSmallScreen] = React.useState(
    () => window.matchMedia(query).matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);

    const handler = (e: MediaQueryListEvent) => {
      setIsSmallScreen(e.matches);
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

  const [chip, setChip] = React.useState<{
    x: number;
    y: number;
    label: string;
  } | null>(null);

  const isSmallScreen = useIsSmallScreen();

  // Effect 1, change char dinamically
  //   useEffect(() => {
  //     if (!inView || !isSmallScreen) {
  //       setItemData(undefined);
  //       return;
  //     }
  //     setItemData(undefined);
  //     let counter = 1;

  //     const interval = setInterval(() => {
  //       counter++;

  //       handleItemNbChange(counter);

  //       if (counter === 4) {
  //         counter = 0;
  //       }
  //     }, 3000);

  //     return () => {
  //       clearInterval(interval);
  //       handleItemNbChange(1);
  //     };
  //   }, [inView, isSmallScreen]);

  // Effect 2, change char data on click
  useEffect(() => {
    if (itemData) {
      setCurrentSelectedItem(itemData.dataIndex + 1);
    }
  }, [itemData]);

  // Dinamically change the number of items in the char
  const handleItemNbChange = (newValue: number) => {
    if (typeof newValue !== "number") {
      return;
    }
    setItemNb(newValue);
    setCurrentSelectedItem(newValue);
  };

  // Chip display
  const handleSliceClick = (
    event: React.MouseEvent<SVGPathElement, MouseEvent>,
    d: PieItemIdentifier
  ) => {
    const rect = event.currentTarget.ownerSVGElement!.getBoundingClientRect();

    const localX = event.clientX - rect.left / 1.6;
    const localY = event.clientY - rect.top / 0.98;

    const p = distribution[d.dataIndex];
    setChip({
      x: localX,
      y: localY,
      label: `${p.label} ${p.value}%`,
    });

    handleItemNbChange(d.dataIndex + 1);
  };

  // Chip hide
  React.useEffect(() => {
    if (!chip) return;
    const id = setTimeout(() => setChip(null), 1000);
    return () => clearTimeout(id);
  }, [chip]);

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
          marginRight: "0px",
        }}
        className="md:min-w-170 w-fit md:mx-auto relative md:pl-35 w-1/2"
      >
        {/* ---------- Floating Chip ---------- */}
        {chip && (
          <Chip
            label={chip.label}
            sx={{
              position: "absolute",
              left: chip.x,
              top: chip.y,
              transform: "translate(-50%, -100%)",
              bgcolor: "#000000cc",
              color: "white",
              fontWeight: 700,
              zIndex: 9999,
            }}
            size="small"
          />
        )}

        {/* ---------- Pie Chart ---------- */}
        <PieChart
          style={{
            zIndex: 500,
            // pointerEvents: window.innerWidth < 768 ? "none" : "auto",
            pointerEvents: "auto",
          }}
          colors={["#f3441432", "#2f3f3b92", "#bdbbb592", "#09214792"]}
          height={365}
          width={365}
          series={[
            {
              data: distribution,
              innerRadius: radius,
              outerRadius: 170,
              faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
              arcLabelMinAngle: 0,
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
            [`& .MuiPieArc-root`]: {
              touchAction: "pan-y",
            },
            [`& path`]: {
              touchAction: "pan-y",
            },
            [`& g`]: {
              touchAction: "pan-y",
            },
            [`& svg`]: {
              touchAction: "pan-y",
            },
          }}
          slotProps={{
            tooltip: { trigger: "none" },
          }}
          onItemClick={handleSliceClick}
        />

        {/* Rotating Pepperoni Galaxy */}
        <RotatingGalaxy zIndex={zIndex} />
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
