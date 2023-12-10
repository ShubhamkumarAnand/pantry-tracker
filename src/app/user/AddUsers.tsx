import { addUser } from "~/app/_action/userData";

export default function AddUser() {
  return (
    <form action={addUser} className="flex max-w-3xl flex-col gap-3">
      <label htmlFor="username">Username</label>
      <input
        type="text"
        name="username"
        id="username"
        className="rounded-md p-2 text-xl outline"
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        className="rounded-md p-2 text-xl outline"
      />
      <button type="submit" className="rounded-lg bg-blue-500 p-3">
        Add User
      </button>
    </form>
  );
}
