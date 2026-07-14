import "./Sidebar.css";

import Category from "./Category/Category";
import Color from "./Color/Color";
import Price from "./Price/Price";

const Sidebar = ({ handleChange }) => {
    return (
        <>
            <section className="sidebar">
                <div className="logo-container">
                    <h1>🛒</h1>
                </div>
                <Category handleChange={handleChange} />
                <Price handleChange={handleChange} />
                <Color handleChange={handleChange} />
            </section>
        </>
    );
};

export default Sidebar;