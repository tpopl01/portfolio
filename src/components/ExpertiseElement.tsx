interface IProps{
    text:string
}

const ExpertiseElement = (props:IProps) => {
  return (
    <div style={{minWidth:"100px"}}>{props.text}</div>
  )
}

export default ExpertiseElement