import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';
import { MathUtils } from 'three';

//begin flag
import flagVertexShader from './flagVertexShader';
import flagFragmentShader from './flagFragmentShader';

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
    mesh.current.material.uniforms.u_time.value =
      clock.getElapsedTime();
  });

  return (
    <mesh
      ref={mesh}
      position={[-2, 0, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
    >
      <planeGeometry args={[2, 2, 32, 32]} />
      <shaderMaterial
        vertexShader={flagVertexShader}
        fragmentShader={flagFragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
};

//begin sphere

import sphereVertexShader from './sphereVertexShader';
import sphereFragmentShader from './sphereFragmentShader';

const Sphere = () => {
  const mesh = useRef();
  const hover = useRef(false);

  const uniforms = useMemo(
    () => ({
      u_intensity: {
        value: 0.1
      },
      u_time: {
        value: 0.0
      }
    }),
    []
  );

  useFrame((state) => {
    const { clock } = state;
    mesh.current.material.uniforms.u_time.value =
      0.4 * clock.getElapsedTime();
  });

  return (
    <mesh ref={mesh} position={[2, 0, 0]} scale={1}>
      <icosahedronGeometry args={[2, 20]} />
      <shaderMaterial
        fragmentShader={sphereFragmentShader}
        vertexShader={sphereVertexShader}
        uniforms={uniforms}
        wireframe={false}
      />
    </mesh>
  );
};

export default function App() {
  return (
    <Canvas
      style={{ background: '#1b1e28' }}
      camera={{ position: [0.0, 0.0, 8.0] }}
    >
      <Flag />
      <Sphere />
      <OrbitControls />
    </Canvas>
  );
}
