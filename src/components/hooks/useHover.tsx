import { RefObject, useEffect, useState } from 'react'

export function useHover<T extends HTMLElement = HTMLElement>(elementRef: RefObject<T>): boolean {
  const [value, setValue] = useState<boolean>(false)

  const handleMouseEnter = () => setValue(true)
  const handleMouseLeave = () => setValue(false)

    
    useEffect(()=>{
        if(elementRef.current){
            elementRef.current.addEventListener('mouseenter', function() {
                handleMouseEnter()
            });
            elementRef.current.addEventListener('mouseleave', function() {
                handleMouseLeave()
            });
        }
        
        return () => {
            if(elementRef&&elementRef.current){
                elementRef.current.removeEventListener('mouseenter', function() {
                    handleMouseEnter()
                });
                elementRef.current.removeEventListener('mouseleave', function() {
                    handleMouseLeave()
                });
            }
        }
    },[]);

  return value
}