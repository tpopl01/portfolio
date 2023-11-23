import styles from "./Timeline.module.css"
import TimelineElement from "./TimelineElement"
import TimelineLeftElement from "./TimelineLeftElement"
import TimelineRightElement from "./TimelineRightElement"

const Timeline = () => {
  return (
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
            <TimelineElement title="2021" text="Virtual Arts Senior Software Engineer"/>
        </TimelineLeftElement>
    </div>
  )
}

export default Timeline