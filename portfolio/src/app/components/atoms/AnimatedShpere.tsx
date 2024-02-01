import { Sphere } from "@react-three/drei";

type AnimatedSphreProps = {
  position: [x: number, y: number, z: number];
  color: string;
};

export const AnimatedShpere = (props: AnimatedSphreProps) => {
  return (
    <Sphere position={props.position} args={[0.1, 10, 10]}>
      <meshStandardMaterial
        color={props.color}
        emissive={props.color}
        emissiveIntensity={0.5}
        roughness={0.5}
      />
    </Sphere>
  );
};
