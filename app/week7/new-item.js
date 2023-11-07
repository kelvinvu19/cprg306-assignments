"use client";
import { useState } from "react";

export default function NewItem({ onAddItem }) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const handleSubmit = (event) => {
        event.preventDefault();
        const newItem = { name, quantity, category };
        onAddItem(newItem);
        setName("");
        setQuantity(1);
        setCategory("produce");
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    }

    const handleCategoryChange = (event) => { 
        setCategory(event.target.value);
    }
    
    return (
        <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-md">
            <form onSubmit={handleSubmit}>
                <label className="block mb- 4">
                    <span className="text-gray-800">Name:</span>
                    <input
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                    required
                    className="mt-1 p-1 block w-full rounded-md text-black bg-gray-100 focus:bg-white"
                    />
                </label>
                
                <label className="block mb-4">
                    <span className="text-gray-800">Quantity:</span>
                    <input
                    type="number"
                    min="1"
                    max="99"
                    value={quantity}
                    onChange={handleQuantityChange}
                    required
                    className="mt-1 p-1 block w-full rounded-md text-black bg-gray-100 focus:bg-white"
                    />
                </label>

                <label className="block mb-4">
                    <span className="text-gray-800">Category:</span>
                    <select
                    value={category}
                    onChange={handleCategoryChange}
                    required
                    className="mt-1 p-1 block w-full rounded-md text-black bg-gray-100 focus:bg-white"
                    >
                        <option value="produce">Produce</option>
                        <option value="dairy">Dairy</option>
                        <option value="meat">Meat</option>
                        <option value="canned goods">Canned Goods</option>
                        <option value="dry goods">Dry Goods</option>
                        <option value="household">Household</option>
                    </select>
                </label>

                <button
                    class="btn btn-primary"
                    type="submit"
                    //className="w-full py-2 px-4 bg-sky-600 hover:bg-sky-500 rounded-md text-white"
                >
                    Add Item
                </button>
            </form>
        </div>
    );
};