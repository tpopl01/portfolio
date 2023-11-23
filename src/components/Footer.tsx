

const Footer = () => {
  return (
    <div style={{height:"100px", width:"100%", display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center", gap:"2rem", backgroundColor:"var(--secondary-color)"}}>
        <a style={{color:"var(--heading-color)"}} href="mailto:timothypople@yahoo.co.uk">Github</a>
        <p>|</p>  
        <a style={{color:"var(--heading-color)"}} href="mailto:timothypople@yahoo.co.uk">timothypople@yahoo.co.uk</a>
        <p>|</p>    
        <a style={{color:"var(--heading-color)"}} href="mailto:timothypople@yahoo.co.uk">LinkedIn</a>
    </div>
  )
}

export default Footer