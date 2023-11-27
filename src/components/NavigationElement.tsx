interface IProps{
    text:string,
    id:string
}

const NavigationElement = (props:IProps) => {
  return (
    <div style={{padding:"20px 20px", cursor:"pointer"}}>
        <a href={props.id}>{props.text}</a>
    </div>
  )
}

export default NavigationElement