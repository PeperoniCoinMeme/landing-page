import { useRef, useMemo } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { peperoniBlob1 } from "../../../assets";

interface Particle {
  position: [number, number, number];
  speed: number;
}

interface ParticlesProps {
  count?: number;
}

const Particles: React.FC<ParticlesProps> = ({ count = 200 }) => {
  const mesh = useRef<THREE.Points>(null);

  // Cargar una textura circular (built-in)
  const texture = useLoader(THREE.TextureLoader, peperoniBlob1); // Debes tener esta imagen en tu carpeta pública

  const particles = useMemo<Particle[]>(() => {
    const temp: Particle[] = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 10,
          Math.random() * 10 + 5, // higher starting point
          (Math.random() - 0.5) * 10,
        ],
        speed: 0.005 + Math.random() * 0.001,
      });
    }
    return temp;
  }, [count]);

  useFrame(() => {
    if (!mesh.current) return;
    const positions = mesh.current.geometry.attributes.position
      .array as Float32Array;
    for (let i = 0; i < count; i++) {
      let y = positions[i * 3 + 1];
      y -= particles[i].speed;
      if (y < -2) y = Math.random() * 10 + 5;
      positions[i * 3 + 1] = y;
    }
    mesh.current.geometry.attributes.position.needsUpdate = true;
  });

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    particles.forEach((p, i) => {
      arr[i * 3] = p.position[0];
      arr[i * 3 + 1] = p.position[1];
      arr[i * 3 + 2] = p.position[2];
    });
    return arr;
  }, [particles, count]);

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#FF4500"
        size={0.15}
        transparent
        opacity={0.9}
        depthWrite={false}
        map={texture}
        alphaTest={0.5}
      />
    </points>
  );
};

export default Particles;
