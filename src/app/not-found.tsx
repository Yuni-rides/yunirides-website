// app/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#FFFBEC] text-[#1A237E]">
      <h2 className="text-4xl font-bold mb-4">404 - Page Not Found</h2>
      <p className="mb-8">Could not find the requested resource.</p>
      <Link href="/" className="px-6 py-3 bg-[#6B2272] text-white rounded-xl font-bold">
        Return Home
      </Link>
    </div>
  );
}