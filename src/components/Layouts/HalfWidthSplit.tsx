import styles from "../styles/HalfWidthSplit.module.css"

interface IProps{
    left:any,
    right:any
}

const HalfWidthSplit = (props:IProps) => {
  return (
    <div className={styles.container}>
        <div className={styles.split}>
            {props.left}
        </div>
        <div className={styles.split}>
            {props.right}
        </div>
    </div>
  )
}

export default HalfWidthSplit