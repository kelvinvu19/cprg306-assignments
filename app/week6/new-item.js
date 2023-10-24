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
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="meat">Meat</option>
            {/* Add more categories as needed */}
          </select>
        </label>
        <button type="submit" className="small-button">
          Submit
        </button>
      </form>
    </main>
  );
}
