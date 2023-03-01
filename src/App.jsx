import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

import vertexShader from './vertexShader';
import fragmentShader from './fragmentShader';

const Flag = () => {
  const mesh = useRef();

  const uniforms = useMemo(
    () => ({
      u_time: {
        value: 0.01
      },
      u_colorA: { value: new THREE.Color('#fef9c3') },
      u_colorB: { value: new THREE.Color('#71e4c9') }
    }),
    []
  );

  useFrame((state) => {
    const { clock } = state;
    mesh.current.material.uniforms.u_time.value = clock.getElapsedTime();
  });

  return (
    <mesh ref={mesh} position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[1, 1, 32, 32]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
};

export default function App() {
  return (
    <Canvas style={{ background: '#1b1e28' }}>
      <Flag />
      {/* <axesHelper /> */}
      <OrbitControls />
    </Canvas>
  );
}
