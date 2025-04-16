import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [nk,setNk]=useState(0)
  
  
  function Increase(){
    setCount(count=>count+1)
  }
    

  return (
    <>
     <Counter count={count} ></Counter>
     <button onClick={Increase}>incraese count </button>
    </>
  )
}



function Counter({count,nk}){
 

 

  useEffect( function(){
     console.log("mount");

    return function(){  // why cleanup is important imagine you have a e-commrce website and you are present on home page then you are going to home page to electronics page so we have need first disconnect the connection of home page and clean the home pages process then connect to the electronics page 
      // basically useeffect hook is handle the side effects of any intervale and any process and nake a preformative app .
      console.log("unmount"); 
    }
    
  }, [])

  useEffect(function(){
    console.log("m nikhil") 
  },[count])
  return(
    <div>
      counter {count} {nk}
    </div>
  )
}reacape_the_any_hooks

export default App
