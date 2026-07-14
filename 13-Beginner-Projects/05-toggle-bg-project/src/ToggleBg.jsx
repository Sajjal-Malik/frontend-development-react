import './style.css';

import { useState } from 'react';

const ToggleBg = () => {
    const [bgColor, setBgColor] = useState('#FFFFFF');
    const [textColor, setTextColor] = useState('#1B1B1B');
    const [buttonColor, setButtonColor] = useState('white');

    const handleClick = () => {
        setBgColor(bgColor === '#FFFFFF' ? '#1B1B1B' : '#FFFFFF');
        setTextColor(textColor === '#1B1B1B' ? 'red' : '#1B1B1B');
        setButtonColor(buttonColor === 'white' ? 'black' : 'white');
    }

    return (
        <div className='container' style={{ backgroundColor: bgColor, color: textColor }}>
            <section className='content'>
                <h1>
                    Welcome To THE <br /> Real World..
                </h1>
            </section>
            <button
                onClick={handleClick}
                style={{ backgroundColor: buttonColor, color: textColor }}
            >
                {bgColor === '#1B1B1B' ? 'Dark Theme' : 'Light Theme'}
            </button>
        </div>
    )
}

export default ToggleBg
