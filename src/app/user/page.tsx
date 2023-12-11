import AddUser from "~/app/user/AddUsers";

export default async function Users() {
  return (
    <main className="mx-48 mt-16">
      <h1 className="mt-5 text-xl font-semibold">Pantry Tracker</h1>
      <p className="my-5 text-2xl font-semibold text-gray-500">Log In</p>
      <AddUser />
    </main>
  );
}
