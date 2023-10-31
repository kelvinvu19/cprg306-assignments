import React from 'react';

export default function Item({ name, quantity, category, onSelect }) {
  const handleClick = () => {
    console.log('Item clicked:', name);
    onSelect(name);
  };

  return (
    <li
      className="border border-sky-500 bg-sky-800 w-full max-w-xs m-4 p-2"
      onClick={handleClick}
    >
      <p className="text-xl font-bold">{name}</p>
      <p>Quantity: {quantity}</p>
      <p>Category: {category}</p>
    </li>
  );
}
