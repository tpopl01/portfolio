import styles from "./styles/ImageRotated.module.css"

interface IProps{
    imageSource:string
}

const ImageRight = (props:IProps) => {
    return (
      <div className={styles.imageContainerRight}>
          <img width={"100%"} src={props.imageSource}/>
          <div className={styles.border}/>
      </div>
    )
  }

export default ImageRight