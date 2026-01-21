import React from "react";

function CounterButton({onButtonClick, children, color="blue"}){
    return(
        <button onClick={onButtonClick} style={{backgroundColor:color, color:'white', border:'none', padding:'10px 15px', margin:'5px', borderRadius:"5px", cursor:"pointer", fontWeight:"bold"}}>{children}</button>
    )
}

export default CounterButton;