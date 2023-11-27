import styles from "./styles/ImageRotated.module.css"

interface IProps{
    imageSource:string
}

const ImageLeft = (props:IProps) => {
  return (
    <div className={styles.imageContainerLeft}>
        <img width={"100%"} src={props.imageSource}/>
        <div className={styles.border}/>
    </div>
  )
}

export default ImageLeft