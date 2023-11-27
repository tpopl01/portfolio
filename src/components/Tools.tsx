import ToolsElement from './ToolsElement'
import styles from "./styles/Tools.module.css"

interface IProps{
  onHover:(hoveredText:string)=>void
}

const Tools = (props:IProps) => {

  return (
    <>
      <h3 style={{zIndex:200}}>Key Tools / Languages</h3>
      <div onMouseLeave={()=>{props.onHover("")}} className={styles.tool} style={{zIndex:200}}>
          <ToolsElement onHover={props.onHover} text='C#' borderRadius='15px 0px 0px 15px'/>
          <ToolsElement onHover={props.onHover} text='JavaScript'/>
          <ToolsElement onHover={props.onHover} text='Python'/>
          <ToolsElement onHover={props.onHover} text='Unity'/>
          <ToolsElement onHover={props.onHover} text='React'/>
          <ToolsElement onHover={props.onHover} text='Blender Addons' borderRadius='0px 15px 15px 0px'/>
      </div>
    </>
  )
}

export default Tools