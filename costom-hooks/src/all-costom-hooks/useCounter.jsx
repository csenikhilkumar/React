import { useState } from "react"

function useCount(){
    const [count,setCount]= useState(0)
    function IncreaseCount(){
      setCount(count+1)
    }
    
    return{count:count,
      IncreaseCount:IncreaseCount
    }
  }


function Counter(){
    const{count,IncreaseCount}=useCount()
  
    return (
      <>
       <div>
        <button onClick={IncreaseCount}>increase {count}</button>
       </div>
      </>
    )
  }


  export default Counter;