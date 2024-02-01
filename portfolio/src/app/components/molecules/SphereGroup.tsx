import { AnimatedShpere } from "../atoms";
import { pointsInner, pointsOuter } from "@/data";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export const SphereGroup = () => {
  const meshRef = useRef<any>();
  useFrame(({ clock }) => {
    meshRef.current!.rotation.z = clock.getElapsedTime() * 0.05;
  });

  return (
    <group ref={meshRef}>
      {pointsInner.map((cube, index) => (
        <AnimatedShpere
          key={index}
          position={cube.positions}
          color={cube.color!}
        />
      ))}
      {pointsOuter.map((cube, index) => (
        <AnimatedShpere
          key={index}
          position={cube.positions}
          color={cube.color!}
        />
      ))}
    </group>
  );
};
