import { useState } from "react"
export function State(){
    const [count,setCount]=useState(0)
    
   function IncreseCounter(){
    return setCount(count+1)
   }
    return(<div>
        <button onClick={IncreseCounter}>increaseCounter</button>
        <div>{(count>=9)?"99+":count}</div>
    </div>)
}