"use client";

import AIBot from "@/components/aiBot";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export default function HomePage() {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/dashboard");
  };

  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveSpotlight = (e: MouseEvent) => {
      if (spotlightRef.current) {
        spotlightRef.current.style.left = `${e.clientX}px`;
        spotlightRef.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener("mousemove", moveSpotlight);
    return () => window.removeEventListener("mousemove", moveSpotlight);
  }, []);

  return (
    <main className="relative flex items-center justify-center h-screen bg-[#0e0e1c] overflow-hidden text-white font-sans">
      {/* Glowing blobs */}
      {/* <div className="absolute top-[-25%] left-[-10%] w-[500px] h-[500px] bg-[#00f7ff] opacity-30 rounded-full blur-[200px] animate-pulse" />
      <div className="absolute bottom-[-25%] right-[-10%] w-[500px] h-[500px] bg-[#ff80bf] opacity-20 rounded-full blur-[200px] animate-pulse delay-1000" /> */}

      {/* Parallax cloud rings */}
      {/* <div className="absolute top-24 left-16 w-72 h-72 border-2 border-white/10 rounded-full blur-xl animate-spin-slow" />
      <div className="absolute bottom-24 right-24 w-96 h-96 border border-indigo-400/20 rounded-full blur-xl animate-spin-slowReverse" /> */}

      {/* Sparkline SVG
      <svg
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        className="absolute top-[30%] left-0 w-full h-24 opacity-10"
      >
        <polyline
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          points="0,100 50,80 100,100 150,60 200,90 250,40 300,80 350,50 400,70 450,40 500,60"
        />
      </svg> */}

      {/* Interactive gradient cursor spotlight */}
      <div
        ref={spotlightRef}
        className="pointer-events-none fixed z-0 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 opacity-20 blur-3xl transition-transform"
      />

      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-20 px-10 py-6 flex items-center justify-between backdrop-blur-lg bg-white/5 border-b border-white/10 shadow-md">
        <div className="text-3xl font-bold tracking-wide">ChartStudio</div>
        {/* <div className="hidden md:flex gap-8 text-sm text-white/80">
          <a href="#" className="hover:text-white transition">
            Home
          </a>
          <a href="#" className="hover:text-white transition">
            Docs
          </a>
          <a href="#" className="hover:text-white transition">
            About
          </a>
        </div>
        <button className="bg-white/90 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-white transition">
          Sign In
        </button> */}
      </nav>

      {/* Huge quote */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 z-10 text-center w-[100%] max-w-4xl px-4">
        <h1 className="text-[3.5rem] md:text-[5rem] font-extrabold leading-tight tracking-tight drop-shadow-xl text-white/90">
          “Charts transform <span className="text-indigo-400">numbers</span>{" "}
          into <span className="text-pink-400">insight</span>.”
        </h1>
      </div>

      {/* CTA Card */}
      <div className="relative z-20 mt-10 md:mt-[20rem] w-[90%] max-w-xl mx-auto px-10 py-14 text-center bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl shadow-2xl hover:shadow-pink-500/20 transition-shadow duration-500">
        <h2 className="text-3xl font-bold mb-4 tracking-wide drop-shadow">
          Dive into the data like never before
        </h2>
        <p className="text-base text-white/80 mb-6">
          With ChartStudio, data comes alive — beautifully and clearly.
        </p>
        <button
          onClick={handleNavigate}
          className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold rounded-xl hover:scale-105 transition transform duration-200"
        >
          Launch Dashboard
        </button>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes cloudMove {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-12px) translateX(14px);
          }
        }
        @keyframes spin-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        @keyframes spin-slowReverse {
          0% {
            transform: rotate(360deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }
        .animate-cloudMove {
          animation: cloudMove 10s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 40s linear infinite;
        }
        .animate-spin-slowReverse {
          animation: spin-slowReverse 50s linear infinite;
        }
        .animate-glow {
          animation: glow 2.5s ease-in-out infinite alternate;
        }
      `}</style>
      <AIBot />
    </main>
  );
}
