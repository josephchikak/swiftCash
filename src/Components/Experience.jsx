import {ContactShadows, OrbitControls, useGLTF, Environment, Float, PresentationControls, Html} from '@react-three/drei'
import Iphone from '../Model/Iphone'

export default function Experience()
{

    return <>

        {/* <OrbitControls makeDefault /> */}

         <Environment preset='city'/>
        <PresentationControls
            rotation={[0.1, -0.7, 0]}
            polar={[-0.1, 0.1]}
            azimuth={[-1.5, -0.3]}
            config={{mass:2, tension: 400}}
            snap={{mass: 4, tensio: 400}}
        >
            <Float>
                 <Iphone />
            </Float>
        </PresentationControls>

        <ContactShadows position-y={-1.8}
            opacity={0.6}
            blur={2.5}
            scale = {3}
        />
    
    </>
}