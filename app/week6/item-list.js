import React, { useState } from 'react';
import Item from './item';

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState('name');

  const handleSortChange = (newSortBy) => {
    setSortBy(newSortBy);
  };

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

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
      <ul style={{ background: 'white' }}> {/* Set background color to white */}
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
