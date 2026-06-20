import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await response.json()
      if (data && data.length)
        setData(data);
    }
    getData();
  }, [])

  // const uniqueUsers = data.map((todo) => (
  //   <div key={todo.id}><li>User ID: {todo.userId} ---- User Title: {todo.title}</li></div>
  // ));

  const seenIds = new Set();

  const uniqueUsersList = data.filter(todo => {
    if (seenIds.has(todo.userId)) {
      return false;
    }
    seenIds.add(todo.userId);
    return true;
  });

  return (
    <>
      {/* {uniqueUsers} */}

      {uniqueUsersList.map((todo) => (
        <li key={todo.id}>
          <strong>User ID:</strong> {todo.userId} — <strong>First Task:</strong> {todo.title}
        </li>
      ))}
    </>
  )
}

export default App
