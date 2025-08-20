import { useState } from "react";
import React from "react";
import "./Counter.css";
 
 function Counter() {

     const [count , setcount] = useState(0);
     const [incrementBy , setincrementBY] = useState(1);
     function increment(){
        setcount(count + incrementBy);
     }
     function decrement(){
         setcount(count - incrementBy);
     }
     function increaseIncrementBy(){
          setincrementBY(incrementBy + 1);
        }

        function decreaseIncreamentBy(){
            setincrementBY(incrementBy - 1);
        }

    
    return (
        <div className="counter-container ">
            <h2 className="counter-title">Counter</h2>
            <p className="counter-value">Current Count: {count}</p>
            <p>Increment/Decrement By: {incrementBy}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={increaseIncrementBy}>Increase Increment By</button>
            <button onClick={decreaseIncreamentBy}>Decrease Increment By</button>
            <button onClick={() => setcount(0)} className="reset-button">Reset</button>
        </div>
    )
 }

 export default Counter;