import { deletePantryItem, getPantryData } from "~/app/_action/pantryData";
import { AddPantryItem } from "~/app/user/[userId]/AddPantryItem";
import { Button } from "~/components/ui/button";

export default async function PantryItems({
  params,
}: {
  params: { userId: string };
}) {
  const { pantryItems } = await getPantryData(params.userId);
  return (
    <main className="mx-48 mt-16">
      <h2 className="my-10 text-xl font-semibold">Add Pantry Items</h2>
      <AddPantryItem userId={params.userId} />
      <h2 className="my-5 text-xl font-semibold">List of Items</h2>
      {pantryItems.map((pantryItem) => (
        <div
          className="border-border-gray-500 rounded-md p-2"
          key={pantryItem.id}
        >
          {pantryItem.name}
          <form
            action={deletePantryItem.bind(null, pantryItem.id, params.userId)}
          >
            <Button type="submit">Delete</Button>
          </form>
        </div>
      ))}
    </main>
  );
}
