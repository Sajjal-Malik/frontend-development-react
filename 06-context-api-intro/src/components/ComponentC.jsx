import React, { useContext } from 'react';
import { DataContext, ThemeContext } from '../contexts/AppContext';

const ComponentC = () => {

    const name = useContext(DataContext);
    const theme = useContext(ThemeContext);
    const stylesObject = {
        backgroundColor: theme === 'dark' ? '#333' : '#fff',
        color: theme === 'dark' ? '#fff' : '#000'
    };

    return (
        <div style={stylesObject}>
            <h1>User: {name}</h1>
            <p>Current Theme: {theme}</p>
        </div>
    )
}

export default ComponentC
