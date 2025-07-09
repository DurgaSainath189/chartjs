"use client";

import { useRouter } from "next/navigation";

export default function RedirectsPage() {
  const router = useRouter();

  const routes = [
    { label: "First Chart", path: "/one" },
    { label: "Second Chart", path: "/two" },
    { label: "Third Chart", path: "/three" },
    { label: "Fourth Chart", path: "/four" },
    { label: "Fifth Chart", path: "/five" },
  ];

  return (
    <main className="flex items-center justify-center h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white px-4">
      <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-10 w-full max-w-xl animate-fadeIn space-y-6">
        {/* <h1 className="text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-indigo-400 tracking-wide drop-shadow-lg">
          Chart Navigator 🚀
        </h1> */}

        <div className="space-y-4">
          {routes.map((route, idx) => (
            <button
              key={idx}
              onClick={() => router.push(route.path)}
              className="w-full py-3 rounded-2xl bg-white/10 border border-white/20 text-lg font-semibold transition-all hover:bg-pink-500/20 hover:scale-105 hover:border-pink-400 shadow-md hover:shadow-pink-500/30 focus:outline-none"
            >
              {route.label}
            </button>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </main>
  );
}
