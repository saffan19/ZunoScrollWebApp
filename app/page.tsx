"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import viewCreationScreenshot from "@/assets/Screenshots/View_Creation_Page.png";
import topicSelectionScreenshot from "@/assets/Screenshots/Topics selection Page.png";
import assessmentScreenshot from "@/assets/Screenshots/Assesment_Page.png";
import learningPathCreationScreenshot from "@/assets/Screenshots/Learning_path_Creation_Page.png";
import libraryDarkScreenshot from "@/assets/Screenshots/LibraryPage_dark.png";
import libraryLightScreenshot from "@/assets/Screenshots/LibraryPage_light.png";
import learnPageScreenshot from "@/assets/Screenshots/Learn_Page.png";
import learningOptionScreenshot from "@/assets/Screenshots/Learn_Option_Page.png";
import feedPageScreenshot from "@/assets/Screenshots/Feed_page.png";
import graphPageScreenshot from "@/assets/Screenshots/Graph_page.png";
import graphSharePageScreenshot from "@/assets/Screenshots/Graph_Share_page.png";
import audioZoomedScreenshot from "@/assets/Screenshots/audio_Zoomed.png";
import learnOnYoutubeScreenshot from "@/assets/Screenshots/Learn_On_Youtube.png";
import youtubButtonscreenshot from "@/assets/Screenshots/Youtube_Button.png";

type AppJourneyStep = {
  id: string; number: string; title: string; caption: string;
  highlight: string; tag: string; image: StaticImageData; alt: string;
  miniPreview?: StaticImageData; audioZoom?: StaticImageData; youtubeScreen?: StaticImageData;
};

// ── Constellation SVG decoration ──────────────────────────────────────────────
const Constellation = ({ className = "" }: { className?: string }) => (
  <svg width="70" height="60" viewBox="0 0 70 60" fill="none" className={className} aria-hidden>
    <line x1="10" y1="10" x2="40" y2="20" stroke="#E0A458" strokeWidth="0.8" opacity="0.3"/>
    <line x1="40" y1="20" x2="60" y2="8" stroke="#E0A458" strokeWidth="0.8" opacity="0.3"/>
    <line x1="40" y1="20" x2="50" y2="42" stroke="#E0A458" strokeWidth="0.8" opacity="0.3"/>
    <line x1="50" y1="42" x2="22" y2="50" stroke="#E0A458" strokeWidth="0.8" opacity="0.3"/>
    <circle cx="10" cy="10" r="2.5" fill="#E0A458" opacity="0.6"/>
    <circle cx="40" cy="20" r="2.5" fill="#E0A458" opacity="0.6"/>
    <circle cx="60" cy="8" r="2.5" fill="#E0A458" opacity="0.6"/>
    <circle cx="50" cy="42" r="2.5" fill="#E0A458" opacity="0.6"/>
    <circle cx="22" cy="50" r="2.5" fill="#E0A458" opacity="0.6"/>
  </svg>
);

// ── Concentric circles decoration ─────────────────────────────────────────────
const ConcentricCircles = ({ className = "" }: { className?: string }) => (
  <svg width="120" height="120" viewBox="0 0 100 100" fill="none" className={className} aria-hidden>
    <circle cx="50" cy="50" r="15" stroke="currentColor" strokeWidth="1" opacity="0.14"/>
    <circle cx="50" cy="50" r="28" stroke="currentColor" strokeWidth="1" opacity="0.14"/>
    <circle cx="50" cy="50" r="41" stroke="currentColor" strokeWidth="1" opacity="0.14"/>
    <circle cx="50" cy="50" r="54" stroke="currentColor" strokeWidth="1" opacity="0.14"/>
  </svg>
);

