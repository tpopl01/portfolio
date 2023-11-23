import HalfWidthSplit from "./Layouts/HalfWidthSplit"


const Works = () => {
  return (
    <div style={{width:"100%"}}>
        <HalfWidthSplit 
            left={
                <p>Hi</p>
            }
            right={
                <p>Hey</p>
            }
        />
    </div>
  )
}

export default Works