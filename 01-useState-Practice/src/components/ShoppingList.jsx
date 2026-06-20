import { useState } from "react";

export const ShoppingList = () => {

    const [products, setProducts] = useState([
        { id: 1, name: "Mechanical Keyboard", quantity: 15, price: 89.99, category: "Electronics" },
        { id: 2, name: "Wireless Mouse", quantity: 42, price: 25.50, category: "Electronics" },
        { id: 3, name: "USB-C Hub", quantity: 8, price: 45.00, category: "Accessories" },
        { id: 4, name: "Ergonomic Desk Mat", quantity: 23, price: 19.99, category: "Office Supplies" },
        { id: 5, name: "Laptop Stand", quantity: 12, price: 34.95, category: "Accessories" },
        { id: 6, name: "Noise Cancelling Headphones", quantity: 10, price: 199.99, category: "Electronics" },
        { id: 7, name: "Monitor Arm", quantity: 5, price: 55.00, category: "Office Furniture" }
    ]);

    const [productName, setProductName] = useState("");
    const [productQuantity, setProductQuantity] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productCategory, setProductCategory] = useState("");

    function handleItemUpdate(event) {
        event.preventDefault();

        const newProduct = {
            id: Date.now(),
            name: productName,
            quantity: Number(productQuantity),
            price: Number(productPrice),
            category: productCategory
        };

        setProducts([...products, newProduct]);

        setProductName("");
        setProductQuantity("");
        setProductPrice("");
        setProductCategory("");
    }


    return (
        <div className="container">
            <h1>Shopping List Component</h1>
            <form onSubmit={handleItemUpdate}>
                <input
                    type="text"
                    placeholder="Enter name..."
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Enter quantity..."
                    value={productQuantity}
                    onChange={(e) => setProductQuantity(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Enter price..."
                    value={productPrice}
                    onChange={(e) => setProductPrice(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Enter category..."
                    value={productCategory}
                    onChange={(e) => setProductCategory(e.target.value)}
                />
                <br />
                <br />
                <button type="submit">Add Items to Shopping List</button>
            </form>
            {products.map(item => (
                <div key={item.id}>
                    <h3>Product Name: {item.name}</h3>
                    <h4>Product Quantity: {item.quantity}</h4>
                    <h5>Product Price: {item.price}</h5>
                    <p>Product Category: {item.category}</p>
                </div>
            ))}
        </div>
    )
}