interface IProps{
    text:string,
    id:string
}

const NavigationElement = (props:IProps) => {
  return (
    <a href={props.id}>
      <div style={{padding:"20px 20px", cursor:"pointer"}}>
          {props.text}
      </div>
    </a>
  )
}

export default NavigationElement