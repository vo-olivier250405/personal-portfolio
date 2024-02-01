import { User } from "@/types";
import { OrbitControls, RoundedBox } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { TextureLoader } from "three";

export const Cube = ({
  imageSrc,
  index,
}: {
  imageSrc: string;
  index: number;
}) => {
  const meshRef = useRef<any>();
  const src = useLoader(TextureLoader, imageSrc);
  useFrame(() => {
    meshRef.current!.rotation.y += 0.005;
    meshRef.current!.rotation.x += 0.005;
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[3.5, 3.5, 3.5]} />
      <meshStandardMaterial
        map={src}
        transparent
        opacity={1}
        attach={`material-${index}`}
      />
    </mesh>
  );
};

export const CubeScene = () => {
  const paths: string[] = [
    "/assets/python.jpg",
    "/assets/nodejs.png",
    "/assets/react.png",
    "/assets/typescript.png",
    "/assets/mariadb.png",
    "/assets/prisma.png",
  ];

  return (
    <div className="left-0 h-100">
      <Canvas>
        <ambientLight intensity={2} />
        <directionalLight position={[2, 1, 1]} />
        {paths.map((link, index) => {
          return <Cube key={index} imageSrc={link} index={index} />;
        })}
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export const AboutMeSection = () => {
  return (
    <div className="pt-16 md:p-4 md:m-4">
      <h1 className="text-6xl md:p-4 md:m-4">
        <span>ABOUT ME</span>
      </h1>
      <hr className="m-4" />

      <div className="grid justify-center md:flex md:justify-center md:items-center">
        <div className="m-4">
          <p className="text-sm m-4 p-4 rounded-md opacity-50 md:text-2xl bg-red-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Praesentium, odio beatae, architecto asperiores possimus eius autem
            voluptatum facere sint voluptate iure voluptatem facilis sed enim
            illo corporis maxime perspiciatis temporibus?
          </p>
        </div>

        <div className="hidden bg-red-400 w-100 rounded-md p-4 md:max-w-64 m-auto md:block">
          <h2 className="text-5xl text-white">
            <span>Skills</span>
          </h2>
          <p className="italic">(You can move the cube to see them)</p>
          <CubeScene />
        </div>

        <div className=" md:hidden justify-center items-center grid">
          <h2 className="text-5xl text-white m-auto">
            <span>Skills</span>
          </h2>
          <hr className="m-4" />
          <div className="md:hidden flex  overflow-x-auto max-w-64">
            {[
              "/assets/python.jpg",
              "/assets/nodejs.png",
              "/assets/react.png",
              "/assets/typescript.png",
              "/assets/mariadb.png",
              "/assets/prisma.png",
            ].map((link, index) => {
              return (
                <img
                  className="w-20 m-4 p-4"
                  src={link}
                  alt={link}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
