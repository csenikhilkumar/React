import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { jobsCounter, messagingCounter, NetworkCounter, NotificationCounter } from './store/atom'

function App() {
  


  return (
    <>
     
    <RecoilRoot>
      <Counter></Counter>
    </RecoilRoot>
     
    
    </>
  )
}

function Counter (){
  return(
    <>
    <button>Home</button>
      <Notification></Notification>
      <Jobs></Jobs>
      <Network></Network>
      <Masseging></Masseging>
      <button>Me</button>
    </>
  )
}


function Notification (){
  const Notification = useRecoilValue(NotificationCounter)
  return(<>
  <button>Notification({ Notification >= 99 ? "99+" :Notification})</button>
  </>)

}

function Jobs(){
  const jobs = useRecoilValue(jobsCounter)
  return(
  <button>jobs ({jobs>=99 ? "99+" :jobs})</button>
  )
}

function Network(){
  const NetworkTab = useRecoilValue(NetworkCounter)
  return(
<button>network ({NetworkTab>=99 ? "99+" : NetworkTab})</button>
  )
}

function Masseging(){
  const Massage = useRecoilValue(messagingCounter)
  return(
  <button>messaging({Massage>=99?"99+":Massage})</button>
)}

export default App
