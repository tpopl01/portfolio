import styles from "./styles/Timeline.module.css"
import TimelineElement from "./TimelineElement"
import TimelineLeftElement from "./TimelineLeftElement"
import TimelineRightElement from "./TimelineRightElement"

const Timeline = () => {
  return (
    <>
    <div style={{width:"100%", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
        <div style={{borderRadius:"15px", backgroundColor:"var(--secondary-color)", padding:"5px 20px", minWidth:"50%"}}>
            <h2>Job Roles</h2>
        </div>
    </div>
    <div className={styles.timeline}>
        <TimelineLeftElement>
            <TimelineElement title="2017-2020" text="Goldsmiths University"/>
        </TimelineLeftElement>
        <TimelineRightElement>
            <TimelineElement title="2020" text="Web Developer for Salway Preschool"/>
        </TimelineRightElement>
        <TimelineLeftElement>
            <TimelineElement title="2021" text="Virtual Arts Internship"/>
        </TimelineLeftElement>
        <TimelineRightElement>
            <TimelineElement title="2022" text="Virtual Arts Software Engineer"/>
        </TimelineRightElement>
        <TimelineLeftElement>
            <TimelineElement title="2022 - Present" text="Virtual Arts Senior Software Engineer"/>
        </TimelineLeftElement>
    </div>
    </>
  )
}

export default Timeline