import ExpertiseElement from "./ExpertiseElement"
import styles from "./styles/Expertise.module.css"
import Tag from "./Tag"
import TagContainer from "./TagContainer"

interface IProps{
  activeTag:string,
  onHover:(id:string)=>void
  onLeave:()=>void
}

const Expertise = (props:IProps) => {
  return (
    <div className={styles.expertiseContainer}>
    <h2>Skills</h2>
    <div onMouseLeave={props.onLeave} className={styles.expertiseElementContainer}>
        <ExpertiseElement onHover={()=>{props.onHover("game")}} title="Game Development" text="3+ years professional development with game engines, mainly in the industrial sector with a focus on VR. As a hobbyist I have 10+ years experience.">
          <TagContainer>
            <Tag activeName={props.activeTag} tagName="Unity"/>
            <Tag activeName={props.activeTag} tagName="Unreal"/>
            <Tag activeName={props.activeTag} tagName="C#"/>
            <Tag activeName={props.activeTag} tagName="C++"/>
          </TagContainer>
        </ExpertiseElement>
        <ExpertiseElement onHover={()=>{props.onHover("web")}} title="Full Stack" text="2+ years as a senior in the full stack area. I specialise in the MERN stack.">
          <TagContainer>
            <Tag activeName={props.activeTag} tagName="JavaScript"/>
            <Tag activeName={props.activeTag} tagName="Python"/>
            <Tag activeName={props.activeTag} tagName="React"/>
            <Tag activeName={props.activeTag} tagName="MongoDB"/>
            <Tag activeName={props.activeTag} tagName="PHP"/>
            <Tag activeName={props.activeTag} tagName="MySQL"/>
          </TagContainer>
        </ExpertiseElement>
        <ExpertiseElement onHover={()=>{props.onHover("app")}} title="Desktop & Mobile Apps" text="2+ years making my web applications desktop and mobile compatible through Tauri in a professional working environment.">
          <TagContainer>
            <Tag activeName={props.activeTag} tagName="Electron"/>
            <Tag activeName={props.activeTag} tagName="Tauri"/>
            <Tag activeName={props.activeTag} tagName="Android Studio"/>
            <Tag activeName={props.activeTag} tagName="JavaScript"/>
            <Tag activeName={props.activeTag} tagName="Java"/>
            <Tag activeName={props.activeTag} tagName="xCode"/>
            <Tag activeName={props.activeTag} tagName="Swift"/>
          </TagContainer>
        </ExpertiseElement>
        <ExpertiseElement onHover={()=>{props.onHover("other")}} title="Other" text="I have additional professional working experience making Blender addons">
          <TagContainer>
            <Tag activeName={props.activeTag} tagName="Blender Addons"/>
            <Tag activeName={props.activeTag} tagName="Python"/>
          </TagContainer>
        </ExpertiseElement>
    </div>
    </div>
  )
}

export default Expertise