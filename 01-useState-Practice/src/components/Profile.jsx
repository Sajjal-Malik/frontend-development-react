import { useState } from "react";

export const Profile = () => {

    const [user, setUser] = useState({ name: "Duraid Malik", age: 26 });
    const [userName, setUserName] = useState("");
    const [userAge, setUserAge] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        if (user.name === "Duraid Malik" && user.age <= 26) {
            setUser({ name: userName, age: userAge });
        }
        setUserName("");
        setUserAge("");
    }

    return (
        <div className="container">
            <h1>Profile Component</h1>
            <div>
                <h3>Name: {user.name}</h3>
                <h4>Age: {user.age}</h4>
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter name..."
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Enter age..."
                    value={userAge}
                    onChange={(e) => setUserAge(e.target.value)}
                />
                <br />
                <br />
                <button type="submit">Update Profile</button>
            </form>
        </div>
    );
}