import React from 'react'

const ComponentTwo = (props) => {

    function handleClick() {
        props.onclickHandler();
    }

    return (
        <div>
            <h2>{props.countValue}</h2>
            <button onClick={handleClick}>Decrement</button>
        </div>
    )
}

export default ComponentTwo
