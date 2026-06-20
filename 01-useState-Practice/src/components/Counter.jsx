import { useState } from "react";

function Counter() {

    const [count, setCount] = useState(0);

    return (
        <div className="container">
            <h1>Countrer Component</h1>
            <p>You clicked {count} times.</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
}

export default Counter;