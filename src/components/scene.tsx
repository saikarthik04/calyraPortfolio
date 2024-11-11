// src/Model.tsx
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Model: React.FC = () => {
  const modelRef = useRef<THREE.Group>(null);
  
  // Load the GLTF model, specify the type to ensure we have access to properties
  const { scene } = useGLTF('../assets/retrofuturism_bg_animation.glb') 

  // Rotate the model slightly on each frame
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01;
      modelRef.current.rotation.x += 0.01;
    }
  });

  return <primitive ref={modelRef} object={scene} scale={1} />;
};

export default Model;
