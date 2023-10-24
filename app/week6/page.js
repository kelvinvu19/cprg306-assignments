import React, { useState } from 'react';
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from './items.json';

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  }

  const pageStyle = {
    backgroundColor: 'blue',
  };

  return (
    <main style={pageStyle}>
      <h1 className="text-3xl font-semibold">
        Shopping List
      </h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </main>
  );
}
