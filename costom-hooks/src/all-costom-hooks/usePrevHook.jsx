import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

function usePrevHook (value){
    const ref = useRef()

    useEffect(function(){
     ref.current = value
    },[value])
   
    return ref.current

}


export default usePrevHook;