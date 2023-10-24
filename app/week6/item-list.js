"use client";
import React, { useState } from 'react';
import Item from './item';
import itemsData from './items.json';

export default function ItemList(items) {
  const [items] = useState(itemsData);
  const [sortBy, setSortBy] = useState("name");
  const [filterByCategory, setFilterByCategory] = useState("All");

  const handleSortChange = (newSortBy) => {
    setSortBy(newSortBy);
  };

  const handleCategoryChange = (newCategory) => {
    setFilterByCategory(newCategory);
  };

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  const filteredItems = filterByCategory === "All"
    ? sortedItems
    : sortedItems.filter(item => item.category === filterByCategory);

  const nameButtonStyle = {
    backgroundColor: sortBy === "name" ? "lightblue" : "white",
  };

  const categoryButtonStyle = {
    backgroundColor: sortBy === "category" ? "lightblue" : "white",
  };

  return (
    <div>
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
      <div>
        <label htmlFor="category">Filter by Category:</label>
        <select
          id="category"
          value={filterByCategory}
          onChange={(e) => handleCategoryChange(e.target.value)}
        >
          <option value="All">All</option>
          {/* Add options for each category in your data */}
        </select>
      </div>
      <ul>
        {filteredItems.map((item) => (
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
