"use client";
import React, { useState } from 'react';
import Item from './item';
import itemsData from './items.json';

export default function ItemList() {
  const [items] = useState(itemsData);
  const [sortBy, setSortBy] = useState("name"); 


  const handleSortChange = (newSortBy) => {
    setSortBy(newSortBy);
  };


  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });


  const nameButtonStyle = {
    backgroundColor: sortBy === "name" ? "lightblue" : "white",
  };

  const categoryButtonStyle = {
    backgroundColor: sortBy === "category" ? "lightblue" : "white",
  };

  return (
    <div>
      <div>
        <label>Sort by:</label>
        <select
          value={sortBy}
          onChange={(e) => handleSortChange(e.target.value)}
        >
          <option value="name">Name</option>
          <option value="category">Category</option>
        </select>
      </div>
      <div>
        <button
          onClick={() => handleSortChange("name")}
          style={nameButtonStyle}
        >
          Sort by Name
        </button>
        <button
          onClick={() => handleSortChange("category")}
          style={categoryButtonStyle}
        >
          Sort by Category
        </button>
      </div>
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
}
