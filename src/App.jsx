import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import { Color } from 'three';

import vertexShader from './vertexShader';
import fragmentShader from './fragmentShader';

const Flag = () => {
  const mesh = useRef();

  return (
    <mesh ref={mesh} position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[1, 1, 32, 32]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </mesh>
  );
};

export default function App() {
  return (
    <Canvas>
      <Flag />
      {/* <axesHelper /> */}
      <OrbitControls />
    </Canvas>
  );
}
