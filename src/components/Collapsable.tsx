import {useState} from 'react';

interface IProps{
    isCollapsed:boolean,
    children:any,
    title:string
}

const Collapsable = (props:IProps) => {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(props.isCollapsed);

  return (
    <div style={{width:"95%", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
        <div onClick={()=>setIsCollapsed(!isCollapsed)} style={{cursor:"pointer", width:"100%", backgroundColor:"var(--secondary-color)", height:"50px", gap:"0.5rem", borderRadius:isCollapsed?"15px":"15px 15px 0px 0px", padding:"10px", display:"flex", flexDirection:"row", justifyContent:"flex-start", alignItems:"center"}}>
            {!isCollapsed?<h3>↓ </h3>:<h3>→ </h3>}
            <h3>{props.title}</h3>
        </div>
        {isCollapsed?
            <></>
            :
            <div style={{width:"100%", padding:"10px", borderRadius:"0px 0px 15px 15px", borderStyle:"solid", borderWidth:"2px", borderColor:"var(--secondary-color)"}}>
                    {props.children}
            </div>
        }
    </div>
  )
}

export default Collapsable