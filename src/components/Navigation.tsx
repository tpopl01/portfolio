import NavigationElement from "./NavigationElement"

const Navigation = () => {
  return (
    <div style={{width:"100%", backgroundColor:"var(--secondary-color)", position:"fixed", zIndex:200}}>
        <div style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", gap:"1rem"}}>
            <NavigationElement text="Home"/>
            <NavigationElement text="Skills"/>
            <NavigationElement text="Projects"/>
            <NavigationElement text="Experience"/>
            <NavigationElement text="Contact"/>
        </div>
    </div>
  )
}

export default Navigation