import React, { useState } from 'react'

const ExampleOne = () => {

    const [value, setValue] = useState(() => {
        const initialValue = 0;
        return initialValue;
    });

    function handleClick() {
        setValue((prev) => prev + 1);
    }

    return (
        <div>
            <h1>Count: {value}</h1>
            <button onClick={handleClick}>Increment</button>
        </div>
    )
}

export default ExampleOne
