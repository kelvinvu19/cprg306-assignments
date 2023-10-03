import ItemList from "./item-list";

export default function Page() {
  return (
    <main>
      <h1 className="text-3xl font-semibold mb-4 bg-gray-200 min-h-screen p-4 ">
      Shopping List
      </h1>
      <ItemList />
    </main>
  );
}