// ── Stream cover art (generative) ─────────────────────────────────────────────
const COVER_PALETTES = [
  { bg: "#C8553D", fg: "#F2E8D8", accent: "#E0A458" },
  { bg: "#E0A458", fg: "#1F1A17", accent: "#C8553D" },
  { bg: "#88A096", fg: "#1F1A17", accent: "#E0A458" },
  { bg: "#1F1A17", fg: "#F2E8D8", accent: "#E0A458" },
  { bg: "#5A4A3D", fg: "#F2E8D8", accent: "#C8553D" },
  { bg: "#A8412C", fg: "#F2E8D8", accent: "#E0A458" },
];
function hashStr(s: string) {
  return s.split("").reduce((h, c) => ((h << 5) - h + c.charCodeAt(0)) & 0x7fffffff, 0);
}
const StreamCoverCard = ({ title, category }: { title: string; category: string }) => {
  const h = hashStr(title);
  const pal = COVER_PALETTES[h % 6];
  return (
    <div className="rounded-[12px] overflow-hidden w-[150px] flex-shrink-0 border" style={{ borderColor: "var(--rule)", background: pal.bg }}>
      <div className="relative w-full h-[100px]" style={{ background: pal.bg }}>
        <div className="absolute inset-0 opacity-[0.22]" style={{
          backgroundImage: `repeating-linear-gradient(45deg, ${pal.fg} 0 1px, transparent 0 8px)`,
        }} />
        <div className="absolute top-3 right-3 w-7 h-7 rounded-full" style={{ background: pal.accent }} />
        <div className="absolute bottom-2 left-2 px-2 py-1 rounded-[3px]" style={{ background: "#F2E8D8" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 7, color: pal.bg, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.08em" }}>STREAM</span>
        </div>
        <div className="absolute bottom-2 left-8 px-2 py-1" style={{ background: "#F2E8D8" }}>
          <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 13, color: pal.bg }}>
            {title.split(" ").map(w => w[0]).slice(0,2).join("").toUpperCase()}
          </span>
        </div>
      </div>
      <div className="px-3 pt-2 pb-3" style={{ background: "var(--card-bg)" }}>
        <p style={{ fontFamily: "var(--font-serif)", fontSize: 13, color: "var(--ink)", lineHeight: 1.3, marginBottom: 2 }}>{title}</p>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: 10, color: "var(--ink-mute)" }}>{category}</p>
      </div>
    </div>
  );
};

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const appJourneySteps: AppJourneyStep[] = [
    { id: "create-view", number: "01", title: "Create your learning view", caption: "Start with any niche topic you care about. From exam prep to startup strategy, every journey begins with one custom view.", highlight: "Infinite possibilities, one focused start.", tag: "View Creation", image: viewCreationScreenshot, alt: "ZunoScroll view creation page" },
    { id: "topic-selection", number: "02", title: "Select what matters most", caption: "Pick the exact sub-topics you want to master so the AI can shape a focused stream instead of generic content.", highlight: "Precision over noise.", tag: "Topic Selection", image: topicSelectionScreenshot, alt: "ZunoScroll topic selection page" },
    { id: "assessment", number: "03", title: "Take a quick assessment", caption: "A short assessment helps ZunoScroll understand your current level and generate the right learning depth from day one.", highlight: "Personalized from your first session.", tag: "Assessment", image: assessmentScreenshot, alt: "ZunoScroll assessment page" },
    { id: "learning-path", number: "04", title: "Generate your AI learning path", caption: "Your path is created automatically with clear progression so you always know what to learn next.", highlight: "Smart sequencing for faster progress.", tag: "Learning Path", image: learningPathCreationScreenshot, alt: "ZunoScroll learning path creation page" },
    { id: "library", number: "05", title: "Land in your Library home", caption: "The Library becomes your command center: all your created views plus hand-picked curated views ready to explore.", highlight: "Your personal and curated knowledge hub.", tag: "Library Home", image: libraryDarkScreenshot, alt: "ZunoScroll library page dark theme", miniPreview: libraryLightScreenshot },
    { id: "learn-page", number: "06", title: "Learn with context and control", caption: "Open any view to access the Learn screen with deep, focused cards. Use audio playback and quickly switch between Learn, Revise, and Saved.", highlight: "Read, listen, revise — all in one flow.", tag: "Learn Experience", image: learnPageScreenshot, alt: "ZunoScroll learn page", audioZoom: audioZoomedScreenshot },
    { id: "learn-on-youtube", number: "07", title: "Go deeper with curated YouTube videos", caption: "Every learn card surfaces a curated YouTube video so you can dive deeper into the topic when you want more than text. Watch, learn, and keep scrolling — all in one place.", highlight: "From reading to watching, without leaving your flow.", tag: "Learn on YouTube", image: learnOnYoutubeScreenshot, alt: "ZunoScroll learn on YouTube", youtubeScreen: youtubButtonscreenshot },
    { id: "learning-options", number: "08", title: "Move between Learn, Revise, Saved", caption: "Switching modes keeps momentum high: learn new concepts, revise intelligently, and keep your best insights bookmarked.", highlight: "Three modes, one compounding habit.", tag: "Learning Options", image: learningOptionScreenshot, alt: "ZunoScroll learning options page" },
    { id: "feed", number: "09", title: "Stay current with real-world updates", caption: "Your Feed pulls relevant RSS posts and blogs based on what you are learning, so theory stays connected to what is happening now.", highlight: "AI learning meets live web intelligence.", tag: "Feeds", image: feedPageScreenshot, alt: "ZunoScroll feed page" },
    { id: "graph", number: "10", title: "Visualize your growth graph", caption: "Track consistency, depth, and progress in a clean learning graph that makes your effort visible every day.", highlight: "Progress you can see and trust.", tag: "Graph", image: graphPageScreenshot, alt: "ZunoScroll learning graph page" },
    { id: "graph-share", number: "11", title: "Share your learning momentum", caption: "Use built-in sharing to celebrate milestones and show your learning streak to friends, peers, or your community.", highlight: "Turn progress into social proof.", tag: "Graph Share", image: graphSharePageScreenshot, alt: "ZunoScroll graph sharing page" },
  ];

  const prefersReducedMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useSpring(useTransform(heroProgress, [0, 1], [0, prefersReducedMotion ? 0 : -40]), { stiffness: 120, damping: 28 });
  const heroOpacity = useTransform(heroProgress, [0, 0.85], [1, prefersReducedMotion ? 1 : 0.82]);

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Why ZunoScroll", href: "#benefits" },
    { label: "Download", href: "#download" },
  ];

  const features = [
    { tag: "Core", title: "Learn Anything — AI Personalized", body: "Describe any topic and get a structured learning path built just for you. No templates — real, adaptive AI curation.", accent: "terracotta" },
    { tag: "Discovery", title: "Live RSS Feeds Per Topic", body: "Every view includes a live feed of blogs, news, and industry updates curated by AI. Theory meets the real world.", accent: "ochre" },
    { tag: "Habit", title: "Anti-Doomscroll Design", body: "Micro-lessons designed for mobile scrolling. Replace 2 hrs of mindless scrolling with genuine learning — effortlessly.", accent: "sage" },
    { tag: "Focus", title: "Bite-Sized Micro-Learning", body: "Short, focused cards optimized for retention. Learn during a commute, coffee break, or any spare 5 minutes.", accent: "terracotta" },
    { tag: "Hands-free", title: "Audio Mode & Auto-Scroll", body: "Listen instead of reading. Auto-scroll hands-free so you can learn while commuting, cooking, or exercising.", accent: "ochre" },
    { tag: "Progress", title: "Visual Learning Graph", body: "Track streaks, depth, and consistency on a beautiful graph. Your progress is visible, measurable, and shareable.", accent: "sage" },
  ];

  const benefits = [
    { title: "Adaptive AI learning path", body: "Your path evolves with your pace, knowledge level, and goals — automatically." },
    { title: "Real-world relevance via RSS", body: "Live feeds keep your learning connected to current events and industry changes." },
    { title: "Learn anywhere, hands-free", body: "Audio mode and auto-scroll let you upskill without ever looking at your screen." },
    { title: "Revise & retain with spaced repetition", body: "Smart revision mode surfaces forgotten concepts at the right time." },
    { title: "Multi-theme: Parchment, Light, Dark", body: "Switch between beautiful themes that match your reading environment." },
    { title: "Share your learning graph", body: "Celebrate milestones and show off your streak to your community." },
  ];

  return (
    <main style={{ background: "var(--paper)", minHeight: "100vh" }}>

      {/* ── NAV ──────────────────────────────────────────────────────────── */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{ background: "rgba(242,232,216,0.88)", borderBottom: "1px solid var(--rule)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}
        className="fixed top-0 w-full z-50"
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <img src="/assets/logo.png" alt="ZunoScroll" className="w-8 h-8" onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/32x32?text=Z"; }} />
            <span style={{ fontFamily: "var(--font-serif)", fontSize: 18, color: "var(--ink)", fontStyle: "italic" }}>ZunoScroll</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map(l => (
              <a key={l.label} href={l.href} style={{ fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 500, color: "var(--ink-soft)", textDecoration: "none", transition: "color 220ms" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--terracotta)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--ink-soft)")}>
                {l.label}
              </a>
            ))}
            <Link href="/contact" style={{ fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 500, color: "var(--ink-soft)", textDecoration: "none", transition: "color 220ms" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--terracotta)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--ink-soft)")}>
              Contact
            </Link>
            <a href="#download" className="btn-primary" style={{ fontSize: 13, padding: "8px 18px" }}>Get the App</a>
          </div>

          {/* Mobile hamburger */}
          <button className="md:hidden p-2 rounded-btn" style={{ color: "var(--ink)" }} onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              {mobileMenuOpen
                ? <><line x1="3" y1="3" x2="17" y2="17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/><line x1="17" y1="3" x2="3" y2="17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></>
                : <><line x1="3" y1="6" x2="17" y2="6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/><line x1="3" y1="10" x2="17" y2="10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/><line x1="3" y1="14" x2="17" y2="14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></>}
            </svg>
          </button>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.18 }}
            style={{ background: "var(--paper-soft)", borderTop: "1px solid var(--rule)", padding: "12px 20px 16px" }}>
            {navLinks.map(l => (
              <a key={l.label} href={l.href} onClick={() => setMobileMenuOpen(false)}
                style={{ display: "block", padding: "10px 0", fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 500, color: "var(--ink-soft)", borderBottom: "1px solid var(--rule)", textDecoration: "none" }}>
                {l.label}
              </a>
            ))}
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}
              style={{ display: "block", padding: "10px 0", fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 500, color: "var(--ink-soft)", borderBottom: "1px solid var(--rule)", textDecoration: "none" }}>
              Contact
            </Link>
            <a href="#download" onClick={() => setMobileMenuOpen(false)} className="btn-primary" style={{ marginTop: 12, width: "100%", justifyContent: "center" }}>Get the App</a>
          </motion.div>
        )}
      </motion.nav>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative overflow-hidden" style={{ background: "var(--ink)", paddingTop: 80 }}>
        {/* subtle dot grid */}
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(242,232,216,0.07) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

        {/* Decorative constellation top-right */}
        <Constellation className="absolute top-16 right-10 opacity-60 hidden lg:block" />

        <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-20 pb-0">
          <div className="grid lg:grid-cols-2 gap-16 items-end">

            {/* Left — copy */}
            <motion.div style={{ y: heroY, opacity: heroOpacity }} className="pb-16 lg:pb-24">
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.1 }}>
                <span className="badge-ochre mb-5 inline-block">✦ for learners everywhere</span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.18 }}
                style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.4rem,5vw,3.8rem)", lineHeight: 1.08, color: "var(--paper)", letterSpacing: "-0.02em", marginBottom: 20 }}>
                Learn Anything with<br />
                <em style={{ color: "var(--terracotta-l)" }}>AI Micro-Learning</em>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.28 }}
                style={{ fontFamily: "var(--font-sans)", fontSize: 16, lineHeight: 1.7, color: "rgba(242,232,216,0.72)", maxWidth: 460, marginBottom: 32 }}>
                Replace doomscrolling with AI-generated, bite-sized lessons and live RSS feeds. Build a personalized learning path, learn hands-free with audio mode, and upskill anywhere — one smart scroll at a time.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.38 }}
                className="flex flex-col sm:flex-row gap-3">
                <a href="#download" className="btn-primary" style={{ fontSize: 14, padding: "12px 28px", borderRadius: 12 }}>
                  Download Free
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
                <a href="#how-it-works" className="btn-ghost" style={{ fontSize: 14, padding: "12px 28px", borderRadius: 12, borderColor: "rgba(242,232,216,0.2)", color: "rgba(242,232,216,0.75)", background: "transparent" }}>
                  See How It Works
                </a>
              </motion.div>

            </motion.div>

            {/* Right — phone + floating stream cards */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3, ease: [0.22,1,0.36,1] }}
              className="relative flex justify-center lg:justify-end pb-0 lg:pb-0">

              {/* floating progress card */}
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-0 top-12 z-20 hidden lg:block" style={{ background: "var(--card-bg)", border: "1px solid var(--rule)", borderRadius: 14, padding: "12px 16px", boxShadow: "0 8px 32px rgba(0,0,0,0.2)", minWidth: 160 }}>
                <p className="supertitle mb-2">TODAY'S PROGRESS</p>
                <div className="flex justify-between items-baseline mb-1">
                  <span style={{ fontFamily: "var(--font-serif)", fontSize: 22, color: "var(--terracotta)", fontWeight: 400 }}>24</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--ink-mute)" }}>POSTS</span>
                </div>
                <div style={{ height: 5, background: "var(--rule)", borderRadius: 8, overflow: "hidden", marginBottom: 6 }}>
                  <div style={{ height: "100%", width: "72%", background: "var(--terracotta)", borderRadius: 8 }} />
                </div>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 11, color: "var(--ink-mute)" }}>🔥 12-day streak</p>
              </motion.div>

              {/* Phone mockup */}
              <div className="phone-frame relative z-10" style={{ width: 230, height: 470 }}>
                <Image src={libraryDarkScreenshot} alt="ZunoScroll Library" fill className="object-cover" priority />
              </div>

              {/* floating stream card */}
              <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                className="absolute right-0 bottom-20 z-20 hidden lg:block">
                <StreamCoverCard title="Machine Learning" category="AI & Tech" />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* wave transition to paper */}
        <div style={{ marginTop: -2 }}>
          <svg viewBox="0 0 1440 56" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%" }}>
            <path d="M0 56 L0 28 Q360 0 720 28 Q1080 56 1440 28 L1440 56 Z" fill="#F2E8D8"/>
          </svg>
        </div>
      </section>

      {/* ── STREAM CARDS MARQUEE ─────────────────────────────────────────── */}
      <section style={{ background: "var(--paper)", padding: "32px 0", overflow: "hidden" }}>
        <p className="supertitle text-center mb-5">LEARN ANYTHING</p>
        <div className="flex flex-wrap gap-4 justify-center px-6 pb-2">
          {[
            ["Machine Learning","AI & Tech"],["Stoic Philosophy","Philosophy"],["Startup Strategy","Business"],
            ["Astrophysics","Science"],["UX Design","Design"],["Behavioral Finance","Finance"],
            ["Deep Work","Productivity"],["History of Rome","History"],["Quantum Computing","Science"],
          ].map(([t, c]) => <StreamCoverCard key={t} title={t} category={c} />)}
        </div>
      </section>

      {/* ── YOUTUBE ──────────────────────────────────────────────────────── */}
      <section style={{ background: "var(--paper-deep)", padding: "80px 20px" }}>
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-10">
            <p className="supertitle mb-3">WATCH THE APP</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.8rem,4vw,2.8rem)", color: "var(--ink)", lineHeight: 1.1 }}>
              See <span className="serif-underline" style={{ color: "var(--terracotta)" }}>ZunoScroll</span> in Action
            </h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="relative w-full rounded-[18px] overflow-hidden" style={{ aspectRatio: "16/9", border: "1px solid var(--rule)", boxShadow: "0 16px 48px rgba(31,26,23,0.12)" }}>
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/8Knmo4SWZ3k?si=9NkhUj5PoVjwaNJa"
              title="ZunoScroll — AI Micro-Learning App" frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin" allowFullScreen
              className="absolute inset-0 w-full h-full" />
          </motion.div>
        </div>
      </section>

      {/* ── FEATURES ─────────────────────────────────────────────────────── */}
      <section id="features" style={{ background: "var(--paper)", padding: "80px 20px" }}>
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-14">
            <p className="supertitle mb-3">FEATURES</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.8rem,4vw,2.8rem)", color: "var(--ink)", lineHeight: 1.1, marginBottom: 12 }}>
              Built to <span className="serif-underline-ochre">Learn Smarter</span>, Not Longer
            </h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, color: "var(--ink-soft)", maxWidth: 520, margin: "0 auto" }}>
              AI micro-learning, live RSS feeds, and adaptive paths — everything you need to upskill productively.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => {
              const accentColor = f.accent === "terracotta" ? "var(--terracotta)" : f.accent === "ochre" ? "var(--ochre)" : "var(--sage)";
              const accentBg = f.accent === "terracotta" ? "rgba(200,85,61,0.10)" : f.accent === "ochre" ? "rgba(224,164,88,0.12)" : "rgba(136,160,150,0.12)";
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.07 }} whileHover={{ y: -4, transition: { duration: 0.18 } }}
                  className="zuno-card">
                  <span className="badge-terra" style={{ background: accentBg, color: accentColor, marginBottom: 14, display: "inline-block" }}>{f.tag}</span>
                  <h3 style={{ fontFamily: "var(--font-sans)", fontSize: 16, fontWeight: 700, color: "var(--ink)", marginBottom: 8, letterSpacing: "-0.3px" }}>{f.title}</h3>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--ink-soft)", lineHeight: 1.65 }}>{f.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS / APP JOURNEY ──────────────────────────────────── */}
      <section id="how-it-works" style={{ background: "var(--paper-deep)", padding: "80px 20px" }}>
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-14">
            <p className="supertitle mb-3">THE FULL JOURNEY</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.8rem,4vw,2.8rem)", color: "var(--ink)", lineHeight: 1.1, marginBottom: 12 }}>
              Inside <span className="serif-underline" style={{ color: "var(--terracotta)" }}>ZunoScroll</span>
            </h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, color: "var(--ink-soft)", maxWidth: 540, margin: "0 auto" }}>
              Follow the full path — from your first custom view to live feeds, deep sessions, and shareable graphs.
            </p>
          </motion.div>

          <div className="space-y-10">
            {appJourneySteps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.article key={step.id}
                  initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.6, ease: [0.22,1,0.36,1], delay: index * 0.04 }}
                  className="zuno-card" style={{ padding: "32px 28px" }}>
                  <div className={`flex flex-col gap-10 lg:gap-14 items-center ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}`}>

                    {/* Text side */}
                    <div className="w-full lg:w-1/2">
                      <div className="flex items-center gap-3 mb-5">
                        <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 700, color: "#F2E8D8", background: "var(--terracotta)", borderRadius: "50%", width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center" }}>
                          {step.number}
                        </span>
                        <span className="badge-sage">{step.tag}</span>
                      </div>
                      <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.5rem,3vw,2rem)", color: "var(--ink)", lineHeight: 1.15, marginBottom: 12 }}>{step.title}</h3>
                      <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, color: "var(--ink-soft)", lineHeight: 1.7, marginBottom: 14 }}>{step.caption}</p>
                      <p style={{ fontFamily: "var(--font-script)", fontSize: 17, color: "var(--terracotta)", fontWeight: 600 }}>✦ {step.highlight}</p>
                    </div>

                    {/* Phone side */}
                    <div className="w-full lg:w-1/2 flex justify-center">
                      <div className="relative" style={{ width: 240 }}>
                        <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                          className="phone-frame relative" style={{ width: 240, height: 490 }}>
                          <Image src={step.image} alt={step.alt} fill className="object-cover" sizes="240px" priority={index < 2} />
                          {/* notch */}
                          <div className="absolute top-3 left-1/2 -translate-x-1/2 z-20" style={{ width: 48, height: 5, background: "rgba(31,26,23,0.5)", borderRadius: 3 }} />
                        </motion.div>

                        {step.miniPreview && (
                          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} animate={{ y: [0, -4, 0] }}
                            viewport={{ once: true }} transition={{ y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }, opacity: { duration: 0.4, delay: 0.2 } }}
                            className="absolute -right-6 top-10 z-20 phone-frame overflow-hidden" style={{ width: 80, borderRadius: 16 }}>
                            <Image src={step.miniPreview} alt="Light theme preview" className="w-full h-auto" />
                          </motion.div>
                        )}

                        {step.audioZoom && (
                          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} animate={{ y: [0, -5, 0] }}
                            viewport={{ once: true }} transition={{ y: { duration: 5, repeat: Infinity, ease: "easeInOut" }, opacity: { duration: 0.4, delay: 0.15 } }}
                            className="absolute left-[-12px] right-[-12px] z-20 overflow-hidden" style={{ bottom: "72px", borderRadius: 14, border: "1px solid var(--rule)", boxShadow: "0 8px 24px rgba(31,26,23,0.15)" }}>
                            <Image src={step.audioZoom} alt="Audio controls" className="w-full h-auto" />
                          </motion.div>
                        )}

                        {step.youtubeScreen && (
                          <motion.div initial={{ opacity: 0, scale: 0.92 }} whileInView={{ opacity: 1, scale: 2 }}
                            viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.2 }}
                            className="absolute bottom-[65px] right-[18px] z-20" style={{ width: 90 }}>
                            <Image src={step.youtubeScreen} alt="Watch on YouTube" className="w-full h-auto drop-shadow-lg" />
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── BENEFITS ─────────────────────────────────────────────────────── */}
      <section id="benefits" style={{ background: "var(--paper)", padding: "80px 20px" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
              <p className="supertitle mb-4">WHY ZUNOSCROLL</p>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.8rem,4vw,2.8rem)", color: "var(--ink)", lineHeight: 1.1, marginBottom: 16 }}>
                The <span className="serif-underline-sage">Anti-Doomscroll</span><br />Learning Experience
              </h2>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, color: "var(--ink-soft)", lineHeight: 1.7, marginBottom: 32, maxWidth: 440 }}>
                Stop wasting hours on meaningless content. ZunoScroll turns the same scrolling habit into deep, structured learning — powered by AI and real-time RSS feeds.
              </p>
              <a href="#download" className="btn-primary" style={{ fontSize: 14, padding: "13px 30px", borderRadius: 12 }}>
                Start Learning Free
              </a>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((b, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }} whileHover={{ y: -3, transition: { duration: 0.18 } }}
                  className="zuno-card" style={{ padding: "16px" }}>
                  <div className="flex items-start gap-3">
                    <div style={{ width: 28, height: 28, borderRadius: "50%", background: "rgba(200,85,61,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="#C8553D" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <div>
                      <p style={{ fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 600, color: "var(--ink)", marginBottom: 4, letterSpacing: "-0.2px" }}>{b.title}</p>
                      <p style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "var(--ink-mute)", lineHeight: 1.6 }}>{b.body}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── DOWNLOAD / CTA ────────────────────────────────────────────────── */}
      <section id="download" className="relative overflow-hidden" style={{ background: "var(--ink)", padding: "80px 20px" }}>
        <Constellation className="absolute top-10 right-16 opacity-50 hidden lg:block" />
        <ConcentricCircles className="absolute bottom-0 left-0 text-white opacity-20" />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
            <span className="badge-ochre mb-6 inline-block">✦ Available on Android &amp; iOS</span>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem,5vw,3.2rem)", color: "var(--paper)", lineHeight: 1.1, marginBottom: 16 }}>
              Learn Anything.<br />
              <em style={{ color: "var(--terracotta-l)" }}>Start Today, Free.</em>
            </h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, color: "rgba(242,232,216,0.65)", marginBottom: 36, lineHeight: 1.7, maxWidth: 480, margin: "0 auto 36px" }}>
              Join learners replacing doomscrolling with bite-sized micro-learning, adaptive AI paths, and live RSS updates.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Play Store */}
              <motion.a href="https://play.google.com/store/apps/details?id=com.zunoscroll.app" target="_blank" rel="noopener noreferrer"
                whileHover={{ y: -2, transition: { duration: 0.18 } }} whileTap={{ scale: 0.97 }}
                style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "var(--terracotta)", color: "#fff", borderRadius: 12, padding: "14px 28px", fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 14, textDecoration: "none", transition: "background 220ms" }}>
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.18 23.76a2 2 0 0 0 2.07-.22l11.4-6.58-2.53-2.54zM.5 1.6A2 2 0 0 0 0 3v18a2 2 0 0 0 .5 1.4l.07.07 10.08-10.08v-.24L.57 1.53zM20.3 10.37l-2.88-1.66-2.84 2.84 2.84 2.84 2.9-1.67a2 2 0 0 0 0-3.35zm-18.1 12L13.6 11l-2.53-2.53z"/>
                </svg>
                <span>Download on<br /><strong>Google Play</strong></span>
              </motion.a>

              {/* App Store */}
              <motion.a href="https://apps.apple.com/in/app/zunoscroll/id6764331858" target="_blank" rel="noopener noreferrer"
                whileHover={{ y: -2, transition: { duration: 0.18 } }} whileTap={{ scale: 0.97 }}
                style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "rgba(242,232,216,0.08)", color: "var(--paper)", border: "1px solid rgba(242,232,216,0.2)", borderRadius: 12, padding: "14px 28px", fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 14, textDecoration: "none", transition: "background 220ms, border-color 220ms" }}>
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <span>Download on<br /><strong>App Store</strong></span>
              </motion.a>
            </div>

            {/* dotted rule */}
            <div className="dotted-rule mt-14 mb-8" style={{ borderColor: "rgba(242,232,216,0.12)" }} />
            <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "rgba(242,232,216,0.35)", letterSpacing: "0.1em" }}>FREE · ANDROID &amp; iOS</p>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────────────────── */}
      <footer style={{ background: "var(--paper-deep)", borderTop: "1px solid var(--rule)", padding: "48px 20px 32px" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <img src="/assets/logo.png" alt="ZunoScroll" className="w-8 h-8" onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/32?text=Z"; }} />
                <span style={{ fontFamily: "var(--font-serif)", fontSize: 16, fontStyle: "italic", color: "var(--ink)" }}>ZunoScroll</span>
              </div>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--ink-mute)", lineHeight: 1.65 }}>
                AI micro-learning · Live RSS feeds · Learn anything, anywhere.
              </p>
            </div>
            <div>
              <p className="supertitle mb-4">PRODUCT</p>
              {["#features","#how-it-works","#benefits"].map((h,i) => (
                <a key={i} href={h} style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--ink-soft)", marginBottom: 8, textDecoration: "none", transition: "color 220ms" }}
                  onMouseEnter={e=>(e.currentTarget.style.color="var(--terracotta)")}
                  onMouseLeave={e=>(e.currentTarget.style.color="var(--ink-soft)")}>
                  {["Features","How It Works","Why ZunoScroll"][i]}
                </a>
              ))}
            </div>
            <div>
              <p className="supertitle mb-4">DOWNLOAD</p>
              <a href="https://play.google.com/store/apps/details?id=com.zunoscroll.app" target="_blank" rel="noopener noreferrer"
                style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--ink-soft)", marginBottom: 8, textDecoration: "none", transition: "color 220ms" }}
                onMouseEnter={e=>(e.currentTarget.style.color="var(--terracotta)")}
                onMouseLeave={e=>(e.currentTarget.style.color="var(--ink-soft)")}>Google Play</a>
              <a href="https://apps.apple.com/in/app/zunoscroll/id6764331858" target="_blank" rel="noopener noreferrer"
                style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--ink-soft)", textDecoration: "none", transition: "color 220ms" }}
                onMouseEnter={e=>(e.currentTarget.style.color="var(--terracotta)")}
                onMouseLeave={e=>(e.currentTarget.style.color="var(--ink-soft)")}>App Store</a>
            </div>
            <div>
              <p className="supertitle mb-4">LEGAL</p>
              <Link href="/privacy-policy" style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--ink-soft)", marginBottom: 8, textDecoration: "none", transition: "color 220ms" }}
                onMouseEnter={e=>(e.currentTarget.style.color="var(--terracotta)")}
                onMouseLeave={e=>(e.currentTarget.style.color="var(--ink-soft)")}>Privacy Policy</Link>
              <Link href="/terms-of-use" style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--ink-soft)", marginBottom: 8, textDecoration: "none", transition: "color 220ms" }}
                onMouseEnter={e=>(e.currentTarget.style.color="var(--terracotta)")}
                onMouseLeave={e=>(e.currentTarget.style.color="var(--ink-soft)")}>Terms of Use</Link>
              <Link href="/contact" style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--ink-soft)", textDecoration: "none", transition: "color 220ms" }}
                onMouseEnter={e=>(e.currentTarget.style.color="var(--terracotta)")}
                onMouseLeave={e=>(e.currentTarget.style.color="var(--ink-soft)")}>Contact</Link>
            </div>
          </div>

          <div className="dotted-rule mb-6" />
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
            <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--ink-mute)", letterSpacing: "0.08em" }}>© 2026 ZUNOSCROLL — ALL RIGHTS RESERVED</p>
            <p style={{ fontFamily: "var(--font-script)", fontSize: 14, color: "var(--terracotta)", fontWeight: 600 }}>Made for learners everywhere ✦</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
