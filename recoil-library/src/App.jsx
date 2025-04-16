import React from "react"; 
import './App.css'
import {RecoilRoot, useRecoilValue, useSetRecoilState} from "recoil"
import { counterAtom } from './store/atom'
import { Memo } from "./MEMO_API/memo";

function App() {

  return (
    <>
      <RecoilRoot>
        <Counter></Counter>
      </RecoilRoot>
    </>
  )
}

function Counter(){
  return(
    <div>
      <CurrentCount/>
      <Increase></Increase>
      <Decrease></Decrease>
      <Memo></Memo>
    </div>
  )
}


function CurrentCount(){
  const count = useRecoilValue(counterAtom);
  return <div>{count}</div>;
}



function Increase(){

const setCount = useSetRecoilState(counterAtom)
  function IncreaseCount(){
     setCount(count => count+1)
  }
  return(
    <div>
      <button onClick={IncreaseCount}>Decrease</button>
    </div>
  )
}

function Decrease (){
  const setCount  = useSetRecoilState(counterAtom)

  function DecreaseCounter(){
    setCount(count =>count-1)
  }



  return (
    <div>
      <button onClick={DecreaseCounter}>Decrease</button>
    </div>
  )
}


export default App
