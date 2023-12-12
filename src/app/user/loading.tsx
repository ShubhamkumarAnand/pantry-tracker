export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center gap-10">
      <div className="h-10 w-10 animate-pulse rounded-full bg-red-500"></div>
      <div className="h-10 w-10 animate-pulse rounded-full bg-teal-500"></div>
      <div className="h-10 w-10 animate-pulse rounded-full bg-yellow-500"></div>
    </main>
  );
}
