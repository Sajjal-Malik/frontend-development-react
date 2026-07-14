import "./style.css";

import { useState } from "react";

// Helper to generate random id
function generateId() {
    return Math.floor(Math.random() * 10);
}

function Todo() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");

    // Handle submit arrow function to add Element
    const handleSubmit = () => {
        setTodos((todos) => todos.concat({ text: input, id: generateId() }));
        setInput("");
    };

    // Remove Element from the Array based on Unique id
    const removeTodo = (id) => setTodos((todos) => todos.filter((todo) => todo.id !== id));

    return (
        <div className="container">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="New Todo"
            />

            <button onClick={handleSubmit}>Submit</button>

            <ul className="todos-list">
                {todos.map(({ text, id }) => (
                    <li key={id} className="todo">
                        <span>{text}</span>
                        <button className="close" onClick={() => removeTodo(id)}>
                            X
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todo;