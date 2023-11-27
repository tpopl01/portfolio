import styles from "./styles/Tag.module.css"

interface IProps{
    tagName:string,
    activeName:string
}

const Tag = (props:IProps) => {
    const isActive = props.tagName === props.activeName;

  return (
    <div className={styles.tag} style={{backgroundColor:isActive?"var(--tertiary-color)":"var(--secondary-color)"}}>
        {props.tagName}
    </div>
  )
}

Tag.defaultProps={
    activeName:""
}
export default Tag