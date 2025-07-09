"use client";

import { BotIcon } from "lucide-react";
import { useState } from "react";

export default function AIBot() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Bot Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-30 bg-gradient-to-br from-pink-500 to-indigo-500 text-white p-4 rounded-full shadow-lg hover:scale-105 transition duration-300"
      >
        <BotIcon/>
      </button>

      {/* Chat Box */}
      {open && (
        <div className="fixed bottom-20 right-6 z-40 w-[90%] max-w-sm">
          <div className="relative backdrop-blur-xl bg-white/20 text-white rounded-xl p-5 shadow-2xl animate-fadeIn border border-white/20">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-3 text-white text-xl hover:text-red-300"
            >
              ✕
            </button>
            <h2 className="text-xl font-bold mb-3">Hi! I am your AI assistant 🤖</h2>
            <p className="text-white/90 text-sm">
              How can I help you with your charts today?
            </p>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0px) scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
}
