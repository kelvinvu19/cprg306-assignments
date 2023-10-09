"use client";

import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (item) => {
    item.preventDefault();

  const NewItem = {
      name,
      quantity,
      category,
    };
  console.log(NewItem);


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
            <label className="block mb-4">
            Name:
            <input
                required
                onChange={handleNameChange}
                value={name}
                className="mt-1 p-1 block w-full rounded-md text-black bg-gray-100 focus:bg-white"
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
                className="mt-1 p-1 block w-full rounded-md text-black bg-gray-100 focus:bg-white"
            />
            </label>

            <label>
            Category:
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
                className="mt-1 p-1 block w-full rounded-md text-black bg-gray-100 focus:bg-white"
                </select>
            </label>
        <button type="submit">Submit</button>
        </form>
    </main>
  );
}