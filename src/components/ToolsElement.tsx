interface IProps{
    text:string
}

const ToolsElement = (props:IProps) => {
  return (
    <div style={{minWidth:"100px"}}>{props.text}</div>
  )
}

export default ToolsElement