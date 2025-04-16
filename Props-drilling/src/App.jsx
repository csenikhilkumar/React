import { createContext, useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const bulbContext =createContext();  // first i will create context using createcontext for props drilling


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//     <bulbContext.Provider value={{  // second wrap the parent component into the same name of the variable where i the variable is defined like bulbContext, and provide values whos send to the child components .
//       count:count,
//       setCount:setCount
//     }}>
//     <Home></Home>
//     </bulbContext.Provider>
     
//     </>
//   )
// }

// function Home(){
//   return <>
//   <LightOn></LightOn>
//   <ToggleFuntionality></ToggleFuntionality>
//   </>
// }


// function LightOn(){
//   const {count} = useContext(bulbContext)  // extract the value of props into the bulbContext using useContext hook ,like count
//   return <div> 
//     {(count)?"bulb is On":"bulb is off"}
//   </div>
// }




// function ToggleFuntionality(){
// const {count,setCount}=useContext(bulbContext)

//   function  OnOff(){
//     setCount(!count)
//   }
//   return<>
//   <button onClick={OnOff}> button</button></>

// }


   //second way to defined provider component



   function BulbProvider({children}){
    const [count, setCount] = useState(true)
    return<>
  
    <bulbContext.Provider value={{  // second wrap the parent component into the same name of the variable where i the variable is defined like bulbContext, and provide values whos send to the child components .
      count:count,
      setCount:setCount
    }}>
      {children}
    </bulbContext.Provider>
    </>
  
    
  }


function App() {

  return (
    <>
    <BulbProvider>
    <Home></Home>
    </BulbProvider>
     
    </>
  )
}




function Home(){
  return <>
  <LightOn></LightOn>
  <ToggleFuntionality></ToggleFuntionality>
  </>
}


function LightOn(){
  const {count} = useContext(bulbContext)  // extract the value of props into the bulbContext using useContext hook ,like count
  return <div> 
    {(count)?"bulb is On":"bulb is off"}
  </div>
}




function ToggleFuntionality(){
const {count,setCount}=useContext(bulbContext)

  function  OnOff(){
    setCount(!count)
  }
  return<>
  <button onClick={OnOff}> button</button></>


}


export default App
