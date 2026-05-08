"use client";

import { motion } from "framer-motion";
import { FileText, ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export default function TermsOfUse() {
  return (
    <main className="min-h-screen" style={{ background: "var(--paper)", color: "var(--ink)" }}>
      {/* Navigation */}
      <nav
        className="fixed top-0 w-full backdrop-blur-md z-50"
        style={{ background: "rgba(242,232,216,0.88)", borderBottom: "1px solid var(--rule)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <img
                src="/assets/logo.png"
                alt="ZunoScroll Logo"
                className="w-14 h-14"
                style={{ filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.12))" }}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "https://via.placeholder.com/56x56?text=Z";
                }}
              />
              <span
                className="text-2xl font-bold"
                style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--ink)" }}
              >
                ZunoScroll
              </span>
            </Link>
            <Link
              href="/"
              className="flex items-center space-x-2 transition-colors"
              style={{ color: "var(--ink-soft)" } as React.CSSProperties}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Header */}
            <div className="mb-10 flex items-start gap-4">
              <div
                className="mt-1 p-3 rounded-xl flex-shrink-0"
                style={{ background: "var(--terracotta)", color: "#fff" }}
              >
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h1
                  className="text-4xl font-bold tracking-tight"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--ink)" }}
                >
                  Terms of Use
                </h1>
                <p className="mt-1 text-sm" style={{ color: "var(--ink-mute)" }}>
                  Effective date: May 7, 2026 &nbsp;·&nbsp; ZunoScroll
                </p>
              </div>
            </div>

            {/* ── Apple EULA Banner — PROMINENT ── */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mb-10 rounded-[14px] p-6"
              style={{
                background: "var(--terracotta)",
                color: "#fff",
              }}
            >
              <p className="text-xs font-semibold uppercase tracking-widest mb-2 opacity-80">
                End User License Agreement (EULA)
              </p>
              <p className="text-lg font-semibold leading-snug mb-3">
                By downloading or using ZunoScroll, you agree to be bound by the&nbsp;
                <strong>Apple Standard End User License Agreement (EULA)</strong>.
              </p>
              <a
                href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-opacity hover:opacity-80"
                style={{ background: "rgba(255,255,255,0.2)", color: "#fff", border: "1px solid rgba(255,255,255,0.35)" }}
              >
                View Apple Standard EULA
                <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Sections */}
            <div className="space-y-8">

              {/* 1. Introduction */}
              <Section title="1. Introduction">
                <p>
                  These Terms of Use ("Terms") govern your access to and use of the <strong>ZunoScroll</strong>{" "}
                  mobile application and any related services provided by ZunoScroll ("we," "us," or "our"). By
                  accessing or using the app, you agree to be bound by these Terms. If you do not agree, please
                  do not use the app.
                </p>
              </Section>

              {/* 2. EULA */}
              <Section title="2. End User License Agreement (EULA)">
                <p>
                  ZunoScroll is licensed to you under the{" "}
                  <a
                    href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold inline-flex items-center gap-1 underline underline-offset-2 transition-opacity hover:opacity-70"
                    style={{ color: "var(--terracotta)" }}
                  >
                    Apple Standard End User License Agreement (EULA)
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  . That agreement is incorporated herein by reference. In the event of any conflict between
                  these Terms and the Apple EULA, the Apple EULA shall govern with respect to App Store usage.
                </p>
              </Section>

              {/* 3. Subscriptions */}
              <Section title="3. Subscriptions">
                <p>
                  ZunoScroll offers <strong>auto-renewable subscriptions</strong> that unlock premium features
                  within the app. The following terms apply to all subscription purchases:
                </p>
                <ul className="mt-3 space-y-2 list-none pl-0">
                  {[
                    "Payment will be charged to your iTunes Account at confirmation of purchase.",
                    "Subscriptions automatically renew unless auto-renew is turned off at least 24 hours before the end of the current subscription period.",
                    "Your account will be charged for renewal within 24 hours prior to the end of the current period, at the same price as the original subscription.",
                    "You may manage your subscription and turn off auto-renewal at any time by going to your Account Settings on your iPhone after purchase.",
                    "No cancellation of the current subscription is allowed during the active subscription period.",
                    "Any unused portion of a free trial period, if offered, will be forfeited when you purchase a subscription.",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                      <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: "var(--terracotta)" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </Section>

              {/* 4. Billing and Cancellations */}
              <Section title="4. Billing and Cancellations">
                <p>
                  You can manage or cancel your subscription at any time directly through your{" "}
                  <strong>iPhone Account Settings</strong>:
                </p>
                <ol className="mt-3 space-y-1 list-none pl-0">
                  {[
                    "Open the Settings app on your iPhone.",
                    'Tap your name at the top, then tap "Subscriptions."',
                    "Select ZunoScroll and choose to manage or cancel your subscription.",
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                      <span
                        className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full text-xs font-bold flex items-center justify-center"
                        style={{ background: "var(--paper-deep)", color: "var(--ink)" }}
                      >
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
                <p className="mt-3 text-sm" style={{ color: "var(--ink-soft)" }}>
                  Cancellations take effect at the end of the current billing period. Refund requests are handled
                  by Apple according to App Store policies.
                </p>
              </Section>

              {/* 5. User Conduct */}
              <Section title="5. User Conduct">
                <p>
                  You are solely responsible for the content you access, generate, or share while using
                  ZunoScroll. You agree not to:
                </p>
                <ul className="mt-3 space-y-2 list-none pl-0">
                  {[
                    "Use the app for any unlawful, harmful, or fraudulent purpose.",
                    "Attempt to reverse-engineer, decompile, or tamper with the app.",
                    "Engage in any activity that disrupts or interferes with the app's servers or networks.",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                      <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: "var(--terracotta)" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </Section>

              {/* 6. Intellectual Property */}
              <Section title="6. Intellectual Property">
                <p>
                  The ZunoScroll app, including its design, source code, user interface, branding, and original
                  content, is the exclusive property of the ZunoScroll developer and is protected by applicable
                  copyright, trademark, and intellectual property laws. You are granted a limited, non-exclusive,
                  non-transferable license to use the app for personal, non-commercial purposes only. No other
                  rights are granted.
                </p>
              </Section>

              {/* 7. Disclaimer of Warranties */}
              <Section title="7. Disclaimer of Warranties">
                <p>
                  ZunoScroll is provided on an "as is" and "as available" basis without warranties of any kind,
                  either express or implied. We do not warrant that the app will be uninterrupted, error-free, or
                  free of viruses or other harmful components.
                </p>
              </Section>

              {/* 8. Changes to Terms */}
              <Section title="8. Changes to These Terms">
                <p>
                  We reserve the right to update these Terms at any time. Continued use of ZunoScroll after
                  changes are posted constitutes your acceptance of the revised Terms. We encourage you to review
                  this page periodically.
                </p>
              </Section>

              {/* 9. Contact */}
              <Section title="9. Contact Us">
                <p>
                  If you have any questions about these Terms, or need support, please contact us:
                </p>
                <div
                  className="mt-4 inline-flex items-center gap-3 px-5 py-3 rounded-xl"
                  style={{ background: "var(--paper-deep)", border: "1px solid var(--rule)" }}
                >
                  <span className="text-sm font-medium" style={{ color: "var(--ink-soft)" }}>Email</span>
                  <a
                    href="mailto:support@zunoscroll.com"
                    className="text-sm font-semibold underline underline-offset-2 transition-opacity hover:opacity-70"
                    style={{ color: "var(--terracotta)" }}
                  >
                    support@zunoscroll.com
                  </a>
                </div>
              </Section>

            </div>

            {/* Footer divider */}
            <div className="mt-14 pt-6" style={{ borderTop: "1px solid var(--rule)" }}>
              <p className="text-xs text-center" style={{ color: "var(--ink-mute)" }}>
                © {new Date().getFullYear()} ZunoScroll. All rights reserved.&nbsp;&nbsp;·&nbsp;&nbsp;
                <Link href="/privacy-policy" className="underline underline-offset-2 hover:opacity-70 transition-opacity">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

/* ─── Reusable section wrapper ─────────────────────────────────── */
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="p-7 rounded-[14px]"
      style={{ background: "var(--paper-soft)", border: "1px solid var(--rule)" }}
    >
      <h2
        className="text-lg font-bold mb-3"
        style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--ink)" }}
      >
        {title}
      </h2>
      <div className="text-sm leading-relaxed space-y-2" style={{ color: "var(--ink-soft)" }}>
        {children}
      </div>
    </motion.div>
  );
}
