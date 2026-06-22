import './style.css';

import { useState } from 'react';

const Counter = () => {
    const [count, setCounter] = useState(0);

    const increment = () => setCounter(count + 1);
    const decrement = () => setCounter(count - 1);

    return (
        <div className='container'>
            <div>
                <h2 className='number'>{count}</h2>
            </div>
            <section className="btns-container">
                <button onClick={increment} className="btn">
                    +
                </button>
                <button onClick={decrement} className="btn">
                    -
                </button>
            </section>
        </div>
    )
}

export default Counter;
