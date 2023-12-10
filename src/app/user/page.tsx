import Link from "next/link";
import { getUsers } from "~/app/_action/userData";
import AddUser from "~/app/user/AddUsers";

export default async function Users() {
  const users = await getUsers();
  return (
    <main className="mx-48 mt-16">
      <p className="text-2xl font-semibold text-gray-500">Add User</p>
      <AddUser />
      <h1 className="mt-5 text-xl font-semibold text-gray-500">
        Pantry Tracker
      </h1>
      {users.map((user) => (
        <Link
          href={`/user/${user.id}`}
          className="flex max-w-md flex-col gap-2 border p-2"
          key={user.id}
        >
          <p>{user.username}</p>
          <p>{user.email}</p>
        </Link>
      ))}
    </main>
  );
}
