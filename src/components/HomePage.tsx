import LayoutCentered from './Layouts/LayoutCentered'
import Heading from './Heading'
import Navigation from './Navigation'
import Tools from './Tools'
import Expertise from './Expertise'
import Works from './Works'
import Footer from './Footer'
import { useState } from 'react'
import InfiniteRunner from './three/InfiniteRunner'
import BlenderSim from './three/BlenderSim'
import { useMediaQuery } from './hooks/useMediaQuery'

const HomePage = () => {
    const [hoveredTool, setHoveredTool] = useState<string>("");
    const [expertiseName, setExpertiseName] = useState<string>("");
    const isCustomBackground = expertiseName==="game"||expertiseName==="other"
    const matches = useMediaQuery("(max-width: 600px)")
    
  return (
    <>
        {matches?<></>:<Navigation/>}
        <section id="home">
        <LayoutCentered>
            <Heading/>
        </LayoutCentered>
        </section>
        <section id="skill">
        <LayoutCentered>
            <div style={{position:"relative", width:"100%", minHeight:"100vh", height:"100%", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
                <div style={{position:"absolute", zIndex:199, left:"0px", top:"0px", bottom:"0px", right:"0px", backgroundColor:(isCustomBackground)?"transparent":"var(--primary-color)", transition:"all 1s"}}/>
                <div style={{zIndex:200, transition:"all 1s", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", height:"100%", width:"100%"}}>
                    <Expertise onLeave={()=>setExpertiseName("")} onHover={setExpertiseName} activeTag={hoveredTool}/>
                    <Tools onHover={setHoveredTool}/>
                </div>
                {matches?<></>:<>
                    <div style={{position:"absolute", zIndex:0, left:"0px", top:"0px", bottom:"0px", right:"0px", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
                        <InfiniteRunner isHidden={expertiseName!=="game"}/>
                    </div>
                    <div style={{position:"absolute", zIndex:0, left:"0px", top:"0px", bottom:"0px", right:"0px", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
                        <BlenderSim isHidden={expertiseName!=="other"}/>
                    </div></>
                }
            </div>
        </LayoutCentered>
        </section>
        <section id="work">
        <LayoutCentered>
            <Works/>
            <br/>
        </LayoutCentered>
        <Footer/>
        </section>
    </>
  )
}

export default HomePage