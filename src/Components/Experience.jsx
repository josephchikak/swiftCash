import {useProgress, ContactShadows, OrbitControls, useGLTF, Environment, Float, PresentationControls, Html, Plane, shaderMaterial} from '@react-three/drei'
import * as THREE from 'three'
import { extend,  } from '@react-three/fiber'
import Iphone from '../Model/Iphone'
import overlayVertexShader from '../shaders/vertex.glsl'
import overlayFragmentShader from '../shaders/fragment.glsl'
import { Suspense } from 'react'

function Loader() {
    const { active, progress, errors, item, loaded, total, } = useProgress()
    return <Html center className='absolute w-screen'>{progress} % loaded</Html>
  }


export default function Experience()
{

 


    return <>
    

        {/* <OrbitControls makeDefault /> */}
{/* 
         <Environment preset='city'/>
        <PresentationControls
            rotation={[0.1, -0.7, 0]}
            polar={[-0.1, 0.1]}
            azimuth={[-0.2, -0.1]}
            config={{mass:2, tension: 400}}
            snap={{mass: 4, tensio: 400}}
        >
            <Float 
                floatingRange={[-0.05, 0.05]}
                floatIntensity={0.5}
                rotationIntensity={0.4}
            >
                 <Iphone
                 />
            </Float>
            
        </PresentationControls>

        <ContactShadows position-x={-1.5}
            opacity={0.6}
            blur={2.5}
            scale = {3}
        /> */}

<   Environment preset='city'/>
        <PresentationControls
            rotation={[0.1, -0.7, 0]}
            polar={[-0.1, 0.1]}
            azimuth={[-1.5, -0.3]}
            config={{mass:2, tension: 400}}
            snap={{mass: 4, tensio: 400}}
        >
            <Float>
            <Suspense fallback={<Loader/>}>

                 <Iphone />
            </Suspense>
            </Float>
        </PresentationControls>

        <ContactShadows position-y={-1.8}
            opacity={0.6}
            blur={2.5}
            scale = {3}
        />
    

       

        {/* <Plane args={[4,4,2,2]}>
            <shaderMaterial
                transparent: true
                vertexShader={ overlayVertexShader }
                fragmentShader={ overlayFragmentShader }
                uniforms={{
                    uAlpha: {value: 1},
                    // uTime: {value: 0},

                }}
            />
        </Plane> */}
    
    </>
}