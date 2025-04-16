import React, { useEffect, useState ,memo} from "react";






export function Memo(){
    return(
        <div>
            <MemoIzed></MemoIzed>
            <Vivo></Vivo>
        </div>
    )
}


const MemoIzed  = memo(function(){
    const [count,setCount]=useState(0)

    useEffect(()=>{
        setInterval(() => {
            setCount(count => count+1)
        },3000);
    },[])
    return(
        <div>
            1
        </div>
    )
})


function Vivo(){
    return(
        <div>
            <button>Increase</button>
        </div>
    )
}