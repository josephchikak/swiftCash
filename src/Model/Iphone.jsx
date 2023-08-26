import React from 'react'
import { Environment, useGLTF, } from "@react-three/drei";

const Iphone = () => {
    const iphone = useGLTF('/iphone122.glb')

  return (
    <>    
    <primitive
        object = {iphone.scene}
        position-x ={-0.5}
        position-y ={-0.5}

        scale = {0.6}
    />

    </>
       
  )
}

useGLTF.preload('/iphone.gltf')

export default Iphone