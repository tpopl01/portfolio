import styles from "./styles/Timeline.module.css"

interface IProps{
    children:any
}

const TimelineRightElement = (props:IProps) => {
  return (
    <div className={`${styles.container} ${styles.right}`}>
        {props.children}
    </div>
  )
}

export default TimelineRightElement