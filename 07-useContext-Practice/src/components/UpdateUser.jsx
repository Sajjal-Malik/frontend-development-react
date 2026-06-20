import React, { useContext } from 'react';
import { UserContext } from '../contexts/AppContext';

const UpdateUser = () => {

    const { user, setUser } = useContext(UserContext);

    const handleUpdate = () => {
        setUser({ ...user, name: "Bhatti" });
    };

    return (
        <div>
            <button onClick={handleUpdate}>Change Name to Bhatti</button>
        </div>
    );
}

export default UpdateUser;