import styles from "./styles/TimelineElement.module.css"

interface IProps{
    title:string,
    text:string
}

const TimelineElement = (props:IProps) => {
  return (
    <div className={styles.content}>
      <h2>{props.title}</h2>
      <p>{props.text}</p>
    </div>
  )
}

export default TimelineElement