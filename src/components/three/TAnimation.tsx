import { BakeShadows, CameraShake } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { EffectComposer, Bloom, DepthOfField } from "@react-three/postprocessing"
import { IShape } from "../../utils/Interfaces"
import AnimatedShape from "../three/AnimatedShape"
import useIsContextLost from "../hooks/useIsContextLost"
import { useRef } from "react"

interface IProps{
    moveToEnd:boolean
}

const TAnimation = (props:IProps) => {
  const canvas = useRef(null)
  const isContextLost = useIsContextLost(canvas);
  const shapesInitial:Array<IShape> = [
      {x:1, z:0.5, y:0, xRot:0, zRot:0, yRot:0, xSize:1, ySize:1, zSize:1},
      {x:-1.2, z:-0.5, y:0, xRot:120, zRot:125, yRot:240, xSize:1, ySize:1, zSize:1},
      {x:0.2, z:-1.2, y:1.5, xRot:0, zRot:0, yRot:0, xSize:1, ySize:1, zSize:1},
      {x:0.2, z:-0.8, y:0, xRot:0, zRot:0, yRot:0, xSize:1, ySize:1, zSize:1},
      {x:0, z:0.4, y:-0.5, xRot:0, zRot:0, yRot:0, xSize:0.5, ySize:0.5, zSize:0.5},
    ];
    const shapesHovered:Array<IShape> = [
      {x:0, z:0, y:0, xRot:0, zRot:0, yRot:0, xSize:1, ySize:1, zSize:1},
      {x:0, z:0, y:1, xRot:0, zRot:0, yRot:0, xSize:1, ySize:1, zSize:1},
      {x:-1, z:0, y:2, xRot:0, zRot:0, yRot:0, xSize:1, ySize:1, zSize:1},
      {x:1, z:0, y:2, xRot:0, zRot:0, yRot:0, xSize:1, ySize:1, zSize:1},
      {x:0, z:0, y:2, xRot:0, zRot:0, yRot:0, xSize:0.7, ySize:.7, zSize:.7},
    ];

  return (
    isContextLost==false?
      <Canvas ref={canvas} style={{height:"100vh", backgroundColor:"#0b0c10"}} shadows dpr={[1, 1.5]} camera={{ position: [-1.5, 1, 5.5], fov: 45, near: 1, far: 20 }}>
        <color attach="background" args={['#0b0c10']} />
        <hemisphereLight intensity={0.15} groundColor="#0b0c10" />
        <spotLight position={[5, 5, 5]} angle={0.12} penumbra={1} intensity={10} castShadow shadow-mapSize={1024} />
        <group position={[-0, -1, 0]}>
          {shapesInitial.map((element, index)=>{
            return <AnimatedShape key={index} shape={element} target={props.moveToEnd?shapesHovered[index]:shapesInitial[index]}>
              {(index===4)?<><icosahedronGeometry/><meshStandardMaterial color={"#45a29e"}/></>:<><boxGeometry/><meshStandardMaterial color={index%2===0?"#45a29e":"#66fcf1"}/></>}
            </AnimatedShape>
          })}
          <pointLight distance={6.5} intensity={0.5} position={[-0.15, 0.7, 1]} color="orange" />
        </group>
        <EffectComposer>
          <Bloom luminanceThreshold={0} mipmapBlur luminanceSmoothing={0.0} intensity={6} />
          <DepthOfField target={[0, 0, 13]} focalLength={0.3} bokehScale={15} height={700} />
        </EffectComposer>
        <BakeShadows />
        <CameraShake yawFrequency={0.002} pitchFrequency={0.002} rollFrequency={0.002} />
      </Canvas>
      :
      <></>
  )
}

export default TAnimation