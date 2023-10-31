import React from 'react';

export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li
      className="border border-sky-500 bg-sky-800 w-full max-w-xs m-4 p-2"
      onClick={() => onSelect(name)}
    >
      <p className="text-xl font-bold">{name}</p>
      <p>Quantity: {quantity}</p>
      <p>Category: {category}</p>
    </li>
  );
}
