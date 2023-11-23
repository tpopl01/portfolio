interface IProps{
    left:any,
    right:any
}

const HalfWidthSplit = (props:IProps) => {
  return (
    <div style={{width:"100%", minHeight:"200px", display:"flex", flexDirection:"row"}}>
        <div style={{width:"50%", display:"flex", justifyContent:"center", alignItems:"center"}}>
            {props.left}
        </div>
        <div style={{width:"50%", display:"flex", justifyContent:"center", alignItems:"center"}}>
            {props.right}
        </div>
    </div>
  )
}

export default HalfWidthSplit