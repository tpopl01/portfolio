import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Euler, Mesh, Quaternion, Vector3 } from 'three'

interface IProps{
    yPos:number,
    children:any,
    speed:number,
    onReachedCollidePos:(xPos:number)=>void,
    endZ:number,
    endOffset:number,
    startOffset:number
}

const RunnerShape = (props:IProps) => {
    const ref = useRef<Mesh>(null);
    const rand = Math.random()*100;
    const [xPos, setXPos] = useState(rand<33?-1:rand<66?0:1);
    const [zPos, setZPos] = useState(Math.min(Math.random() * -1000*props.startOffset, -15 - (1.5*props.startOffset)))
    const lerpPos = new Vector3(xPos, props.yPos, props.endZ)
    const rot = new Quaternion().setFromEuler(new Euler(0, 0, .1))
    const rotEnd = new Quaternion().setFromEuler(new Euler(0, 0, -.1))
    const [isRotToEnd, setIsRotToEnd] = useState<boolean>(false);
    const [prevDelta, setPrevDelta] = useState<number>(0);
    const [deltaTime, setDeltaTime] = useState<number>(0);
    function HandleLerp() {
        return useFrame((state, delta) => {
            if(ref.current){
                ref.current.position.lerp(lerpPos, props.speed);
                ref.current.quaternion.slerp(isRotToEnd?rotEnd:rot, 0.035);
                setDeltaTime(delta+deltaTime);
                if(deltaTime > prevDelta+0.3){
                    setPrevDelta(deltaTime);
                    setIsRotToEnd(!isRotToEnd);
                }
                if(ref.current.position.z > props.endZ+props.endOffset && ref.current.position.z < props.endZ+props.endOffset+1)
                {
                    props.onReachedCollidePos(xPos);
                }
                if(ref.current.position.z > props.endZ-5)
                {
                    const rand = Math.random()*100;
                    ref.current.position.set(xPos, props.yPos, zPos);
                    setZPos(Math.min(Math.random() * -1000*props.startOffset, -15 + (1.5*props.startOffset)));
                    setXPos(rand<33?-1:rand<66?0:1);
                }
            }
          })
      }

  return (
    <>
    <mesh ref={ref} receiveShadow position={[xPos, props.yPos, zPos]}>
        {props.children}
    </mesh>
    <HandleLerp/>
    </>
  )
}

export default RunnerShape