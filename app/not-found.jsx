import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-[70vh] flex items-center justify-center flex-col space-y-2">
      <h2 className="text-2xl font-bold">Not Found</h2>
      <p className="text-lg">Could not find requested resource</p>
      <Link href="/" className="px-2 py-1 border bg-accentSoft text-white dark:text-dark dark:bg-accentDark rounded-md text-md">Return Home</Link>
    </div>
  );
}