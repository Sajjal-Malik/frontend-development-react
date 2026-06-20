import { useReducer, useState } from "react";
import { initialState, counterReducer } from "../counterReducer";

export const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  const [inputValue, setInputValue] = useState(0);

  const handleIncrement = () => dispatch({ type: "increment" });
  const handleDecrement = () => dispatch({ type: "decrement" });

  const handleIncrementByAmount = () => {
    dispatch({ type: "incrementByAmount", payload: +inputValue });
    setInputValue(0);
  };

  const handleDecrementByAmount = () => {
    dispatch({ type: "decrementByAmount", payload: -inputValue });
    setInputValue(0);
  };

  return (
    <div>
      <div>
        <h2>Count: {state.count}</h2>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>

      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleIncrementByAmount}>Increment Amount</button>
      <button onClick={handleDecrementByAmount}>Decrement Amoun</button>
    </div>
  );
};
