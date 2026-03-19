"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import Link from "next/link";
import { useRef } from "react";
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

type AppJourneyStep = {
  id: string;
  number: string;
  title: string;
  caption: string;
  highlight: string;
  tag: string;
  image: StaticImageData;
  alt: string;
  miniPreview?: StaticImageData;
  audioZoom?: StaticImageData;
};

export default function Home() {
  const appJourneySteps: AppJourneyStep[] = [
    {
      id: "create-view",
      number: "01",
      title: "Create your learning view",
      caption:
        "Start with any niche topic you care about. From exam prep to startup strategy, every journey begins with one custom view.",
      highlight: "Infinite possibilities, one focused start.",
      tag: "View Creation",
      image: viewCreationScreenshot,
      alt: "ZunoScroll view creation page",
    },
    {
      id: "topic-selection",
      number: "02",
      title: "Select what matters most",
      caption:
        "Pick the exact sub-topics you want to master so the AI can shape a focused stream instead of generic content.",
      highlight: "Precision over noise.",
      tag: "Topic Selection",
      image: topicSelectionScreenshot,
      alt: "ZunoScroll topic selection page",
    },
    {
      id: "assessment",
      number: "03",
      title: "Take a quick assessment",
      caption:
        "A short assessment helps ZunoScroll understand your current level and generate the right learning depth from day one.",
      highlight: "Personalized from your first session.",
      tag: "Assessment",
      image: assessmentScreenshot,
      alt: "ZunoScroll assessment page",
    },
    {
      id: "learning-path",
      number: "04",
      title: "Generate your AI learning path",
      caption:
        "Your path is created automatically with clear progression so you always know what to learn next.",
      highlight: "Smart sequencing for faster progress.",
      tag: "Learning Path",
      image: learningPathCreationScreenshot,
      alt: "ZunoScroll learning path creation page",
    },
    {
      id: "library",
      number: "05",
      title: "Land in your Library home",
      caption:
        "The Library becomes your command center: all your created views plus hand-picked curated views ready to explore.",
      highlight: "Your personal and curated knowledge hub.",
      tag: "Library Home",
      image: libraryDarkScreenshot,
      alt: "ZunoScroll library page dark theme",
      miniPreview: libraryLightScreenshot,
    },
    {
      id: "learn-page",
      number: "06",
      title: "Learn with context and control",
      caption:
        "Open any view to access the Learn screen with deep, focused cards. Use audio playback and quickly switch between Learn, Revise, and Saved.",
      highlight: "Read, listen, revise — all in one flow.",
      tag: "Learn Experience",
      image: learnPageScreenshot,
      alt: "ZunoScroll learn page",
      audioZoom: audioZoomedScreenshot,
    },
    {
      id: "learning-options",
      number: "07",
      title: "Move between Learn, Revise, Saved",
      caption:
        "Switching modes keeps momentum high: learn new concepts, revise intelligently, and keep your best insights bookmarked.",
      highlight: "Three modes, one compounding habit.",
      tag: "Learning Options",
      image: learningOptionScreenshot,
      alt: "ZunoScroll learning options page",
    },
    {
      id: "feed",
      number: "08",
      title: "Stay current with real-world updates",
      caption:
        "Your Feed pulls relevant RSS posts and blogs based on what you are learning, so theory stays connected to what is happening now.",
      highlight: "AI learning meets live web intelligence.",
      tag: "Feeds",
      image: feedPageScreenshot,
      alt: "ZunoScroll feed page",
    },
    {
      id: "graph",
      number: "09",
      title: "Visualize your growth graph",
      caption:
        "Track consistency, depth, and progress in a clean learning graph that makes your effort visible every day.",
      highlight: "Progress you can see and trust.",
      tag: "Graph",
      image: graphPageScreenshot,
      alt: "ZunoScroll learning graph page",
    },
    {
      id: "graph-share",
      number: "10",
      title: "Share your learning momentum",
      caption:
        "Use built-in sharing to celebrate milestones and show your learning streak to friends, peers, or your community.",
      highlight: "Turn progress into social proof.",
      tag: "Graph Share",
      image: graphSharePageScreenshot,
      alt: "ZunoScroll graph sharing page",
    },
  ];

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

  const premiumEase: [number, number, number, number] = [0.22, 1, 0.36, 1];
  const prefersReducedMotion = useReducedMotion();

  const heroSectionRef = useRef<HTMLElement | null>(null);
  const featuresSectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroSectionRef,
    offset: ["start start", "end start"],
  });

  const { scrollYProgress: featuresProgress } = useScroll({
    target: featuresSectionRef,
    offset: ["start end", "end start"],
  });

  const heroTextY = useSpring(
    useTransform(heroProgress, [0, 1], [0, prefersReducedMotion ? 0 : -46]),
    {
      stiffness: 120,
      damping: 28,
      mass: 0.45,
    },
  );

  const heroVisualY = useSpring(
    useTransform(heroProgress, [0, 1], [0, prefersReducedMotion ? 0 : 34]),
    {
      stiffness: 120,
      damping: 28,
      mass: 0.45,
    },
  );

  const heroOpacity = useTransform(
    heroProgress,
    [0, 0.8],
    [1, prefersReducedMotion ? 1 : 0.84],
  );

  const featuresHeadingY = useSpring(
    useTransform(featuresProgress, [0, 1], [prefersReducedMotion ? 0 : 26, 0]),
    {
      stiffness: 130,
      damping: 30,
      mass: 0.5,
    },
  );

  const featuresHeadingOpacity = useTransform(
    featuresProgress,
    [0, 0.5],
    [0.65, 1],
  );

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
              <img
                src="/assets/logo.png"
                alt="ZunoScroll Logo"
                className="w-14 h-14"
                style={{ filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.12))" }}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src =
                    "https://via.placeholder.com/56x56?text=Z";
                }}
              />
              <span
                className="text-2xl font-bold primary"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                ZunoScroll
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#features"
                className="text-text-secondary hover:primary transition-colors"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-text-secondary hover:primary transition-colors"
              >
                How It Works
              </a>
              <a
                href="#benefits"
                className="text-text-secondary hover:primary transition-colors"
              >
                Benefits
              </a>
              <Link
                href="/contact"
                className="text-text-secondary hover:primary transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </motion.nav>

      <section
        ref={heroSectionRef}
        className="pt-32 pb-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              style={{ y: heroTextY, opacity: heroOpacity }}
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
              style={{ y: heroVisualY }}
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
                      <p className="text-xs text-text-secondary">
                        85% Complete
                      </p>
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
                          <img
                            src="/assets/logo.png"
                            alt="ZunoScroll Logo"
                            className="w-36 h-36"
                            style={{
                              filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.18))",
                            }}
                          />
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
                        <span className="font-semibold text-text-primary">
                          24
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-text-secondary">Time Spent</span>
                        <span className="font-semibold text-text-primary">
                          42 min
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-text-secondary">Streak</span>
                        <span className="font-semibold accent">🔥 12 days</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section. */}
      <section
        ref={featuresSectionRef}
        id="features"
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
          
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: premiumEase }}
            style={{ y: featuresHeadingY, opacity: featuresHeadingOpacity }}
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
        className="py-24 px-4 sm:px-6 lg:px-8 bg-surface-elevated overflow-hidden"
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
              Inside{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                ZunoScroll
              </span>{" "}
              in Action
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Follow the full journey from your first custom view to live feeds,
              deep learning sessions, and shareable progress graphs. Each screen
              is designed to turn scrolling into focused growth.
            </p>
          </motion.div>

          <div className="space-y-14">
            {appJourneySteps.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.article
                  key={step.id}
                  initial={{ opacity: 0, y: 48, scale: 0.985 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{ y: -4 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.8,
                    ease: premiumEase,
                    delay: index * 0.06,
                  }}
                  className="card p-6 md:p-8"
                >
                  <div
                    className={`flex flex-col gap-10 lg:gap-14 items-center ${
                      isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                    }`}
                  >
                    <div className="w-full lg:w-1/2">
                      <div className="inline-flex items-center gap-3 mb-5">
                        <span className="inline-flex items-center justify-center w-11 h-11 rounded-full primary-bg font-bold text-sm">
                          {step.number}
                        </span>
                        <span className="px-4 py-1.5 rounded-full bg-surface-interactive text-sm text-text-secondary border border-border">
                          {step.tag}
                        </span>
                      </div>

                      <h3 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                        {step.title}
                      </h3>
                      <p className="text-lg text-text-secondary leading-relaxed mb-5">
                        {step.caption}
                      </p>
                      <p className="text-base font-medium primary">
                        {step.highlight}
                      </p>
                    </div>

                    <div className="w-full lg:w-1/2 flex justify-center">
                      <div className="relative w-[280px] sm:w-[318px]">
                        <motion.div
                          aria-hidden
                          animate={{
                            opacity: [0.24, 0.48, 0.24],
                            scale: [0.96, 1.02, 0.96],
                            y: [0, 4, 0],
                          }}
                          transition={{
                            duration: 7.2,
                            repeat: Infinity,
                            ease: premiumEase,
                          }}
                          className="absolute -inset-3 bg-gradient-to-br from-blue-600/30 to-purple-600/25 blur-2xl rounded-[3rem]"
                        />

                        <motion.div
                          animate={{
                            y: [0, -10, 0],
                            rotate: [0, -0.8, 0.6, 0],
                          }}
                          whileHover={{ scale: 1.01, y: -5 }}
                          transition={{
                            duration: 6.8,
                            repeat: Infinity,
                            ease: premiumEase,
                            delay: index * 0.16,
                          }}
                          className="relative rounded-[2rem] border border-border bg-surface p-2 shadow-2xl"
                        >
                          <div className="relative rounded-[1.6rem] overflow-hidden border border-border bg-background aspect-[9/19.5]">
                            <div className="absolute top-2 left-1/2 -translate-x-1/2 z-30 h-1.5 w-14 rounded-full bg-surface-interactive border border-border/70" />
                            <Image
                              src={step.image}
                              alt={step.alt}
                              fill
                              className="object-cover"
                              sizes="(max-width: 640px) 280px, 318px"
                              priority={index < 2}
                            />
                          </div>

                          {step.miniPreview && (
                            <motion.div
                              initial={{ opacity: 0, scale: 0.9 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              animate={{ y: [0, -3, 0] }}
                              viewport={{ once: true }}
                              transition={{
                                opacity: {
                                  duration: 0.5,
                                  delay: 0.12,
                                  ease: premiumEase,
                                },
                                scale: {
                                  duration: 0.5,
                                  delay: 0.12,
                                  ease: premiumEase,
                                },
                                y: {
                                  duration: 4.4,
                                  repeat: Infinity,
                                  ease: premiumEase,
                                  delay: 0.3,
                                },
                              }}
                              className="absolute -right-5 top-10 w-24 rounded-2xl overflow-hidden border border-border shadow-xl"
                            >
                              <Image
                                src={step.miniPreview}
                                alt="Library light theme preview"
                                className="w-full h-auto"
                              />
                            </motion.div>
                          )}

                          {step.audioZoom && (
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              animate={{ y: [0, -4, 0] }}
                              viewport={{ once: true }}
                              transition={{
                                opacity: {
                                  duration: 0.45,
                                  delay: 0.18,
                                  ease: premiumEase,
                                },
                                y: {
                                  duration: 4.9,
                                  repeat: Infinity,
                                  ease: premiumEase,
                                  delay: 0.28,
                                },
                              }}
                              className="absolute bottom-[86px] sm:bottom-[108px] left-0 right-0 rounded-2xl overflow-hidden border border-border shadow-2xl z-20"
                            >
                              <Image
                                src={step.audioZoom}
                                alt="Zoomed audio controls"
                                className="w-full h-auto"
                              />
                            </motion.div>
                          )}
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
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
                      <p className="text-text-secondary">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: premiumEase }}
              className="w-full"
            >
              <div className="card-solid w-full max-w-xl mx-auto rounded-3xl p-6 sm:p-7 border border-border/90 shadow-2xl">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-text-primary">
                  Start Learning Today
                </h3>
                <p className="text-text-secondary mb-5">
                  Launch your first AI-powered view in minutes and turn daily
                  scrolling into measurable progress.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3 text-text-primary">
                    <CheckCircle2 className="w-5 h-5 text-success" />
                    <span>Free to start, no credit card required</span>
                  </li>
                  <li className="flex items-center gap-3 text-text-primary">
                    <CheckCircle2 className="w-5 h-5 text-success" />
                    <span>Unlimited custom learning views</span>
                  </li>
                  <li className="flex items-center gap-3 text-text-primary">
                    <CheckCircle2 className="w-5 h-5 text-success" />
                    <span>AI personalization with live feeds</span>
                  </li>
                </ul>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full primary-bg px-6 py-3.5 rounded-full font-semibold text-base shadow-lg hover:bg-primary-dark transition-colors"
                >
                  Download Now
                </motion.button>
              </div>
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
                <img
                  src="/assets/logo.png"
                  alt="ZunoScroll Logo"
                  className="w-14 h-14"
                  style={{ filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.12))" }}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src =
                      "https://via.placeholder.com/56x56?text=Z";
                  }}
                />
                <span
                  className="text-xl font-bold primary"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  ZunoScroll
                </span>
              </div>
              <p className="text-text-secondary">
                Transform doom scrolling into meaningful learning.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-text-tertiary">
                <li>
                  <a
                    href="#"
                    className="hover:text-text-primary transition-colors"
                  >
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
                  <a
                    href="#"
                    className="hover:text-text-primary transition-colors"
                  >
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
                  <Link
                    href="/privacy-policy"
                    className="hover:text-text-primary transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-text-primary transition-colors"
                  >
                    Terms
                  </a>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-text-primary transition-colors"
                  >
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
