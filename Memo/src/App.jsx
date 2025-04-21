import { useEffect, useState,memo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    <>
      <Counter></Counter>
      
    </>
  )
}


function Counter(){

  
  

  return<>
  <div>
    <Cont></Cont>
    <Increase></Increase>
    <MemoIncrease></MemoIncrease>
  </div>
  </>
}

const Cont=memo(function( ){
  const [count,setCount] = useState(0)
  useEffect(function(){
    setInterval(function(){
      setCount(count=>count+1)
    },2000)
  },[])

  return(
    <div>
      {count}
    </div>
  )
})


const MemoIncrease=memo(function Decrease(){
  
  return(
    <div>
      hey

    </div>
  )
})

const Increase=memo(function(){
  return(
    <div>
      hello i am nikhil whats your name 
      
    </div>
  )
})
export default App
