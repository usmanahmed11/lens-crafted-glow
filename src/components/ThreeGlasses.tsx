import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

const Glasses = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });
  
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={groupRef}>
        {/* Left lens frame */}
        <mesh position={[-1.2, 0, 0]}>
          <torusGeometry args={[0.8, 0.08, 16, 32]} />
          <meshStandardMaterial 
            color="#1a3a52" 
            metalness={0.8} 
            roughness={0.2}
          />
        </mesh>
        
        {/* Right lens frame */}
        <mesh position={[1.2, 0, 0]}>
          <torusGeometry args={[0.8, 0.08, 16, 32]} />
          <meshStandardMaterial 
            color="#1a3a52" 
            metalness={0.8} 
            roughness={0.2}
          />
        </mesh>
        
        {/* Bridge */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.05, 0.05, 0.8]} />
          <meshStandardMaterial 
            color="#d4a574" 
            metalness={0.9} 
            roughness={0.1}
          />
        </mesh>
        
        {/* Left temple */}
        <mesh position={[-2, 0, -0.5]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.04, 0.04, 1.5]} />
          <meshStandardMaterial 
            color="#1a3a52" 
            metalness={0.8} 
            roughness={0.2}
          />
        </mesh>
        
        {/* Right temple */}
        <mesh position={[2, 0, -0.5]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.04, 0.04, 1.5]} />
          <meshStandardMaterial 
            color="#1a3a52" 
            metalness={0.8} 
            roughness={0.2}
          />
        </mesh>
        
        {/* Left lens */}
        <mesh position={[-1.2, 0, 0.05]}>
          <circleGeometry args={[0.72, 32]} />
          <meshPhysicalMaterial 
            color="#ffffff" 
            metalness={0.1} 
            roughness={0.1}
            transmission={0.9}
            thickness={0.5}
            opacity={0.3}
            transparent
          />
        </mesh>
        
        {/* Right lens */}
        <mesh position={[1.2, 0, 0.05]}>
          <circleGeometry args={[0.72, 32]} />
          <meshPhysicalMaterial 
            color="#ffffff" 
            metalness={0.1} 
            roughness={0.1}
            transmission={0.9}
            thickness={0.5}
            opacity={0.3}
            transparent
          />
        </mesh>
      </group>
    </Float>
  );
};

export default Glasses;
