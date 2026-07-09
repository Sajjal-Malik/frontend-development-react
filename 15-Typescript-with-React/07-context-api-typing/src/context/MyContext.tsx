import { createContext } from "react";

interface MyContextProps {
    count: number;
    increment: () => void;
    decrement: () => void;
}

export const MyContext = createContext<MyContextProps>({
    count: 0,
    increment: () => { },
    decrement: () => { },
})