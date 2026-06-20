import React, { useEffect, useState } from 'react'

const ExampleThree = () => {

    const [name, setName] = useState(() => {
        const localName = localStorage.getItem('Default Name');
        return localName ? JSON.parse(localName) : "";
    });

    useEffect(() => {
        localStorage.setItem("Default Name", JSON.stringify(name));
    }, [name]);

    const handleChange = (event) => {
        setName(event.target.value);
    }

    const handleClear = () => { setName("") }

    return (
        <div>
            <h1>Name: {name}</h1>
            <input type='text' value={name} onChange={handleChange} placeholder='Enter your name...' />
            <button onClick={handleClear}>Clear Input</button>
        </div>
    )
}

export default ExampleThree
