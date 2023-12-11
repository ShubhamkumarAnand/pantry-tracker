import { addPantryData } from "~/app/_action/pantryData";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

export async function AddPantryItem({ userId }: { userId: string }) {
  const addPantry = addPantryData.bind(null, userId);
  return (
    <form action={addPantry} className="flex max-w-xl flex-col gap-3">
      <Label htmlFor="name">Name</Label>
      <Input type="text" name="name" id="name" />
      <Label htmlFor="category">Category</Label>
      <Input type="text" name="category" id="category" />
      <Label htmlFor="quantity">Quantity</Label>
      <Input type="number" name="quantity" id="quantity" />
      <div className="flex items-center justify-start gap-2 text-2xl">
        <input type="radio" name="suffix" id="kilogram" value="kilogram" />
        <Label htmlFor="kilogram">Kg</Label>
        <input type="radio" name="suffix" id="liter" value="liter" />
        <Label htmlFor="liter">liter</Label>
        <input type="radio" name="suffix" id="piece" value="piece" />
        <Label htmlFor="piece">piece</Label>
      </div>
      <Button type="submit">Add Item</Button>
    </form>
  );
}
