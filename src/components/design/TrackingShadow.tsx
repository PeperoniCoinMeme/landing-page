import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const TrackingShadow = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const ref = useRef<HTMLDivElement>(null);
  const svgPositionInfo = ref.current?.getBoundingClientRect();
  const svgLeft = svgPositionInfo?.left ?? 0;
  const svgTop = svgPositionInfo?.top ?? 0;
  const svgWidth = svgPositionInfo?.width ?? 0;
  const svgHeight = svgPositionInfo?.height ?? 0;

  const svgCenterX = svgLeft + svgWidth / 2;
  const svgCenterY = svgTop + svgHeight / 2;

  const deltaX = mouse.x - svgCenterX;
  const deltaY = mouse.y - svgCenterY;
  function mouseMoveHandler(e: MouseEvent) {
    setMouse({ x: e.clientX, y: e.clientY });
  }

  useEffect(() => {
    window.addEventListener("mousemove", mouseMoveHandler);
    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  return (
    <div className="blur-[80px] absolute opacity-40" ref={ref}>
      <motion.div
        animate={{
          translateX: deltaX,
          translateY: deltaY,
        }}
        transition={{
          ease: "easeOut",
        }}
      >
        <svg viewBox="0 0 900 900" width="400" height="400">
          <g transform="translate(250 340)">
            <motion.path
              d="M142.1 -99.8C154.3 -60.9 113.7 -9.4 81.2 34.2C48.7 77.8 24.4 113.4 -5.4 116.5C-35.2 119.7 -70.4 90.3 -100.2 48.3C-129.9 6.3 -154.2 -48.3 -136.5 -90.3C-118.9 -132.3 -59.5 -161.7 2.7 -163.2C65 -164.8 129.9 -138.7 142.1 -99.8"
              animate={{
                d: [
                  "M142.1 -99.8C154.3 -60.9 113.7 -9.4 81.2 34.2C48.7 77.8 24.4 113.4 -5.4 116.5C-35.2 119.7 -70.4 90.3 -100.2 48.3C-129.9 6.3 -154.2 -48.3 -136.5 -90.3C-118.9 -132.3 -59.5 -161.7 2.7 -163.2C65 -164.8 129.9 -138.7 142.1 -99.8",
                  "M161.1 -83C192.3 -39 189.7 34.5 157.2 67.3C124.7 100.1 62.4 92.3 8.8 87.2C-44.7 82.1 -89.5 79.8 -108.3 54.9C-127 30 -119.8 -17.5 -97.4 -56.4C-75.1 -95.3 -37.5 -125.7 13.7 -133.6C65 -141.5 129.9 -127 161.1 -83",
                  "M78.9 -37C109.1 6.7 145 55.6 132.8 82.8C120.7 110 60.3 115.5 2.7 113.9C-54.8 112.3 -109.7 103.7 -142.2 64.8C-174.6 25.8 -184.8 -43.3 -157.3 -85.5C-129.9 -127.7 -65 -142.8 -20.3 -131.1C24.4 -119.4 48.7 -80.8 78.9 -37",
                ],
                fill: ["#FFCC00", "#FF4500"],
                scale: 3,
              }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                duration: 5,
              }}
            ></motion.path>
          </g>
        </svg>
      </motion.div>
    </div>
  );
};

export default TrackingShadow;
