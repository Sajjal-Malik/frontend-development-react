import { useState } from 'react'
import ComponentOne from "./components/ComponentOne"
import ComponentTwo from "./components/ComponentTwo"
import './App.css'
import ExampleOne from './components/ExampleOne'
import ExampleTwo from './components/ExampleTwo'
import ExampleThree from './components/ExampleThree'

function App() {

  // const [count, setCount] = useState(0)


  // const [friends, setFriends] = useState(["Umar", "Shehzad"]);

  // function addOneFriend() {
  //   setFriends([...friends, "Malik"]);
  // }

  // const removeOneFriend = () => {
  //   setFriends(() => friends.filter(friend => friend !== "Shehzad"));
  // }

  // function updateOneFriend() {
  //   setFriends(() => friends.map((friend) => friend === "Malik" ? "Malik Bhatti" : friend))
  // }


  // const [movie, setMovie] = useState({
  //   name: "Equalizer 3",
  //   rating: 7,
  // });

  // const handleClick = () => {
  //   const newMovie = {
  //     name: "Matrix 1",
  //     rating: 8
  //   };

  //   setMovie(newMovie);

  //   setMovie({ name: "Matrix 1", rating: 8 })
  //   setMovie({ ...movie, rating: 8 })
  // }


  // const [movies, setMovies] = useState([
  //   { id: 1, name: "Man of Steel", rating: 7 },
  //   { id: 2, name: "Avengers Endamge", rating: 8 },
  // ])

  // const handleClick = () => {
  //   setMovies(movies.map((movie) => movie.id == 2 ? { ...movie, name: "Superman vs Batman" } : movie));
  // }

  // const [count, setCount] = useState(0);

  return (
    <>
      {/* <h1>{count}</h1>
      <button onClick={() => setCount(count + 99)}>Increment</button>
      <button onClick={() => setCount(count - 99)}>Decrement</button> */}


      {/* {friends.map((friend, index) => (
        <div key={index}>
          <h1>{friend}</h1>
        </div>
      ))}
      <button onClick={addOneFriend}>Add Friend</button>
      <button onClick={removeOneFriend}>Remove Friend</button>
      <button onClick={updateOneFriend}>Change Friend</button> */}


      {/* <h1>Movie name: {movie.name}</h1>
      <h1>Movie rating: {movie.rating}</h1>
      <button onClick={handleClick}>Change Movie</button> */}


      {/* {movies.map((movie) => (
        <div key={movie.id}>
          <h2>Movie Name: {movie.name}</h2>
          <h3>Movie Rating: {movie.rating}</h3>
        </div>
      ))}
      <button onClick={handleClick}>Change Movie</button> */}


      {/* <ComponentOne countValue={count} onclickHandler={() => setCount(count + 1)} />
      <ComponentTwo countValue={count} onclickHandler={() => setCount(count - 1)} /> */}


      {/* <ExampleOne /> */}
      {/* <ExampleTwo /> */}
      <ExampleThree />
    </>
  )
}

export default App
