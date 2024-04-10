import styles from "./styles/Expertise.module.css"
interface IProps{
    title:string,
    text:string,
    children:any,
    onHover:()=>void,
    onLeave:()=>void
}

const ExpertiseElement = (props:IProps) => {
  return (
    <div onMouseEnter={props.onHover} onMouseLeave={props.onLeave} className={styles.expertiseElement}>
      <h3>{props.title}</h3>
      <p>{props.text}</p>
      {props.children}
    </div>
  )
}
ExpertiseElement.defaultProps={
  children:<></>,
  onLeave:()=>{}
}
export default ExpertiseElement