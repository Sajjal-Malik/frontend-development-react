import React, { useState } from "react";

import { MyContext } from "./MyContext";

interface MyProviderProps {
    children: React.ReactNode
}

export const MyProvider: React.FC<MyProviderProps> = ({ children }) => {
    const [count, setCount] = useState<number>(0);

    const increment = () => setCount((prev) => prev + 1);
    const decrement = () => setCount((prev) => prev - 1);

    return (
        <MyContext.Provider value={{ count, increment, decrement }}>
            {children}
        </MyContext.Provider>
    );
};
