interface IProps{
    children:any
}
const TagContainer = (props:IProps) => {
  return (
    <div style={{display:"flex", flexDirection:"row", flexWrap:"wrap", width:"100%", alignItems:"center", justifyContent:"center", gap:"0.5rem"}}>
        {props.children}
    </div>
  )
}

export default TagContainer