import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Route,Routes,Link,useNavigate} from "react-router-dom"
import {Login} from "../src/components/login"
import { SignUp } from './components/sign_up'

function App() {
  const [count, setCount] = useState(0)

  
  return (
    <>
      <BrowserRouter>
      <Link to="login/">login</Link>
      |
      <Link to="/signUp">signUp</Link>
      <Routes>
        <Route path='login/' element={<Login/>}></Route>
        <Route path="signUp/" element={<SignUp/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path='*' element={<Error/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

 export function Home (){
  return <div>
    hello guys
  </div>
 }


 function Error(){
 return <div>
  "contenet not found"
 </div>
 }
export default App
