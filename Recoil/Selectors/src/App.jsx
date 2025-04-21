import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSetRecoilState,RecoilRoot, useRecoilValue } from 'recoil'
import { AtomCounter, AtomSelector } from './Store/atom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <RecoilRoot>
        <Counter></Counter>
        </RecoilRoot>
        
      </div>
    </>
  )
}

function Counter(){
  return(
    <div>
     
      <Counterr></Counterr>
      <Iseven></Iseven>
      <Button></Button>
    </div>
  )
}




function Iseven(){
  const IsEven = useRecoilValue(AtomSelector)
return(<div>
  {IsEven ? "even" :"odd "}
</div>

)
}
function Counterr(){
  const count = useRecoilValue(AtomCounter)
  return(
    <div>
      {count}
    </div>
  )
}


function Button (){
  const setCount = useSetRecoilState(AtomCounter)
  
  function Increase(){
   
    setCount(count => count+2)
  }

  function Decrease(){
   
    setCount(count => count-1)
  }
  return(<>
    <button onClick={Increase}>Increase</button>
    <button onClick={Decrease}>Increase</button>
  </>)
}

export default App
