import ExpertiseElement from "./ExpertiseElement";
import styles from "./styles/Expertise.module.css";
import Tag from "./Tag";
import TagContainer from "./TagContainer";
import {useState} from "react";

interface IProps{
  activeTag:string,
  onHover:(id:string)=>void,
  onLeave:()=>void
}

const Expertise = (props:IProps) => {
  const [hoveredId, setHoveredId] = useState<string>("");
  const isHoveringGame = hoveredId==="game";
  const isHoveringWeb = hoveredId==="web";
  const isHoveringApp = hoveredId==="app";
  const isHoveringOther = hoveredId==="other";

  function SetHover(id:string)
  {
    props.onHover(id);
    setHoveredId(id);
  }

  function ClearHover()
  {
    setHoveredId("");
  }

  return (
    <div className={styles.expertiseContainer}>
    <h2>Skills</h2>
    <div onMouseLeave={props.onLeave} className={styles.expertiseElementContainer}>
        <ExpertiseElement onHover={()=>{SetHover("game")}} onLeave={ClearHover} title="Game Development" text="3+ years professional development with game engines, mainly in the industrial sector with a focus on VR. As a hobbyist I have 10+ years experience.">
          <TagContainer>
            <Tag clearTheme={isHoveringGame} activeName={props.activeTag} tagName="Unity"/>
            <Tag clearTheme={isHoveringGame} activeName={props.activeTag} tagName="Unreal"/>
            <Tag clearTheme={isHoveringGame} activeName={props.activeTag} tagName="C#"/>
            <Tag clearTheme={isHoveringGame} activeName={props.activeTag} tagName="C++"/>
          </TagContainer>
        </ExpertiseElement>
        <ExpertiseElement onHover={()=>{SetHover("web")}} onLeave={ClearHover} title="Full Stack" text="2+ years as a senior in the full stack area. I specialise in the MERN stack.">
          <TagContainer>
            <Tag clearTheme={isHoveringWeb} activeName={props.activeTag} tagName="JavaScript"/>
            <Tag clearTheme={isHoveringWeb} activeName={props.activeTag} tagName="Python"/>
            <Tag clearTheme={isHoveringWeb} activeName={props.activeTag} tagName="React"/>
            <Tag clearTheme={isHoveringWeb} activeName={props.activeTag} tagName="MongoDB"/>
            <Tag clearTheme={isHoveringWeb} activeName={props.activeTag} tagName="PHP"/>
            <Tag clearTheme={isHoveringWeb} activeName={props.activeTag} tagName="MySQL"/>
          </TagContainer>
        </ExpertiseElement>
        <ExpertiseElement onHover={()=>{SetHover("app")}} onLeave={ClearHover} title="Desktop & Mobile Apps" text="2+ professional years making web applications desktop and mobile compatible through Tauri in a professional working environment.">
          <TagContainer>
            <Tag clearTheme={isHoveringApp} activeName={props.activeTag} tagName="Electron"/>
            <Tag clearTheme={isHoveringApp} activeName={props.activeTag} tagName="Tauri"/>
            <Tag clearTheme={isHoveringApp} activeName={props.activeTag} tagName="Android Studio"/>
            <Tag clearTheme={isHoveringApp} activeName={props.activeTag} tagName="JavaScript"/>
            <Tag clearTheme={isHoveringApp} activeName={props.activeTag} tagName="Java"/>
            <Tag clearTheme={isHoveringApp} activeName={props.activeTag} tagName="xCode"/>
            <Tag clearTheme={isHoveringApp} activeName={props.activeTag} tagName="Swift"/>
          </TagContainer>
        </ExpertiseElement>
        <ExpertiseElement onHover={()=>{SetHover("other")}} onLeave={ClearHover} title="Other" text="I have additional professional working experience making Blender addons">
          <TagContainer>
            <Tag clearTheme={isHoveringOther} activeName={props.activeTag} tagName="Blender Addons"/>
            <Tag clearTheme={isHoveringOther} activeName={props.activeTag} tagName="Python"/>
          </TagContainer>
        </ExpertiseElement>
    </div>
    </div>
  )
}

export default Expertise