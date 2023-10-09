"use client";

import { useState } from "react";

export default function newItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (item) => {
    item.preventDefault();

  const newItem = {
      name,
      quantity,
      category,
    };
  console.log(newItem);


    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  const handleNameChange = (item) => {
    setName(item.target.value);
  };

  const handleQuantityChange = (item) => {
    setDate(item.target.value);
  };

  const handleCategoryChange = (item) => {
    setLocation(item.target.value);
  };

  return (
    <main>
        <form onSubmit={handleSubmit}>
            <label>
            Name:
            <input
                required
                onChange={handleNameChange}
                value={name}
            />
            </label>

            <label>
            Quantity:
            <input
                type="number"
                min="1"
                max="99"
                required
                onChange={handleQuantityChange}
                value={quantity}
            />
            </label>

            <label>
            Category:
            <input
                type="number"
                required
                onChange={handleLocationChange}
                value={location}
                className="mt-1 p-1 block w-full rounded-md text-black bg-gray-100 focus:bg-white"
            />
            </label>

                <label className="block mb-4">
                <select
                value={category}
                onChange={handleCategoryChange} 
            >
                <option value="produce">Produce</option>
                <option value="dairy">Dairy</option>
                <option value="bakery">Bakery</option>
                <option value="meat">Meat</option>
                <option value="frozen-foods">Frozen Foods</option>
                <option value="canned-goods">Canned Goods</option>
                <option value="dry-goods">Dry Goods</option>
                <option value="beverages">Beverages</option>
                <option value="snacks">Snacks</option>
                <option value="household">Household</option>
                <option value="other">Other</option>
            </select>
            </label>
        <button type="submit">Submit</button>
        </form>
    </main>
  );
}