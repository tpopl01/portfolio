import LayoutCentered from './Layouts/LayoutCentered'
import Heading from './Heading'
import Navigation from './Navigation'
import Tools from './Tools'
import Timeline from './Timeline'
import Expertise from './Expertise'
import Works from './Works'
import Footer from './Footer'

const HomePage = () => {
  return (
    <>
        <Navigation/>
        <LayoutCentered>
            <Heading/>
        </LayoutCentered>
        <LayoutCentered>
            <Tools/>
        </LayoutCentered>
        <LayoutCentered>
            <Expertise/>
        </LayoutCentered>
        <LayoutCentered>
            <Timeline/>
        </LayoutCentered>
        <LayoutCentered>
            <Works/>
        </LayoutCentered>
        <Footer/>
    </>
  )
}

export default HomePage