import './style.css';

import { useId, useState } from 'react';

const Accordion = ({ title, content }) => {

    const [isActive, setIsActive] = useState(false);

    const accordionId = useId();
    console.log(useId);
    return (
        <section className="accordion-card" key={accordionId}>
            <div className='header' onClick={() => setIsActive(!isActive)}>
                <div>{title}</div>
                <p className='icon'>{isActive ? "-" : "+"}</p>
            </div>
            <div className='content'>
                {isActive && <p className='card-info'>{content}</p>}
            </div>
        </section>
    )
}

export default Accordion;
