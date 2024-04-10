import styles from "./styles/Tag.module.css"

interface IProps{
    tagName:string,
    activeName:string,
    clearTheme:boolean
}

const Tag = (props:IProps) => {
    const isActive = props.tagName === props.activeName;

  return (
    <div className={styles.tag} style={{backgroundColor:props.clearTheme?"var(--primary-color)":isActive?"var(--tertiary-color)":"var(--secondary-color)"}}>
        {props.tagName}
    </div>
  )
}

Tag.defaultProps={
    activeName:"",
    clearTheme:false
}
export default Tag