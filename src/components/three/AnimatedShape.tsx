import { useRef } from 'react'
import { IShape } from '../../utils/Interfaces'
import { useFrame } from '@react-three/fiber'
import { Euler, Mesh, Quaternion, Vector3 } from 'three'

interface IProps{
    shape:IShape,
    target:IShape,
    children:any
}

const AnimatedShape = (props:IProps) => {
    const ref = useRef<Mesh>(null);
    const pos = new Vector3(props.target.x, props.target.y, props.target.z)
    const scale = new Vector3(props.target.xSize, props.target.ySize, props.target.zSize)
    const rot = new Quaternion().setFromEuler(new Euler(props.target.xRot, props.target.yRot, props.target.zRot))
    function HandleLerp() {
        return useFrame(() => {
            if(ref.current){
                ref.current.position.lerp(pos, 0.025)
                ref.current.quaternion.slerp(rot, 0.035)
                // ref.current.rotation.x = rot.x
                // ref.current.rotation.y = rot.y
                // ref.current.rotation.z = rot.z
                ref.current.scale.lerp(scale, 0.025)
            }
          })
      }

  return (
    <>
    <mesh ref={ref} receiveShadow position={[props.shape.x, props.shape.y, props.shape.z]} rotation={[props.shape.xRot, props.shape.yRot, props.shape.zRot]} scale={[props.shape.xSize,props.shape.ySize,props.shape.zSize]}>
        {props.children}
        
    </mesh>
    <HandleLerp/>
    </>
  )
}

export default AnimatedShape