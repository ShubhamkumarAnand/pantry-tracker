import AddUser from "~/app/user/AddUsers";

export default async function Users() {
  return (
    <main className="mx-48 flex min-h-screen flex-col justify-center">
      <h1 className="text-4xl font-semibold">Pantry Tracker</h1>
      <p className="my-5 text-lg font-semibold text-gray-700">
        Enter Your Information
      </p>
      <AddUser />
    </main>
  );
}
