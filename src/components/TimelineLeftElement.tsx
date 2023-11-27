import styles from "./styles/Timeline.module.css"

interface IProps{
    children:any
}

const TimelineLeftElement = (props:IProps) => {
  return (
    <div className={`${styles.container} ${styles.left}`}>
        {props.children}
    </div>
  )
}

export default TimelineLeftElement