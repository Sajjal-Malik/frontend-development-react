import React from 'react'

const ComponentOne = ({ countValue, onclickHandler }) => {

    const handleClick = () => onclickHandler();

    return (
        <div>
            <h2>{countValue}</h2>
            <button onClick={handleClick}>Increment</button>
        </div>
    )
}

export default ComponentOne
