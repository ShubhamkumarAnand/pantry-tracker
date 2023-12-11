import { addPantryData } from "~/app/_action/pantryData";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

export function AddPantryItem({ userId }: { userId: string }) {
  return (
    <form
      action={addPantryData.bind(null, userId)}
      className="flex max-w-xl flex-col gap-3"
    >
      <Label htmlFor="name">Name</Label>
      <Input type="text" name="name" id="name" />
      <Label htmlFor="category">Category</Label>
      <Input type="text" name="category" id="category" />
      <div className="flex items-center gap-5">
        <Label htmlFor="quantity">Quantity</Label>
        <Input
          type="number"
          name="quantity"
          id="quantity"
          className="max-w-10"
        />
        <div className="flex items-center justify-start gap-2 text-2xl">
          <input type="radio" name="suffix" id="kilogram" value="kilogram" />
          <Label htmlFor="kilogram">Kg</Label>
          <input type="radio" name="suffix" id="liter" value="liter" />
          <Label htmlFor="liter">Liter</Label>
          <input type="radio" name="suffix" id="piece" value="piece" />
          <Label htmlFor="piece">Piece</Label>
        </div>
      </div>
      <Button type="submit">Add Item</Button>
    </form>
  );
}
