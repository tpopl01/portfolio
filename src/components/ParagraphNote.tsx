interface IProps{
    title:string,
    description:string
}

const ParagraphNote = (props:IProps) => {
  return (
    <p><b>{props.title}</b> {props.description}</p>
  )
}

export default ParagraphNote