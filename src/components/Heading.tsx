import styles from "./styles/Heading.module.css"
import { useHover } from "./hooks/useHover"
import { useRef } from "react"
import TAnimation from "./three/TAnimation";
import LinkedIn from "./icons/LinkedIn";
import Github from "./icons/Github";
import Email from "./icons/Email";


const Heading = () => {
  const ref = useRef(null)
  const isHeadingHovered = useHover(ref); 

  return (
    <div className={styles.headingContainer}>
    <TAnimation moveToEnd={isHeadingHovered}/>
    <div className={styles.textContainer}>
      <div className={styles.container} ref={ref}>
        <h1>Timothy Pople</h1>
        <p className={styles.subText}>Software Engineer, Full Stack & Games Developer</p>
        <div className={styles.iconContainer}>
            <a href="https://www.linkedin.com/in/timothy-p-54004a9a/?originalSubdomain=uk" className={styles.icon}>
              <LinkedIn/>
            </a>
            <a href="mailto:timothypople@yahoo.co.uk" className={styles.icon}>
              <Email/>
            </a>
            <a href="https://github.com/tpopl01" className={styles.icon}>
              <Github/>
            </a>
        </div>
      </div>
    </div>
    </div>
  )
}


export default Heading