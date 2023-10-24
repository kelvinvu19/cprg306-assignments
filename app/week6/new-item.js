import React, { useState } from 'react';

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('produce');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = {
      name,
      quantity,
      category,
    };
    onAddItem(newItem);
    setName('');
    setQuantity(1);
    setCategory('produce');
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
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
            className="text-black"
          >
            <option value="produce">produce</option>
            <option value="dairy">dairy</option>
            <option value="bakery">bakery</option>
            <option value="meat">meat</option>            
            <option value="frozen foods">frozen foods</option>
            <option value="canned goods">canned food</option>
            <option value="dry goods">dry</option>
            <option value="beverages">beverages</option>
            <option value="snacks">snacks</option>
            <option value="household">household</option>
            <option value="other">other</option>

          </select>
        </label>
        <button type="submit" className="small-button">
          Submit
        </button>
      </form>
    </main>
  );
}
