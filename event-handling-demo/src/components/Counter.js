import React, {useState} from "react";
import CounterButton from "./CounterButton";

function Counter(){
    //State to store current count
    const [count, setCount] = useState(0);
    const [calculate, setCalculate] = useState(0);
    //event handler
    const handleIncrement = () => {
        setCount(prevCount => prevCount+1);
    }
    //event handler to decrease the count
    const handleDecrement = () => {
        setCount(prevCount => prevCount-1);
    }

    //event handler to reset count
    const handleReset = () => {
        setCount(0);
    }

    //Method 1: Functions that accepts different amounts
    const handleChangeBy = (amount) => {
        setCalculate(prevCount => prevCount+amount);
    }

    //Method 2: Higher-order function approach
    const createChangeHandler = (amount) => {
        return () => {
            setCalculate(prevCount => prevCount+amount);
        }
    }

    return(
        <>
            <div style={{textAlign:"center", padding:"20px"}}>
                <h2>Interactive Counter</h2>
                <div style={{fontSize:"2rem", margin:"20px"}}>
                    Count:{count}
                </div>
                <div>
                    <CounterButton onButtonClick={handleIncrement} color="Green">+ Increment</CounterButton>
                    <CounterButton onButtonClick={handleDecrement} color="red">- Decrement</CounterButton>
                    <CounterButton onButtonClick={handleReset} color="gray">Reset</CounterButton>
                    <CounterButton onButtonClick={()=>setCount(100)} color="purple">Set to 100</CounterButton>
                    <CounterButton onButtonClick={()=>setCount(prevCount=>prevCount*2)} color="orange">Double It</CounterButton>
                </div>
            </div>

            <div style={{textAlign:"center", padding:"20px"}}>
                <h2>Counter with Custom Amounts</h2>
                <div style={{fontSize:"2rem", margin:"20px", color: calculate < 0 ? 'red' : 'black'}}>
                    Count: {calculate}
                </div>
                <div>
                    <div>
                        <CounterButton onButtonClick={()=>handleChangeBy(1)} color="lightgreen">+1</CounterButton>
                        <CounterButton onButtonClick={()=>handleChangeBy(5)} color="green">+5</CounterButton>
                        <CounterButton onButtonClick={()=>handleChangeBy(10)} color="darkgreen">+10</CounterButton>
                    </div>
                    <div>
                        <CounterButton onButtonClick={()=>handleChangeBy(-1)} color="orange">-1</CounterButton>
                        <CounterButton onButtonClick={()=>handleChangeBy(-5)} color="red">-5</CounterButton>
                        <CounterButton onButtonClick={()=>handleChangeBy(-10)} color="darkred">-10</CounterButton>
                    </div>
                    <div>
                        <CounterButton onButtonClick={()=>setCalculate(0)} color="gray">Reset</CounterButton>
                        <CounterButton onButtonClick={createChangeHandler(25)} color="purple">+25 (HOF)</CounterButton>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Counter;