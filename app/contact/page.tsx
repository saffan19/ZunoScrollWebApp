"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, User, ArrowLeft, Send } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      // Create mailto link with form data
      const mailtoLink = `mailto:support@zunoscroll.com?subject=${encodeURIComponent(
        formData.subject || "Support Request from " + formData.name
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;

      // Open mail client
      window.location.href = mailtoLink;
      
      setStatus("success");
      
      // Reset form after 2 seconds
      setTimeout(() => {
        setFormData({ name: "", email: "", subject: "", message: "" });
        setStatus("idle");
      }, 2000);
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-surface/80 backdrop-blur-md z-50 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold primary" style={{ fontFamily: 'Inter, sans-serif' }}>
                ZunoScroll
              </span>
            </Link>
            <Link
              href="/"
              className="flex items-center space-x-2 text-text-secondary hover:primary transition-colors"
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
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl mb-4">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Have questions or feedback? We'd love to hear from you. Send us a
              message and we'll respond as soon as possible.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card shadow-xl p-8 md:p-12"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-text-secondary mb-2"
                >
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 bordered rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-text-primary bg-surface"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-text-secondary mb-2"
                >
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 bordered rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-text-primary bg-surface"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Subject Field */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-text-secondary mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bordered rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-text-primary bg-surface"
                  placeholder="How can we help?"
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-text-secondary mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 bordered rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none text-text-primary bg-surface"
                  placeholder="Tell us what's on your mind..."
                />
              </div>

              {/* Status Messages */}
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-success/10 border border-success rounded-xl text-success"
                >
                  ✓ Opening your email client...
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-error/10 border border-error rounded-xl text-error"
                >
                  ✗ Something went wrong. Please try again.
                </motion.div>
              )}

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={status === "sending"}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full primary-bg py-4 rounded-xl font-semibold text-lg flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transition-all ${
                  status === "sending" ? "opacity-75 cursor-not-allowed" : ""
                }`}
              >
                {status === "sending" ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>

              <p className="text-sm text-text-tertiary text-center">
                Your message will be sent to{" "}
                <a
                  href="mailto:support@zunoscroll.com"
                  className="text-blue-600 hover:underline"
                >
                  support@zunoscroll.com
                </a>
              </p>
            </form>
          </motion.div>

          {/* Additional Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 grid md:grid-cols-3 gap-6"
          >
            <div className="card p-6 shadow-md text-center">
              <Mail className="w-8 h-8 primary mx-auto mb-3" />
              <h3 className="font-semibold text-text-primary mb-2">Email Us</h3>
              <a
                href="mailto:support@zunoscroll.com"
                className="primary hover:underline"
              >
                support@zunoscroll.com
              </a>
            </div>

            <div className="card p-6 shadow-md text-center">
              <MessageSquare className="w-8 h-8 accent mx-auto mb-3" />
              <h3 className="font-semibold text-text-primary mb-2">
                Response Time
              </h3>
              <p className="text-text-secondary">Within 24 hours</p>
            </div>

            <div className="card p-6 shadow-md text-center">
              <User className="w-8 h-8 primary mx-auto mb-3" />
              <h3 className="font-semibold text-text-primary mb-2">Support</h3>
              <p className="text-text-secondary">Available 24/7</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-surface border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-text-tertiary">
            © 2026 ZunoScroll. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
