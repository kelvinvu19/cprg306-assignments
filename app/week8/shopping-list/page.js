import Link from 'next/link';
import { useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import MealIdeas from './meal-ideas';
import itemData from './items.json';

function Page() {
  const [selectedItemName, setSelectedItemName] = useState(""); 
  const [items, setItems] = useState(itemData); 
  const [numberOfMeals, setNumberOfMeals] = useState(0);

  const handleItemSelect = (selectedItem) => {
    const cleanedItemName = selectedItem.name.split(",")[0].replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uD000-\uDFFF]|\uD83D[\uDC00-\uDE4F]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g, '').trim();

    setSelectedItemName(cleanedItemName);
  };
  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
};

  return (
    <main className="bg-gray-900 mb-4 py-4 px-8 rounded flex">
      <div>
        <Link href="/" className="font-bold">Home</Link>
        <h1 className="text-white">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <MealIdeas ingredient={selectedItemName} updateNumberOfMeals={setNumberOfMeals} />
    </main>
  );
}

export default Page;

