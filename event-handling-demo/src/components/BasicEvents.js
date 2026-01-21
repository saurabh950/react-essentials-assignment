import React from "react";

function BasicEvents(){
    const handleClick = () => {
        alert('Button was clicked!');
    }

    const handleMouseEnter = () => {
        console.log('Mouse entered the button!');
    }

    const handleMouseLeave = () => {
        console.log('Mouse left the button!');
    }

    const handleInputChange = (event) => {
        console.log('Input Value: ', event.target.value);
    }

    return(
        <div>
            <h2>Multiple Events Types</h2>
            <button onClick={handleClick}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    >Hover & Click Me!</button>
            <br/>
            <input type="text" onChange={handleInputChange} placeholder="Type Something and watch consol.."/>
        </div>
    )
}

export default BasicEvents;