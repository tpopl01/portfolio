import ExpertiseElement from "./ExpertiseElement"

const Expertise = () => {
  return (
    <div style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
        <ExpertiseElement text="Game Development"/>
        <ExpertiseElement text="Full Stack"/>
        <ExpertiseElement text="Desktop & Mobile Apps"/>
    </div>
  )
}

export default Expertise