import { useState } from "react"




export function Login (){
    const [changeColor,setColor]=useState("red")
      
    function Color1(){
        setColor("red")
    }

    function Color2(){
        setColor("green")
    }

    
return (
    <div>
       <button
        style={changeColor==="red"?{color:"red"}:null}onClick={Color1}>
            hey
            </button>

        <button style= {changeColor==="green"?{color:"red"}:null} onClick={Color2}>
            hello
            </button>
    </div>
)
}