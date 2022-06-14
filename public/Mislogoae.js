/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/mislogoae.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Polygon.geometry} material={materials['Mat.1']} position={[0.39, 0.37, -0.18]} />
    </group>
  )
}

useGLTF.preload('/mislogoae.gltf')



rsync --archive --chown=gabrielle:gabrielle ~/.ssh /home/gabrielle