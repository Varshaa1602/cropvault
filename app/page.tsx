import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">CropVault</h1>
      <p className="text-gray-600 max-w-md mb-8">
        Turning Coimbatore's surplus crop residue into clean energy plans —
        instead of letting it go up in smoke.
      </p>
      <Link
        href="/plan"
        className="bg-green-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-800"
      >
        Open Planner
      </Link>
    </div>
  );
}