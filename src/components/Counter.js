import React from "react";
import "../styles/Counter.css"
function Counter(){

    const [count,setCount]=React.useState(0);

    function add(){
        setCount(count+1);
    }

    function sub(){
        setCount(count-1);
    }

    function reset(){
        setCount(0);
    }

    return(
        <div className="counter">
            <button className="counter--minus" onClick={sub}>-</button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button className="counter--plus" onClick={add}>+</button>    
            <button onClick={reset}>0</button>

        </div>  
    )
}

export default Counter;