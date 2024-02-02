import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { SphereGroup } from "../molecules";

export const SceneSphere = () => {
  return (
    <div className="relative">
      <Canvas
        className="bg-[#181818]"
        style={{ height: "100vh", width: "100vw" }}
        camera={{ position: [10, -7.5, -5] }}
      >
        <OrbitControls maxDistance={20} minDistance={10} />
        <directionalLight />
        <pointLight position={[-30, 1, -30]} power={10} />
        <SphereGroup />
      </Canvas>
      <h1 className="p-4 bg-transparent rounded-md absolute top-[50%] left-[55%] -translate-x-[50%] -translate-y-[50%] text-neutral-200 font-medium text-5xl pointer-event md:text-9xl">
        <span>Hi, I&apos;m</span> VO Olivier !
      </h1>
    </div>
  );
};
