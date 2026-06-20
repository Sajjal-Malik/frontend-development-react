import { useState } from "react";

export const TodoList = () => {

    const [items, setItems] = useState([]);
    const [text, setText] = useState("");

    function handleItem(event) {
        event.preventDefault();
        if (text.trim() === "")
            return;

        setItems((prevItems) => [...prevItems, text]);
        setText("");
    }

    return (
        <div className="container">
            <h1>Todo Component</h1>
            <form onSubmit={handleItem}>
                <input
                    type="text"
                    placeholder="Enter item..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button type="submit">Click to Add Item</button>
            </form>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}