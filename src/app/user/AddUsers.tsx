import { addUser } from "~/app/_action/userData";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

export default function AddUser() {
  return (
    <form action={addUser} className="flex max-w-xl flex-col gap-2">
      <Label htmlFor="username">Username</Label>
      <Input type="text" name="username" id="username" placeholder="Username" />
      <Label htmlFor="email">Email</Label>
      <Input type="email" name="email" id="email" placeholder="Email" />
      <Button
        type="submit"
        className="mt-3 rounded-lg bg-blue-500 py-5 text-lg hover:bg-blue-700"
      >
        Sign In
      </Button>
    </form>
  );
}
