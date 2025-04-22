import { useEffect, useState } from 'react'
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil"
import './App.css'
import { AllItems, SumOfItems } from './Store/Atom'
import axios from "axios"

function App() {
  return (
    <RecoilRoot>
      <Counter />
    </RecoilRoot>
  )
}

function Counter() {
  const setAllItem = useSetRecoilState(AllItems)
  const allItem = useRecoilValue(AllItems)
  const sumOfItems = useRecoilValue(SumOfItems)

  return (
    <>
      <button>Notification ({allItem.userId || 0})</button>
      <button>Message ({allItem.id || 0})</button>
      <button>Me ({sumOfItems || 0})</button>
    </>
  )
}

export default App

