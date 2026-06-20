import React, { useState, useEffect } from 'react'

const CounterEffect = () => {

    const [value, setValue] = useState(0);

    useEffect(() => {
        const changeTitle = () => {
            console.log("Update the value on every render.");
            document.title = `Count: ${value}`;
        }
        changeTitle()
    }, [value]);

    function handleChange() {
        setValue(prevValue => prevValue + 1);
    }

    return (
        <div>
            <h1>Counter Component Start Here</h1>
            <h1>{value}</h1>
            <button onClick={handleChange}>Update Value</button>
            <h2>=================================</h2>
        </div>
    )
}

export default CounterEffect
