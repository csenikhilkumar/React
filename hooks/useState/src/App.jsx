import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { State } from './components/useState'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <State/>
      <State/>
      <State/>
    </div>
  )
}

export default App
