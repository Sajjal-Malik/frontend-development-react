import { useState } from 'react';
import { UserContext } from './contexts/AppContext';
import UserProfile from './components/UserProfile';
import UpdateUser from './components/UpdateUser';
import './App.css';

function App() {

  const [user, setUser] = useState({ name: "Malik", age: 25 });

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <UserProfile />
        <UpdateUser />
      </UserContext.Provider>
    </>
  );
}


export default App;
