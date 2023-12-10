import Link from "next/link";

export default async function HomePage() {
  return (
    <main className="mx-48 mt-16">
      <Link href="/user">Users</Link>
    </main>
  );
}
