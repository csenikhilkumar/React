import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [isVisible, setVisible] = useState(false)
  console.log(isVisible)
  function ToggleIsVisble(){
    setVisible(!isVisible)
  }

  return (
    
    <div>
     <div> 
     <button onClick={ToggleIsVisble}>{isVisible?"hide":"visible"}{isVisible}</button>
     <div>{isVisible?"i am hide":"i am visible"}</div>
     
     </div>
    </div>
  )
  
}

export default App



