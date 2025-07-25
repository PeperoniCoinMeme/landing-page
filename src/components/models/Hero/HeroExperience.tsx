import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Particles from "./Particles";

const HeroExperience = () => {
  //   const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  //   const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <>
      <Canvas
        camera={{ position: [0, 0, 15], fov: 45 }}
        style={{ pointerEvents: "none" }}
      >
        {/* Configure OrbitControls to disable panning and control zoom based on device type */}
        <OrbitControls
          enablePan={false} // Prevents panning of the scene
          // enableZoom={!isTablet} // Disables zoom on tablets
          enableZoom={false} // Disables zoom on tablets
          maxDistance={20} // Maximum distance for zooming out
          minDistance={5} // Minimum distance for zooming in
          minPolarAngle={Math.PI / 5} // Minimum angle for vertical rotation
          maxPolarAngle={Math.PI / 2} // Maximum angle for vertical rotation
        />

        <Suspense fallback={null}>
          <Particles count={200} />
        </Suspense>
      </Canvas>
    </>
  );
};

export default HeroExperience;
