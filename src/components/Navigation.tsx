import NavigationElement from "./NavigationElement"

const Navigation = () => {
  return (
    <div style={{width:"100%", backgroundColor:"var(--secondary-color)", position:"fixed", zIndex:201}}>
        <div style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", gap:"1rem"}}>
            <NavigationElement id="#home" text="Home"/>
            <NavigationElement id="#skill" text="Skills"/>
            <NavigationElement id="#work" text="Experience"/>
            {/* <NavigationElement id="#footer" text="Contact"/> */}
        </div>
    </div>
  )
}

export default Navigation