"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Sparkles,
  Brain,
  TrendingUp,
  Layers,
  Zap,
  Target,
  BarChart3,
  Globe,
  ArrowRight,
  CheckCircle2,
  Star,
  Users,
  BookOpen,
  Repeat,
} from "lucide-react";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

    // ...existing code before return...
    return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 w-full bg-surface/80 backdrop-blur-md z-50 border-b border-border"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <img src="/assets/logo.png" alt="ZunoScroll Logo" className="w-14 h-14" style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.12))' }} onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = 'https://via.placeholder.com/56x56?text=Z'; }} />
              <span className="text-2xl font-bold primary" style={{ fontFamily: 'Inter, sans-serif' }}>
                ZunoScroll
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-text-secondary hover:primary transition-colors">Features</a>
              <a href="#how-it-works" className="text-text-secondary hover:primary transition-colors">How It Works</a>
              <a href="#benefits" className="text-text-secondary hover:primary transition-colors">Benefits</a>
              <Link href="/contact" className="text-text-secondary hover:primary transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </motion.nav>

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center space-x-2 bg-surface-interactive primary px-4 py-2 rounded-full mb-6"
              >
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-semibold">
                  Transform Your Scrolling Habit
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-6 leading-tight">
                Turn{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Doom Scrolling
                </span>{" "}
                into Learning
              </h1>

              <p className="text-xl text-text-secondary mb-8 leading-relaxed">
                Replace mindless scrolling with personalized, bite-sized
                learning content. Create custom learning paths, track your
                progress, and make every scroll count.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="primary-bg px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center space-x-2 shadow-lg hover:bg-primary-dark"
                >
                  <span>Get Started Free</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 bordered text-text-secondary px-8 py-4 rounded-full font-semibold text-lg hover:border-primary hover:primary transition-colors"
                >
                  Watch Demo
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative">
                {/* Responsive grid: cards left/right, logo center on md+; stacked on mobile */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                  {/* Left Card */}
                  <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="card shadow-2xl p-6 w-full md:w-auto max-w-xs mx-auto md:mx-0 md:ml-auto mb-0"
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                        <Brain className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-primary">
                          AI Learning Path
                        </h4>
                        <p className="text-sm text-text-secondary">
                          Personalized for you
                        </p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div
                        className="h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                        style={{ width: "85%" }}
                      />
                      <p className="text-xs text-text-secondary">85% Complete</p>
                    </div>
                  </motion.div>

                  {/* Center Rotating Logo: below cards on mobile, center on md+ */}
                  <div className="w-full flex flex-col items-center mt-6 md:mt-0 md:col-span-1 md:row-start-1 md:col-start-2">
                    <div className="w-full aspect-square bg-gradient-to-br from-surface via-surface-elevated to-surface-interactive rounded-3xl flex items-center justify-center mb-4 md:mb-0">
                      <div className="text-center">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="w-44 h-44 mx-auto flex items-center justify-center"
                        >
                          <img src="/assets/logo.png" alt="ZunoScroll Logo" className="w-36 h-36" style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.18))' }} />
                        </motion.div>
                        <p className="text-text-secondary text-lg mt-4 md:mt-8">
                          Your Learning Journey Awaits
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Card */}
                  <motion.div
                    animate={{ y: [0, 20, 0] }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                    className="card shadow-2xl p-6 w-full md:w-auto max-w-xs mx-auto md:mx-0 md:mr-auto mt-4 md:mt-0"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-text-primary">
                        Today's Progress
                      </h4>
                      <TrendingUp className="w-5 h-5 text-success" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-text-secondary">Posts Read</span>
                        <span className="font-semibold text-text-primary">24</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-text-secondary">Time Spent</span>
                        <span className="font-semibold text-text-primary">
                          42 min
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-text-secondary">Streak</span>
                        <span className="font-semibold accent">
                          🔥 12 days
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Powerful Features for{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Smart Learning
              </span>
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Everything you need to transform your scrolling habit into a
              learning superpower
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Layers,
                title: "Custom Learning Views",
                description:
                  "Create unlimited personalized learning views tailored to your interests and goals. Each view adapts to your learning pace.",
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: Brain,
                title: "AI-Powered Learning Graph",
                description:
                  "Our intelligent algorithm creates and adapts your learning path based on your progress, ensuring optimal knowledge retention.",
                color: "from-purple-500 to-blue-500",
              },
              {
                icon: Zap,
                title: "Bite-Sized Content",
                description:
                  "Learn through scrollable, digestible posts designed for mobile consumption. Perfect for learning on the go.",
                color: "from-blue-400 to-blue-700",
              },
              {
                icon: Target,
                title: "Learn & Feed Screens",
                description:
                  "Dedicated spaces for structured learning and staying updated with real-world applications of your topics.",
                color: "from-purple-600 to-blue-600",
              },
              {
                icon: BarChart3,
                title: "Progress Tracking",
                description:
                  "Visualize your learning journey with detailed analytics, streaks, and milestones for each view.",
                color: "from-indigo-500 to-blue-500",
              },
              {
                icon: Repeat,
                title: "Smart Revision",
                description:
                  "Save posts for later and get intelligent revision reminders based on spaced repetition principles.",
                color: "from-purple-500 to-blue-700",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="card p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6`}
                >
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="how-it-works"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-surface-elevated"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              How{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Zuno Scroll
              </span>{" "}
              Works
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Get started in minutes and begin your learning transformation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connection Line */}
            <div
              className="hidden md:block absolute top-1/4 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20"
              style={{ zIndex: 0 }}
            />

            {[
              {
                step: "01",
                title: "Create Your View",
                description:
                  "Define what you want to learn by creating a custom view with your topic and goals.",
                icon: Target,
              },
              {
                step: "02",
                title: "Answer Questions",
                description:
                  "Help our AI understand your learning style and depth by answering a few quick questions.",
                icon: Brain,
              },
              {
                step: "03",
                title: "Get Your Graph",
                description:
                  "Receive a personalized learning graph that maps your journey from beginner to expert.",
                icon: BarChart3,
              },
              {
                step: "04",
                title: "Start Scrolling",
                description:
                  "Enjoy bite-sized learning posts tailored to your current level and track your progress.",
                icon: Sparkles,
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative card p-8 shadow-lg text-center"
                style={{ zIndex: 1 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full text-white font-bold text-xl mb-6">
                  {step.step}
                </div>
                <step.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="text-xl font-bold text-text-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-text-secondary">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
                Why Choose{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Zuno Scroll?
                </span>
              </h2>
              <p className="text-xl text-text-secondary mb-8">
                Turn your biggest time-waster into your biggest asset
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Transform Wasted Time",
                    description:
                      "Convert 2+ hours of daily scrolling into meaningful learning and personal growth.",
                  },
                  {
                    title: "Learn Your Way",
                    description:
                      "Personalized content that adapts to your pace, interests, and learning style.",
                  },
                  {
                    title: "Stay Motivated",
                    description:
                      "Track progress, maintain streaks, and visualize your knowledge growth over time.",
                  },
                  {
                    title: "Real-World Updates",
                    description:
                      "Stay current with news, blogs, and developments in your fields of interest.",
                  },
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-text-primary mb-1">
                        {benefit.title}
                      </h4>
                      <p className="text-text-secondary">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
                <div className="card bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8">
                <div className="card bg-surface-elevated/80 backdrop-blur-sm rounded-2xl p-8">
                  <h3 className="text-3xl font-bold mb-6 text-text-primary">
                    Start Learning Today
                  </h3>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center space-x-3">
                      <CheckCircle2 className="w-5 h-5" />
                      <span className="text-text-primary">Free to start, no credit card required</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle2 className="w-5 h-5" />
                      <span className="text-text-primary">Unlimited custom learning views</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle2 className="w-5 h-5" />
                      <span className="text-text-primary">AI-powered personalization</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle2 className="w-5 h-5" />
                      <span className="text-text-primary">Cross-platform sync</span>
                    </li>
                  </ul>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-blue-700 to-purple-700 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow text-white"
                  >
                    Download Now
                  </motion.button>
                </div>
              </div>

              {/* Floating Element */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center shadow-2xl"
              >
                <span className="text-4xl">🎓</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center text-text-on-primary"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Scrolling?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of learners who have turned their scrolling habit
            into knowledge growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-700 to-purple-700 px-10 py-4 rounded-full font-semibold text-lg shadow-2xl text-white"
            >
              Get Started Free
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-gradient-to-r hover:from-blue-700 hover:to-purple-700 hover:text-white transition-all"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-surface text-text-primary py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src="/assets/logo.png" alt="ZunoScroll Logo" className="w-14 h-14" style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.12))' }} onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = 'https://via.placeholder.com/56x56?text=Z'; }} />
                <span className="text-xl font-bold primary" style={{ fontFamily: 'Inter, sans-serif' }}>ZunoScroll</span>
              </div>
              <p className="text-text-secondary">
                Transform doom scrolling into meaningful learning.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-text-tertiary">
                <li>
                  <a href="#" className="hover:text-text-primary transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-text-tertiary">
                <li>
                  <a href="#" className="hover:text-text-primary transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-text-tertiary">
                <li>
                  <Link href="/privacy-policy" className="hover:text-text-primary transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-text-primary transition-colors">
                    Terms
                  </a>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-text-primary transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center text-text-tertiary">
            <p>&copy; 2026 ZunoScroll. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
