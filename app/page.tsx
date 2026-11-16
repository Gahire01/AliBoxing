"use client";

// ============================================================
// Home Page – Temporary "Under Development" screen
// Shows a countdown that ends 2 days from first visit.
// Replace this whole file with the real site when ready.
// ============================================================

import { useState, useEffect } from "react";
import { Construction, Sparkles, Rocket, Code2, Smartphone } from "lucide-react";

// ============================================================
// Countdown helper
// ============================================================
function getTimeLeft(target) {
  const diff = Math.max(0, target - Date.now());
  return {
    days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours:   Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    done:    diff <= 0,
  };
}

export default function Home() {
  // Launch target = now + 2 days (locked once on first render)
  const [target] = useState(() => Date.now() + 2 * 24 * 60 * 60 * 1000);
  const [time, setTime] = useState(() => getTimeLeft(target));
  const [mounted, setMounted] = useState(false);

  // Slide-in animation
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  // Tick every second
  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const pad = (n) => String(n).padStart(2, "0");

  const units = [
    { label: "Days",    value: pad(time.days) },
    { label: "Hours",   value: pad(time.hours) },
    { label: "Minutes", value: pad(time.minutes) },
    { label: "Seconds", value: pad(time.seconds) },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      {/* Background keyframes */}
      <style>{`
        @keyframes udBlob {
          0%,100% { transform: translate(0,0) scale(1); }
          33%     { transform: translate(40px,-30px) scale(1.15); }
          66%     { transform: translate(-30px,30px) scale(0.9); }
        }
        @keyframes udFloat {
          0%,100% { transform: translateY(0); }
          50%     { transform: translateY(-8px); }
        }
        @keyframes udPulseRing {
          0%   { transform: scale(1);   opacity: 0.6; }
          100% { transform: scale(2);   opacity: 0; }
        }
        @keyframes udSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes udShine {
          0%   { transform: translateX(-120%); }
          100% { transform: translateX(220%); }
        }
      `}</style>

      {/* Animated gradient blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-amber-500/30 blur-3xl"
          style={{ animation: "udBlob 12s ease-in-out infinite" }}
        />
        <div
          className="absolute top-1/3 -right-24 h-96 w-96 rounded-full bg-fuchsia-500/25 blur-3xl"
          style={{ animation: "udBlob 14s ease-in-out infinite reverse" }}
        />
        <div
          className="absolute -bottom-24 left-1/3 h-96 w-96 rounded-full bg-sky-500/25 blur-3xl"
          style={{ animation: "udBlob 16s ease-in-out infinite" }}
        />
      </div>

      {/* Content */}
      <div
        className={`relative z-10 mx-auto flex min-h-screen max-w-3xl flex-col items-center
                    justify-center px-6 py-16 text-center transition-all duration-700
                    ${mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
      >
        {/* Animated construction badge */}
        <div className="relative mb-8">
          <span
            aria-hidden="true"
            className="absolute inset-0 rounded-full bg-amber-400/40"
            style={{ animation: "udPulseRing 2.4s ease-out infinite" }}
          />
          <div
            className="relative flex h-20 w-20 items-center justify-center rounded-full
                       bg-gradient-to-br from-amber-400 to-orange-500
                       shadow-xl shadow-amber-500/40"
            style={{ animation: "udFloat 3s ease-in-out infinite" }}
          >
            {/* Subtle spinning ring */}
            <span
              aria-hidden="true"
              className="absolute inset-[-6px] rounded-full border-2 border-dashed border-amber-300/60"
              style={{ animation: "udSpin 12s linear infinite" }}
            />
            <Construction className="h-10 w-10 text-slate-950" strokeWidth={2.5} />
          </div>
        </div>

        {/* Headline */}
        <p className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
          <Sparkles className="h-4 w-4" />
          Under Development
        </p>

        <h1 className="mb-4 text-4xl font-extrabold leading-tight sm:text-6xl">
          We're building something{" "}
          <span className="bg-gradient-to-r from-amber-300 via-orange-400 to-fuchsia-400 bg-clip-text text-transparent">
            amazing
          </span>
        </h1>

        <p className="mx-auto mb-10 max-w-xl text-base text-slate-400 sm:text-lg">
          We're crafting our new <strong className="text-slate-200">website</strong> and{" "}
          <strong className="text-slate-200">mobile app</strong> — coming to you very soon.
          Here's how long until launch:
        </p>

        {/* Countdown */}
        {!time.done ? (
          <div className="mb-10 grid w-full max-w-2xl grid-cols-4 gap-3 sm:gap-4">
            {units.map((u) => (
              <div
                key={u.label}
                className="relative overflow-hidden rounded-2xl border border-white/10
                           bg-white/5 p-4 backdrop-blur-md"
              >
                {/* Shine sweep */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 skew-x-12
                             bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  style={{ animation: "udShine 4s ease-in-out infinite" }}
                />
                <div className="relative text-3xl font-black tabular-nums text-amber-300 sm:text-5xl">
                  {u.value}
                </div>
                <div className="relative mt-1 text-[10px] font-semibold uppercase tracking-widest text-slate-400 sm:text-xs">
                  {u.label}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="mb-10 text-2xl font-bold text-emerald-400">
            🚀 We're live! Welcome aboard.
          </p>
        )}

        {/* Product badges */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10
                           bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 backdrop-blur-md">
            <Code2 className="h-4 w-4 text-amber-300" />
            Website
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10
                           bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 backdrop-blur-md">
            <Smartphone className="h-4 w-4 text-fuchsia-400" />
            Mobile App
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10
                           bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 backdrop-blur-md">
            <Rocket className="h-4 w-4 text-emerald-400" />
            Launching in 2 days
          </span>
        </div>

        {/* Footer note */}
        <p className="mt-12 text-xs text-slate-500">
          Thanks for your patience — we can't wait to show you what we've been working on. ✨
        </p>
      </div>
    </div>
  );
}
