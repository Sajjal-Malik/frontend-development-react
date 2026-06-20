import React, { useEffect } from 'react'

const BasicEffect = () => {

    useEffect(() => {
        console.log("This message will be logged on first mount only!")
    }, []);

    return (
        <div>
            <h1>Hello from BasicEffect Component</h1>
            <h2>=================================</h2>
        </div>
    )
}

export default BasicEffect
