import { MyContext } from "./context/MyContext";
import { useContext } from "react";

export default function CounterComponent() {
    const { count, increment, decrement } = useContext(MyContext);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    );
}
