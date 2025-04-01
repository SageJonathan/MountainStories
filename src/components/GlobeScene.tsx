import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture, Html } from "@react-three/drei";
import * as THREE from "three";

interface Location {
  name: string;
  latitude: number;
  longitude: number;
  type: "poem" | "travel" | "alpine";
}

interface GlobeSceneProps {
  locations: Location[];
}

const Pin: React.FC<{ location: Location }> = ({ location }) => {
  const [hovered, setHovered] = useState(false);
  const lat = location.latitude * (Math.PI / 180);
  const lon = location.longitude * (Math.PI / 180);
  const radius = 2.05;

  const x = radius * Math.cos(lat) * Math.cos(-lon);
  const y = radius * Math.sin(lat);
  const z = radius * Math.cos(lat) * Math.sin(-lon);

  // Create triangular flag shape
  const shape = new THREE.Shape();
  shape.moveTo(0, 0);
  shape.lineTo(0.1, 0.03);
  shape.lineTo(0, 0.06);
  shape.lineTo(0, 0);

  return (
    <group position={[x, y, z]}>
      <mesh
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        {/* Flag pole */}
        <cylinderGeometry args={[0.02, 0.02, 0.2, 8]} />
        <meshPhongMaterial color={0xcccccc} />
      </mesh>
      {/* Flag */}
      <mesh position={[0, 0.2, 0]}>
        <shapeGeometry args={[shape]} />
        <meshPhongMaterial
          color={
            location.type === "poem"
              ? 0xff6b6b
              : location.type === "travel"
              ? 0x4ecdc4
              : 0x45b7d1
          }
          side={THREE.DoubleSide}
        />
      </mesh>
      {hovered && (
        <Html position={[0, 0.25, 0]} center>
          <div className="globe-label">{location.name}</div>
        </Html>
      )}
    </group>
  );
};

const Globe: React.FC<{ locations: Location[] }> = ({ locations }) => {
  const groupRef = useRef<THREE.Group>(null);
  const earthTexture = useTexture("/earth.jpg");

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 3, 5]} intensity={0.5} />
      <group ref={groupRef}>
        <mesh>
          <sphereGeometry args={[2, 32, 32]} />
          <meshPhongMaterial
            map={earthTexture}
            specular={new THREE.Color(0x333333)}
            shininess={5}
          />
        </mesh>
        {locations.map((location, index) => (
          <Pin key={index} location={location} />
        ))}
      </group>
    </>
  );
};

const GlobeScene: React.FC<GlobeSceneProps> = ({ locations }) => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <Globe locations={locations} />
        <OrbitControls
          enableZoom={true}
          minDistance={3}
          maxDistance={8}
          enablePan={false}
          enableDamping
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  );
};

export default GlobeScene;
