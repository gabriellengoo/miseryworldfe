import React from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from 'react-three-fiber';
import ModelLights from './model-lights';

const Model = ({ scenePath, position, rotation }) => {
  const gltf = useGLTF(scenePath, true);
  const mesh = React.useRef();
  useFrame(
    () => (
      (mesh.current.rotation.x += rotation[0]),
      (mesh.current.rotation.y += rotation[1])
    ),
  );
  return (
    <mesh ref={mesh} position={position}>
      <ModelLights/>
      <primitive object={gltf.scene} dispose={null} />
    </mesh>
  );
};

export default Model;