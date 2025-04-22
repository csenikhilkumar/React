import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {RecoilRoot, useRecoilValue}  from "recoil"
import './App.css'
import { MassegeAtom, NotifictionCount, ProfileAtom } from './store/atom'

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
  const Me = useRecoilValue(ProfileAtom)
  return(<>
  
  <Notification></Notification>
  <Masseging></Masseging>
  <button>Me({Me})</button>
 
  </>
    
  )
}


function Notification(){
  const Notification= useRecoilValue(NotifictionCount)
  return( 
    <button>Notification({Notification})</button>
  )
}


function Masseging(){
  const Message = useRecoilValue(MassegeAtom)
return(
  <button>Messages({Message})</button>
)
}


export default App
