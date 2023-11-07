<<<<<<< HEAD
export default function Item({name, quantity, category, onSelect}) {
  return (
      <ul className="p-2 m-4 bg-slate-900 max-w-sm hover:bg-blue-500" onClick={() => onSelect(name)}>
          <li>{name}</li>
          <li>{quantity}</li>
          <li>{category}</li>
      </ul>
=======
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
>>>>>>> parent of be437e2 (Update item.js)
  );
}