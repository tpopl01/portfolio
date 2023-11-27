import { useMediaQuery } from "./hooks/useMediaQuery"
import styles from "./styles/Footer.module.css"

const Footer = () => {
  const matches = useMediaQuery("(max-width: 600px)");
  const seperator = matches?<></>:<p>|</p>
  return (
    <div className={styles.footer}>
        <a className={styles.footerLink} href="https://github.com/tpopl01">Github</a>
        {seperator}  
        <a className={styles.footerLink} href="mailto:timothypople@yahoo.co.uk">timothypople@yahoo.co.uk</a>
        {seperator}      
        <a className={styles.footerLink} href="https://www.linkedin.com/in/timothy-pople-54004a9a/?originalSubdomain=uk">LinkedIn</a>
    </div>
  )
}

export default Footer