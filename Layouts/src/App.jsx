import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Login } from './Components/Login'
import {BrowserRouter,Route,Routes,Outlet,Link} from "react-router-dom"
import { SignUp } from './Components/signUp'

function App() {
  const [count, setCount] = useState(0)

  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/SignUp" element={<SignUp/>}></Route> 
      </Route>
     
    </Routes>
    
    </BrowserRouter>
  )
}


function Layout(){
  return <div style={{height:"100vh"}}>
    <header style={{height:"10vh"}}>
       <Link to="/SignUp">SignUp</Link>
       |
       <Link to="/Login">Login</Link>
    </header>
    <div style={{height:"80vh",background:"red"}}>
    <Outlet/>
    </div>
    
    <footer style={{height:"10vh"}}>
      footer  |   Contact us
    </footer>
  </div>
}
export default App
