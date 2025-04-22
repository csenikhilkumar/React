import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot,atomFamily, useRecoilValue, useSetRecoilState } from 'recoil'
import { atomParivar } from './Store/atom'

function App() {


  return (
    <>
      <RecoilRoot>
        <Updater id={2}></Updater>
      <Todo id={1}></Todo>
      <Todo id={2}></Todo>
      </RecoilRoot>
     
    </>
  )
}

function Updater({id}){
  const setAtomParivar = useSetRecoilState(atomParivar(id))
  useEffect(()=>{
    setInterval(()=>setAtomParivar({
      id:2,
      name:"bhai",
      lastName:"bhai"
    }),5000)
  },[])
}


function Todo ({id}){
  const AtomFamily = useRecoilValue(atomParivar(id))

  return(
    <div>
      {AtomFamily.name}
      <br />
      <br />
      {AtomFamily.lastName}
    </div>
  )
}

export default App
