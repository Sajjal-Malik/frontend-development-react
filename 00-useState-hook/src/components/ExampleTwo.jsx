import React, { useState } from 'react'

const ExampleTwo = () => {

    const [randomNumber, setRandomNumber] = useState(() => {
        return Math.floor(Math.random() * 100);
    })

    const handleGenerateRandom = () => {
        const newRandomNumber = Math.floor(Math.random() * 1000);
        setRandomNumber(newRandomNumber);
    }

    return (
        <div>
            <h1>{randomNumber}</h1>
            <button onClick={handleGenerateRandom}>Generate New Random Number</button>
        </div>
    )
}

export default ExampleTwo
