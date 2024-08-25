import styles from "./styles/Tooltip.module.css"

interface IProps{
    title:string|JSX.Element,
    children:any
}

function TooltipPanel(props:IProps) {
    
  return (
    <div className={styles.tooltip}>
        <div className={styles.tooltipTitle}>
            <h3>{props.title}</h3>
        </div>
        <div className={styles.tooltipBody}>
            {props.children}
        </div>
    </div>
  )
}

export default TooltipPanel