import { useEffect, useState } from 'react'

function useIsContextLost(canvas:any) {
    const [isLost, setIsLost] = useState(false)


    useEffect(()=>{
        if(canvas && canvas.current){
            canvas.current.addEventListener("webglcontextlost", function(event:any) {
                event.preventDefault();
                setIsLost(true);
            }, false);
        }
        return () => {
            if(canvas && canvas.current){
                canvas.current.removeEventListener("webglcontextlost", function(event:any) {
                    event.preventDefault();
                    setIsLost(true);
                }, false);
            }
        }
    }, [canvas])

  return isLost
}

export default useIsContextLost