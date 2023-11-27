import styles from "./styles/Tools.module.css"
interface IProps{
    text:string,
    borderRadius:string,
    onHover:(text:string)=>void
}

const ToolsElement = (props:IProps) => {
  return (
    <div className={styles.toolElement} onMouseEnter={()=>{props.onHover(props.text)}} style={{borderRadius:props.borderRadius}}>
      <p style={{margin:"0px", padding:"0px"}}>{props.text}</p>
    </div>
  )
}
ToolsElement.defaultProps={
  borderRadius:"0px"
}
export default ToolsElement