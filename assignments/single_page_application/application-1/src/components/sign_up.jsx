import { useNavigate } from "react-router-dom"
import { Login } from "./login"
import { Home } from "../App"
import { useEffect } from "react"


export function SignUp(){
    const navigate = useNavigate()


       
        useEffect( function(){
            const cleanInterval=setInterval(() => {
            navigate("/")
        }, 5000)
    return ()=>{clearInterval(cleanInterval)}
    })
    


    return<>
     <div>
        
        hi there
     </div>
    </>
}