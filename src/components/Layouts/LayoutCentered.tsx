
interface IProps{
    children:any
}

const LayoutCentered = (props:IProps) => {
  return (
    <div style={{width:"100%", height:"100vh", display:"flex", flexDirection:"column", gap:"2rem", justifyContent:"center", alignItems:"center"}}>
        {props.children}
    </div>
  )
}

export default LayoutCentered