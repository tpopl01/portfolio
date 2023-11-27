import styles from "./styles/Expertise.module.css"
interface IProps{
    title:string,
    text:string,
    children:any,
    onHover:()=>void
}

const ExpertiseElement = (props:IProps) => {
  return (
    <div onMouseEnter={props.onHover} className={styles.expertiseElement}>
      <h3>{props.title}</h3>
      <p>{props.text}</p>
      {props.children}
    </div>
  )
}
ExpertiseElement.defaultProps={
  children:<></>
}
export default ExpertiseElement