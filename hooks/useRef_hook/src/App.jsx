import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const inputeRef = useRef()


   function onfocus(){
    inputeRef.current.focus()
   }

  return (
    <>
     <div style={{display:"flex" ,justifyContent:"center",padding:20}}>
      <div style={{background: "#8aef1f", borderRadius:10, boxShadow:"-5px 9px 100px 14px rgba(0,0,0,0.75)"}}>
      <div >
        <div style={{display:"flex",justifyContent:"center",fontSize:20}}>signUP</div>
         
       </div>
       <div style={{padding:10}} >
        <input type="text" placeholder="enter name " ref={inputeRef} />
        
       </div>
       <div style={{padding:10}}>
       <input type="text" placeholder="enter password"/>
       </div>
       <div style={{display:"flex",justifyContent:"center", padding:10}}>
        <button onClick={onfocus}>
          submit
        </button>
       </div>
      </div>
       
     </div>
    </>
  );
}

export default App;
