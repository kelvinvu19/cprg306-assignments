import React, { useState } from 'react';
import Item from './item';

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState('name');
  const [filterByCategory, setFilterByCategory] = useState('All');

  const handleSortChange = (newSortBy) => {
    setSortBy(newSortBy);
  };

  const handleCategoryChange = (newCategory) => {
    setFilterByCategory(newCategory);
  };

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  const filteredItems = filterByCategory === 'All'
    ? [...sortedItems] 
    : sortedItems.filter(item => item.category === filterByCategory);

  const nameButtonStyle = {
    backgroundColor: sortBy === 'name' ? 'lightblue' : 'white',
  };

  const categoryButtonStyle = {
    backgroundColor: sortBy === 'category' ? 'lightblue' : 'white',
  };

  return (
    <div>
      <div>
        <button onClick={() => handleSortChange('name')} style={nameButtonStyle}>
          Sort by Name
        </button>
        <button onClick={() => handleSortChange('category')} style={categoryButtonStyle}>
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
      </div>
      <ul>
        {filteredItems.map((item) => (
        <Item
          key={item.id}
          name={item.name}
          quantity={item.quantity}
          category={item.category}
          onSelect={() => onItemSelect(item)}
          />
          ))}
      </ul>
      </div>
  );
}
