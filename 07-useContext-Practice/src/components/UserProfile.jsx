import React, { useContext } from 'react'
import { UserContext } from '../contexts/AppContext'

const UserProfile = () => {

    const { user } = useContext(UserContext);

    return (
        <div>
            <h1 style={{ color: "yellow" }}>User Name: {user.name}</h1>
            <h1 style={{ color: "blue" }}>User Age: {user.age}</h1>
        </div>
    )
}



export default UserProfile;
