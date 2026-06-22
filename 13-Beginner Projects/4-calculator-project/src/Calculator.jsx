import './style.css';

import { useState } from "react";

const Calculator = () => {
    const [inputValue, setInputValue] = useState("");

    const display = (value) => setInputValue(inputValue + value);

    const calculate = () => {
        try {
            setInputValue(String(eval(inputValue)));
        } catch (error) {
            setInputValue("Error Occured.");
            console.log(error);
        }
    };

    function clear() {
        setInputValue("");
    }

    return (
        <form className="calculator" name="calc">
            <input
                type="text"
                className="value"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />

            <span className="num clear" onClick={() => clear()}>
                c
            </span>
            <span onClick={() => display("/")}>/</span>
            <span onClick={() => display("*")}>*</span>
            <span onClick={() => display("7")}>7</span>
            <span onClick={() => display("8")}>8</span>
            <span onClick={() => display("9")}>9</span>
            <span onClick={() => display("-")}>-</span>
            <span onClick={() => display("4")}>4</span>
            <span onClick={() => display("5")}>5</span>
            <span onClick={() => display("6")}>6</span>
            <span className="sign" onClick={() => display("+")}>
                +
            </span>
            <span onClick={() => display("1")}>1</span>
            <span onClick={() => display("2")}>2</span>
            <span onClick={() => display("3")}>3</span>
            <span onClick={() => display("0")}>0</span>
            <span onClick={() => display("00")}>00</span>
            <span onClick={() => display(".")}>.</span>
            <span className="num equal" onClick={() => calculate()}>
                =
            </span>

        </form>
    )
}

export default Calculator
