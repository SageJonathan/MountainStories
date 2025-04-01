import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import SpinningGlobe from "./SpinningGlobe";

const GlobeScene = () => {
  return (
    <div style={{ width: "100%", height: "400px" }}>
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 3]} />
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <pointLight position={[-10, -10, -10]} intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <SpinningGlobe />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
};

export default GlobeScene;
