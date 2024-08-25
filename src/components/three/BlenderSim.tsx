import { Canvas } from "@react-three/fiber"
import { useRef } from "react";
import useIsContextLost from "../hooks/useIsContextLost";

interface IProps{
    isHidden:boolean
}

const BlenderSim = (props:IProps) => {
  const canvas = useRef(null)
  const isContextLost = useIsContextLost(canvas);
    function Cube() {
        return (
          <mesh receiveShadow  position={[0, 0.5, 0]}>
            <boxGeometry />
            <meshStandardMaterial attach="material" color="white" />
          </mesh>
        );
      }

  return (
    isContextLost===false?
    <div style={{width:"100%", height:"100vh", visibility:props.isHidden?"hidden":"visible", transition:"all 1s"}}>
    <Canvas style={{height:"100vh"}} dpr={[1, 1.5]} camera={{ position: [0, 3, 15], rotation:[0,0,0], fov: 45, near: 1, far: 30 }}>
        <color attach="background" args={['#0b0c10']} />
        <hemisphereLight position={[0, 2, 15]} intensity={0.15} groundColor="#0b0c10" />
        <spotLight position={[5, 5, 15]} angle={0.12} penumbra={1} intensity={10} castShadow shadow-mapSize={1024} />
        <rectAreaLight
        width={10}
        height={10}
        color={"white"}
        intensity={2}
        position={[0, 5, 15]}
        castShadow
        />
        <gridHelper args={[20, 20, 0xff0000, 'black']} />
        <Cube/>
    </Canvas>
    </div>
    :
    <></>
  )
}

export default BlenderSim