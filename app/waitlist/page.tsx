"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

export default function WaitlistPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("entry.1616164950", email);
      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSeLxalD7FQx0NJNFnQrF8tEKaU2vyKAPmtK5Bxh92iDcKTc_A/formResponse",
        {
          method: "POST",
          body: formData,
          mode: "no-cors",
        }
      );
      setSubmitted(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#1c1c1e] to-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 text-white hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
            <img
              src="/assets/logo.png"
              alt="ZunoScroll Logo"
              className="w-10 h-10"
              style={{ filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.12))" }}
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "https://via.placeholder.com/40x40?text=Z";
              }}
            />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="mb-6 inline-block"
            >
              <svg
                className="w-16 h-16 text-primary mx-auto"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Join the iOS <span className="text-primary">Waitlist</span>
            </h1>

            <p className="text-xl text-white/70 mb-4">
              ZunoScroll is coming to iOS soon. Be among the first to get notified when we launch.
            </p>

            <p className="text-lg text-white/50">
              Join thousands of learners revolutionizing how they learn.
            </p>
          </motion.div>

          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-[#2851FA]/10 to-[#8B5CF6]/10 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-lg shadow-2xl"
          >
            {/* Custom Waitlist Form */}
            <div className="flex flex-col items-center justify-center min-h-[300px]">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg
                      className="w-10 h-10 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    You're on the list!
                  </h3>
                  <p className="text-white/70">
                    Thank you for joining. We'll be in touch soon.
                  </p>
                </motion.div>
              ) : (
                <div className="w-full max-w-md text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Join the exclusive iOS waiting list
                  </h3>
                  <p className="text-white/70 mb-8">
                    Enter your email address to get early access to ZunoScroll on iOS.
                  </p>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                      type="email"
                      required
                      placeholder="you@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={loading}
                      className="w-full px-6 py-4 bg-black/50 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all text-center text-lg shadow-inner"
                    />
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full sm:w-auto mx-auto px-10 py-4 bg-primary hover:bg-primary/90 text-black font-semibold rounded-xl transition-all flex items-center justify-center gap-2 mt-2"
                    >
                      {loading ? (
                        <div className="w-6 h-6 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                      ) : (
                        "Join Waitlist"
                      )}
                    </button>
                  </form>
                </div>
              )}
            </div>
          </motion.div>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 grid md:grid-cols-3 gap-6"
          >
            {[
              {
                icon: "🎯",
                title: "Early Access",
                description: "Be the first to experience ZunoScroll on iOS",
              },
              {
                icon: "📬",
                title: "Launch Notifications",
                description: "Get notified the moment the app goes live",
              },
              {
                icon: "❤️",
                title: "Special Perks",
                description: "Exclusive benefits for early adopters",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white/5 border border-white/10 rounded-lg p-6 text-center hover:border-primary/30 transition-colors"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-white/60">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Timeline Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 bg-white/5 border border-white/10 rounded-lg p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-8 text-center">
              What to Expect
            </h2>
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Join the Waitlist",
                  description: "Submit your email to join our community",
                },
                {
                  step: "2",
                  title: "Stay Updated",
                  description: "Receive progress updates about the iOS launch",
                },
                {
                  step: "3",
                  title: "Early Access",
                  description:
                    "Get TestFlight access before the official launch",
                },
                {
                  step: "4",
                  title: "Launch Day",
                  description: "Download ZunoScroll on the App Store",
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-black font-bold">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="text-white/60 mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <Link
              href="/"
              className="inline-block bg-primary hover:bg-primary/90 text-black font-semibold px-8 py-3 rounded-full transition-colors"
            >
              Back to Home
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
