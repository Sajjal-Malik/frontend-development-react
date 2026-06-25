import './style.css';

import { FaSearch } from "react-icons/fa";
import { useState } from "react";

const SearchBar = () => {

    const [showInput, setShowInput] = useState(false);
    const [bgColor, setBgColor] = useState('white');

    const handleClick = (event) => {
        setBgColor('black');

        if (event.target.className === 'container') {
            setShowInput(false);
            setBgColor('white');
        }
    }

    return (
        <section className='container' style={{ backgroundColor: bgColor }} onClick={handleClick}>
            {
                showInput ?
                    <input type='text' placeholder='Search here...' />
                    :
                    <FaSearch onClick={() => setShowInput(true)} />
            }
        </section>
    )
}

export default SearchBar
