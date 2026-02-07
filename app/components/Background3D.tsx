"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, MeshDistortMaterial } from "@react-three/drei";

export default function Background3D() {
  return (
    <div className="fixed inset-0 -z-10 opacity-30">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} />
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
          <mesh>
            <sphereGeometry args={[1, 64, 64]} />
            <MeshDistortMaterial
              color="#000"
              speed={3}
              distort={0.4}
              radius={1}
            />
          </mesh>
        </Float>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}