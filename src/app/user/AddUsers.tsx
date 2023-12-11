import { addUser } from "~/app/_action/userData";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

export default function AddUser() {
  return (
    <form action={addUser} className="flex max-w-3xl flex-col gap-3">
      <Label htmlFor="username">Username</Label>
      <Input type="text" name="username" id="username" placeholder="Username" />
      <Label htmlFor="email">Email</Label>
      <Input
        type="email"
        name="email"
        id="email"
        placeholder="Your Email ..."
      />
      <Button type="submit" className="rounded-lg bg-blue-700 p-3 text-lg">
        Sign In
      </Button>
    </form>
  );
}
