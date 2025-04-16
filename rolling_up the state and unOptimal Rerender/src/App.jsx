import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(true)

  return (
    <>
     <Home></Home>
    </>
  )
}



// function Home({count,setCount}){
//   return <>
//   <LightOn count={count}></LightOn>
//   <ToggleFuntionality setCount={setCount} count={count}></ToggleFuntionality>
//   </>
// }


// function LightOn({count}){
//   return <div> 
//     {(count)?"bulb is On":"bulb is off"}
//   </div>
// }




// function ToggleFuntionality( {setCount,count}){


//   function  OnOff(){
//     setCount(!count)
//   }
//   return<>
//   <button onClick={OnOff}> button</button></>

// }





function Home(){
  const [count, setCount] = useState(true)  // in case many child components needs to accese same variable , in this case the veriable is define in the subparent component, is it called rolling up state
  return <>
  <LightOn count={count}></LightOn>
  <ToggleFuntionality setCount={setCount} count={count}></ToggleFuntionality>
  </>
}


function LightOn({count}){
  return <div> 
    {(count)?"bulb is On":"bulb is off"}
  </div>
}




function ToggleFuntionality( {setCount,count}){


  function  OnOff(){
    setCount(!count)
  }
  return<>
  <button onClick={OnOff}> button</button></>

}

export default App
