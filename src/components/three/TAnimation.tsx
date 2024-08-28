import { Canvas } from "@react-three/fiber"
import { IShape } from "../../utils/Interfaces"
import AnimatedShape from "../three/AnimatedShape"
import useIsContextLost from "../hooks/useIsContextLost"
import { useEffect, useRef, useState } from "react"
import { CameraShake, RoundedBox } from "@react-three/drei"
import useOnScreen from "../hooks/useOnScreen"

interface IProps{
    moveToEnd:boolean
}

const TAnimation = (props:IProps) => {
  const canvas = useRef(null)
  const container = useRef(null)
  const [elements, setElements] = useState<any>([])
  const isContextLost = useIsContextLost(canvas)
  const isOnScreen = useOnScreen(container)

  useEffect(()=>{
    const shapesInitial:Array<IShape> = [
        {x:1, z:0.5, y:0, xRot:0, zRot:0, yRot:0, xSize:1, ySize:1, zSize:1},
        {x:-1.2, z:-0.5, y:0, xRot:120, zRot:125, yRot:240, xSize:1, ySize:1, zSize:1},
        {x:0.2, z:-1.2, y:1.5, xRot:0, zRot:0, yRot:0, xSize:1, ySize:1, zSize:1},
        {x:0.2, z:-0.8, y:0, xRot:0, zRot:0, yRot:0, xSize:1, ySize:1, zSize:1},
        {x:0, z:0.4, y:-0.5, xRot:0, zRot:0, yRot:0, xSize:0.7, ySize:0.7, zSize:0.7},
      ];
      const shapesHovered:Array<IShape> = [
        {x:0, z:0, y:0, xRot:0, zRot:0, yRot:0, xSize:1, ySize:1, zSize:1},
        {x:0, z:0, y:1, xRot:0, zRot:0, yRot:0, xSize:1, ySize:1, zSize:1},
        {x:-1, z:0, y:2, xRot:0, zRot:0, yRot:0, xSize:1, ySize:1, zSize:1},
        {x:1, z:0, y:2, xRot:0, zRot:0, yRot:0, xSize:1, ySize:1, zSize:1},
        {x:0, z:0, y:2, xRot:0, zRot:0, yRot:0, xSize:1, ySize:1, zSize:1},
      ];

    setElements(
      shapesInitial.map((element, index)=>{
        return <AnimatedShape key={index} shape={element} target={props.moveToEnd?shapesHovered[index]:shapesInitial[index]}>
          {(index===4)?
            <><RoundedBox radius={.5}><meshStandardMaterial emissiveIntensity={0.1} emissive={index%2===0?"#45a29e":"#66fcf1"} color={"#45a29e"}/></RoundedBox></>
            :
            <><RoundedBox radius={0.05}><meshStandardMaterial emissiveIntensity={0.1} emissive={index%2===0?"#45a29e":"#66fcf1"} color={index%2===0?"#45a29e":"#66fcf1"}/></RoundedBox></>
          }
        </AnimatedShape>
      })
    )
  }, [props.moveToEnd])

  return (
    <div ref={container}>
    {isContextLost===false?
      <Canvas ref={canvas} style={{height:"100vh", backgroundColor:"transparent"}} dpr={[.5, 1.5]} camera={{ position: [-1.5, 1, 5.5], fov: 45, near: 1, far: 20 }}>
        {
          isOnScreen?
          <>
          <hemisphereLight intensity={0.15} groundColor="#0b0c10"/>
          <spotLight position={[5, 5, 5]} angle={0.15} penumbra={1} intensity={100}/>
          </>
          :
          <></>
        }
        <group position={[-0, -1, 0]}>
          {elements}
          <pointLight distance={6.5} intensity={0.5} position={[-0.15, 0.7, 1]} color="orange" />
        </group>
        <CameraShake yawFrequency={0.001} pitchFrequency={0.001} rollFrequency={0.001} />
      </Canvas>
      :
      <></>}
      </div>
  )
}

export default TAnimation