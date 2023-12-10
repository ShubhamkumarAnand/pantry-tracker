import { getPantryData } from "~/app/_action/pantryData";

export default async function PantryItems({
  params,
}: {
  params: { userId: string };
}) {
  const { pantryItems } = await getPantryData(params.userId);
  return (
    <main>
      <h1>List of Items</h1>
      {pantryItems.map((pantryItem) => (
        <div
          className="border-border-gray-500 rounded-md p-2"
          key={pantryItem.id}
        >
          {pantryItem.name}
        </div>
      ))}
    </main>
  );
}
