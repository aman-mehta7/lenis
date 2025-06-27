import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Gun(props) {
  const { nodes, materials } = useGLTF(import.meta.env.BASE_URL + 'models/gun.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.aiStandardSurface1SG} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.aiStandardSurface2SG} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.aiStandardSurface2SG} />
      </group>
    </group>
  )
}

// ✅ Correct preload path too
useGLTF.preload(import.meta.env.BASE_URL + 'models/gun.glb')

export default Gun;
