import ToolsElement from './ToolsElement'

const Tools = () => {
  return (
    <div style={{padding:"10px", display:"flex", flexDirection:"row", gap:"1rem", alignItems:"center", justifyContent:"center", flexWrap:"wrap", minWidth:"50%"}}>
        <ToolsElement text='C#'/>
        <ToolsElement text='JavaScript'/>
        <ToolsElement text='Python'/>
        <ToolsElement text='Unity'/>
        <ToolsElement text='React'/>
        <ToolsElement text='Blender'/>
    </div>
  )
}

export default Tools