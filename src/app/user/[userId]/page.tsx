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
      <h2 className="mb-5 mt-10 text-xl font-semibold">Add Pantry Items</h2>
      <AddPantryItem userId={params.userId} />
      <h2 className="my-5 text-xl font-semibold">List of Items</h2>
      <div className="grid grid-cols-5 gap-3">
        {pantryItems.map((pantryItem) => (
          <div
            className="flex max-w-xs flex-col gap-2 rounded-md border border-gray-500 p-3 shadow-xl"
            key={pantryItem.id}
          >
            <div className="flex justify-between">
              <p>{pantryItem.name}</p>
              <form
                action={deletePantryItem.bind(
                  null,
                  pantryItem.id,
                  params.userId,
                )}
              >
                <Button type="submit">Delete</Button>
              </form>
            </div>
            <p>
              Category:{" "}
              <span className="rounded-md bg-gray-300 p-1">
                {pantryItem.category}
              </span>
            </p>
            <p>
              Quantity:{" "}
              <span className="mx-1 rounded bg-purple-300 p-1">
                {pantryItem.quantity}
              </span>
              {pantryItem.suffix}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
