"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import learnPageScreenshot from "@/assets/Poster/learn_screen_dark.png";
import feedPageScreenshot from "@/assets/Poster/feed_screen_dark.png";
import graphPageScreenshot from "@/assets/Poster/graph_dark.png";

export default function Poster() {
  return (
    <main
      className="min-h-screen flex items-center justify-center"
      style={{ background: "#EADCC4" }}
    >
      {/* 1200×630 fixed canvas, scales down on small screens */}
      <div
        style={{
          width: 1200,
          height: 630,
          maxWidth: "100vw",
          aspectRatio: "1200/630",
          background: "#F2E8D8",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          boxShadow: "0 4px 48px rgba(31,26,23,0.14)",
        }}
      >
        {/* Grid texture */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(31,26,23,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(31,26,23,0.06) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            pointerEvents: "none",
          }}
        />

        {/* Terracotta glow — top left */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(200,85,61,0.16) 0%, transparent 70%)",
            top: -180,
            left: -140,
            pointerEvents: "none",
          }}
        />

        {/* Ochre glow — bottom right */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            width: 420,
            height: 420,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(224,164,88,0.14) 0%, transparent 70%)",
            bottom: -120,
            right: -80,
            pointerEvents: "none",
          }}
        />

        {/* ── LEFT COLUMN — text ──────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: "relative",
            zIndex: 10,
            flex: "0 0 520px",
            padding: "0 0 0 64px",
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
            <img
              src="/assets/logo.png"
              alt="ZunoScroll"
              style={{ width: 36, height: 36, filter: "drop-shadow(0 1px 3px rgba(0,0,0,0.14))" }}
            />
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, fontWeight: 700, color: "#5A4A3D" }}>
              ZunoScroll
            </span>
          </div>

          {/* Eyebrow */}
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#C8553D", margin: 0 }}>
            AI Micro-Learning &nbsp;·&nbsp; Adaptive Courses
          </p>

          {/* Headline */}
          <h1 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 54, fontWeight: 800, lineHeight: 1.06, letterSpacing: "-0.02em", color: "#1F1A17", margin: 0 }}>
            Stop{" "}
            <span style={{ color: "#C8553D" }}>Doomscrolling.</span>
            <br />
            Scroll Smarter.
          </h1>

          {/* Body */}
          <p style={{ fontSize: 15, lineHeight: 1.65, color: "#5A4A3D", margin: 0, maxWidth: 400 }}>
            Build your own adaptive course. Get{" "}
            <strong style={{ color: "#1F1A17" }}>AI-generated, bite-sized lessons</strong> and a{" "}
            <strong style={{ color: "#1F1A17" }}>personalized RSS feed</strong> for what you're learning
            — connected to the real world, one scroll at a time.
          </p>

          {/* Pills */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 4 }}>
            {[
              { emoji: "⚡", label: "Bite-sized AI Lessons" },
              { emoji: "📡", label: "Live RSS Feed" },
              { emoji: "🧠", label: "Adaptive Graph" },
            ].map(({ emoji, label }) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "5px 12px",
                  borderRadius: 999,
                  background: "#F8F1E3",
                  border: "1px solid rgba(31,26,23,0.13)",
                  fontSize: 12,
                  fontWeight: 500,
                  color: "#5A4A3D",
                }}
              >
                <span>{emoji}</span>
                {label}
              </div>
            ))}
          </div>

          {/* URL */}
          <p style={{ fontSize: 11, color: "#8C7A68", fontFamily: "monospace", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 8 }}>
            zunoscroll.com
          </p>
        </motion.div>

        {/* ── RIGHT COLUMN — phones ───────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: 580,
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            gap: 16,
            paddingBottom: 40,
            overflow: "hidden",
          }}
        >
          {/* Left phone — Feed */}
          <div
            style={{
              width: 148,
              flexShrink: 0,
              borderRadius: 26,
              overflow: "hidden",
              border: "1px solid rgba(31,26,23,0.13)",
              boxShadow: "0 8px 32px rgba(31,26,23,0.12)",
              transform: "rotate(-4deg) translateY(10px)",
              alignSelf: "flex-end",
            }}
          >
            <Image src={feedPageScreenshot} alt="Personalized RSS Feed" quality={90} />
          </div>

          {/* Centre phone — Learn */}
          <div
            style={{
              width: 196,
              flexShrink: 0,
              borderRadius: 32,
              overflow: "hidden",
              border: "2px solid rgba(31,26,23,0.16)",
              boxShadow: "0 20px 56px rgba(31,26,23,0.18)",
              alignSelf: "flex-end",
            }}
          >
            <Image src={learnPageScreenshot} alt="Bite-sized AI Learning" quality={95} priority />
          </div>

          {/* Right phone — Graph */}
          <div
            style={{
              width: 148,
              flexShrink: 0,
              borderRadius: 26,
              overflow: "hidden",
              border: "1px solid rgba(31,26,23,0.13)",
              boxShadow: "0 8px 32px rgba(31,26,23,0.12)",
              transform: "rotate(4deg) translateY(10px)",
              alignSelf: "flex-end",
            }}
          >
            <Image src={graphPageScreenshot} alt="Adaptive Learning Graph" quality={90} />
          </div>
        </motion.div>

        {/* Vertical rule between columns */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            left: 560,
            top: 48,
            bottom: 48,
            width: 1,
            background: "rgba(31,26,23,0.08)",
          }}
        />
      </div>
    </main>
  );
}

