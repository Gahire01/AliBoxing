"use client";

// ============================================================
// Home Page – Main entry point for the site
// Includes an inline "Under Development" banner with a
// professional icon + modern animations (all in this file).
// ============================================================

import { useState, useEffect } from "react";
import { Construction, X, Sparkles } from "lucide-react";

// ---------- Layout / Global Components ----------
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import BackToTop from "@/components/site/BackToTop";
import RevealObserver from "@/components/RevealObserver";
import PwaRegister from "@/components/PwaRegister";

// ---------- Main Page Sections ----------
import Hero from "@/components/site/Hero";
import Marquee from "@/components/site/Marquee";
import About from "@/components/site/About";
import Programs from "@/components/site/Programs";
import Coaches from "@/components/site/Coaches";
import Fighters from "@/components/site/Fighters";
import Team from "@/components/site/Team";
import Stories from "@/components/site/Stories";
import Schedule from "@/components/site/Schedule";
import Membership from "@/components/site/Membership";
import EventDonate from "@/components/site/EventDonate";
import Gallery from "@/components/Gallery";
import Videos from "@/components/site/Videos";
import Comments from "@/components/site/Comments";
import Testimonials from "@/components/site/Testimonials";

// ---------- Contact / CTA Sections ----------
import CoachContactCard from "@/components/CoachContactCard";
import ApplyWhatsApp from "@/components/ApplyWhatsApp";
import BookContact from "@/components/site/BookContact";

// ============================================================
// UnderDevelopmentBanner
// Modern, dismissible banner shown while the site is being built.
// Remove this component + its <UnderDevelopmentBanner /> usage
// when the site goes live.
// ============================================================
function UnderDevelopmentBanner() {
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(false);

  // Slide-in animation on mount
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Keyframes scoped to the banner */}
      <style>{`
        @keyframes udGradientMove {
          0%, 100% { background-position: 0% 50%; }
          50%      { background-position: 100% 50%; }
        }
        @keyframes udPulseRing {
          0%   { transform: scale(1);   opacity: 0.6; }
          100% { transform: scale(1.8); opacity: 0; }
        }
        @keyframes udIconBob {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-2px); }
        }
        @keyframes udShine {
          0%   { transform: translateX(-120%); }
          100% { transform: translateX(220%); }
        }
      `}</style>

      {/* Sticky wrapper */}
      <div
        className={`sticky top-0 z-[60] w-full px-3 pt-3 transition-all duration-500
          ${mounted ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"}`}
      >
        {/* Animated gradient border */}
        <div
          className="relative rounded-2xl p-[1.5px] shadow-lg shadow-amber-500/20"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #f59e0b, #fbbf24, #facc15, #fbbf24, #f59e0b)",
            backgroundSize: "300% 300%",
            animation: "udGradientMove 6s ease infinite",
          }}
        >
          {/* Inner panel */}
          <div className="relative overflow-hidden rounded-2xl bg-slate-950/90 px-4 py-3 text-slate-100 backdrop-blur-xl dark:bg-slate-900/90">
            {/* Shine sweep */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 skew-x-12
                         bg-gradient-to-r from-transparent via-white/15 to-transparent"
              style={{ animation: "udShine 4s ease-in-out infinite" }}
            />

            <div className="relative flex items-center gap-3">
              {/* Icon with pulsing ring */}
              <div className="relative flex-shrink-0">
                <span
                  aria-hidden="true"
                  className="absolute inset-0 rounded-full bg-amber-400/40"
                  style={{ animation: "udPulseRing 2s ease-out infinite" }}
                />
                <div
                  className="relative flex h-9 w-9 items-center justify-center rounded-full
                             bg-gradient-to-br from-amber-400 to-orange-500
                             shadow-md shadow-amber-500/40"
                  style={{ animation: "udIconBob 2.4s ease-in-out infinite" }}
                >
                  <Construction className="h-5 w-5 text-slate-950" strokeWidth={2.5} />
                </div>
              </div>

              {/* Text */}
              <div className="min-w-0 flex-1">
                <p className="flex items-center gap-1.5 text-sm font-bold tracking-tight text-amber-300">
                  <Sparkles className="h-3.5 w-3.5" />
                  Under Development
                </p>
                <p className="truncate text-xs text-slate-300 sm:text-sm">
                  We're polishing things up — some features may not work yet. Thanks for your patience!
                </p>
              </div>

              {/* Dismiss button */}
              <button
                type="button"
                onClick={() => setVisible(false)}
                aria-label="Dismiss banner"
                className="flex-shrink-0 rounded-full p-1.5 text-slate-400
                           transition hover:bg-white/10 hover:text-white
                           focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// ============================================================
// Home – Composes every section of the landing page
// ============================================================
export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Temporary animated "Under Development" notice */}
      <UnderDevelopmentBanner />

      {/* Site header / navigation */}
      <Header />

      {/* Main page content */}
      <main>
        <Hero />            {/* Landing hero */}
        <Marquee />         {/* Scrolling announcement strip */}
        <About />           {/* About the gym / club */}
        <Programs />        {/* Training programs */}
        <Coaches />         {/* Coaches list */}
        <Fighters />        {/* Featured fighters */}
        <Team />            {/* Team overview */}
        <Stories />         {/* Success stories */}
        <Schedule />        {/* Class timetable */}
        <Membership />      {/* Pricing / plans */}
        <EventDonate />     {/* Events + donations */}
        <Gallery />         {/* Photo gallery */}
        <Videos />          {/* Video highlights */}
        <Comments />        {/* User comments */}
        <Testimonials />    {/* Testimonials */}

        {/* Contact / Call-to-action blocks */}
        <CoachContactCard />
        <ApplyWhatsApp />
        <BookContact />
      </main>

      {/* Site footer */}
      <Footer />

      {/* Floating utilities / enhancers */}
      <BackToTop />
      <RevealObserver />
      <PwaRegister />
    </div>
  );
}
