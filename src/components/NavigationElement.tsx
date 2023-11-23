interface IProps{
    text:string
}

const NavigationElement = (props:IProps) => {
  return (
    <div style={{padding:"5px 20px", cursor:"pointer"}}>
        <p style={{color:"var(--heading-color)"}}>{props.text}</p>
    </div>
  )
}

export default NavigationElement