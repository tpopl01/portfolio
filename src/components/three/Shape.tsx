import { IShape } from "../../utils/Interfaces"

interface IProps{
    shape:IShape,
    children:any
}

const Shape = (props:IProps) => {
  return (
    <mesh receiveShadow position={[props.shape.x, props.shape.y, props.shape.z]} rotation={[props.shape.xRot, props.shape.yRot, props.shape.zRot]} scale={[props.shape.xSize,props.shape.ySize,props.shape.zSize]}>
        {props.children}
        <meshStandardMaterial />
    </mesh>
  )
}

export default Shape