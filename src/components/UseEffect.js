import React, { useState } from "react";

export default function UseEffect(){

    const[count,setCount]=useState(0);


    React.useEffect(function(){
        console.log("use effect executed");
    },[count])

    return(

        <>
            <div>
                <h1>the count is {count}</h1>
                <button onClick={()=>setCount(prevCount =>prevCount+1)}>Add</button>
            </div>
        
        </>
    )
}   