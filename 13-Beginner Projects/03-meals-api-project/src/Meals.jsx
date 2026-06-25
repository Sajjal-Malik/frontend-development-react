import './style.css';

import { useEffect, useState } from 'react';

import axios from 'axios';

const Meals = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then((res) => {
                setItems(res.data.categories);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    const itemsList = items.map(({ idCategory, strCategory, strCategoryDescription, strCategoryThumb }) => {
        const shortDescription = strCategoryDescription.length > 120
            ? `${strCategoryDescription.substring(0, 120)}...`
            : strCategoryDescription;

        return (
            <div className='category-card' key={idCategory}>
                <div className='card-image-wrapper'>
                    <img
                        src={strCategoryThumb}
                        alt={strCategory}
                        className='card-image'
                    />
                </div>
                <div className='card-content'>
                    <h3 className='card-title'>{strCategory}</h3>
                    <p className='card-description'>{shortDescription}</p>
                    <button className='card-btn'>Explore {strCategory}</button>
                </div>
            </div>
        );
    });

    return (
        <div className='items-container'>{itemsList}</div>
    )
}

export default Meals
