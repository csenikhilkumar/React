import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProfileCard from './assets/components/ProfileCard'

function App() {
  const [count, setCount] = useState(0)

  return <div>
      <ProfileCard></ProfileCard>
    </div>
    
  
}

export default App
