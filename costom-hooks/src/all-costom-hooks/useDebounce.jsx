import { useRef } from "react"
import { useEffect } from "react"



function useDebounce (fn){
   
    const currentClock  = useRef()

    
     const Fun = ()=>{
        clearInterval(currentClock.current)
        currentClock.current = setTimeout(fn,200)
     }

     
     return Fun
}





export default useDebounce