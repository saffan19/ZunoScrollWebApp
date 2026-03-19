import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = "https://zunoscroll.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ZunoScroll – Learn Anything with AI-Powered Micro-Learning & RSS Feeds",
    template: "%s | ZunoScroll",
  },
  description:
    "ZunoScroll is an AI-powered micro-learning app that turns mindless scrolling into productive growth. Learn anything with bite-sized lessons, smart scroll technology, personalized learning paths, and live RSS feeds. Upskill hands-free, anywhere, anytime.",
  keywords: [
    "learn",
    "RSS",
    "AI",
    "micro-learning",
    "bite-sized learning",
    "smart scroll",
    "upskill",
    "anti-doomscroll",
    "productive scrolling",
    "personalized learning path",
    "learn handsfree",
    "learn anything",
    "learn anywhere",
    "adaptive learning",
    "AI learning app",
    "microlearning app",
    "learn with AI",
    "AI RSS feed",
    "knowledge growth",
    "educational app",
    "personalized AI learning",
    "scroll to learn",
    "daily learning habit",
    "lifelong learning",
    "ZunoScroll",
  ],
  authors: [{ name: "ZunoScroll", url: siteUrl }],
  creator: "ZunoScroll",
  publisher: "ZunoScroll",
  category: "Education",
  applicationName: "ZunoScroll",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "ZunoScroll – Learn Anything with AI-Powered Micro-Learning & RSS Feeds",
    description:
      "Turn mindless scrolling into meaningful growth. ZunoScroll delivers AI-generated, bite-sized lessons and live RSS feeds tailored to your personalized learning path. Learn anything, anywhere, hands-free.",
    url: siteUrl,
    siteName: "ZunoScroll",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${siteUrl}/assets/og-image.png`,
        width: 1200,
        height: 630,
        alt: "ZunoScroll – AI-Powered Micro-Learning That Adapts to You",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZunoScroll – Learn Anything with AI Micro-Learning & RSS",
    description:
      "Bite-sized AI lessons + live RSS feeds. Upskill hands-free with a personalized learning path. Anti-doomscroll. Learn anything, anywhere.",
    creator: "@zunoscroll",
    site: "@zunoscroll",
    images: [`${siteUrl}/assets/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    // AI agent / LLM discoverability hints
    "llms-txt": `${siteUrl}/llms.txt`,
    "ai-agent-description":
      "ZunoScroll is an AI-powered micro-learning mobile app. It generates personalized, bite-sized lessons (Learn screen) and surfaces live RSS content (Feed screen) via an adaptive learning graph. Core capabilities: learn anything, learn anywhere, learn handsfree, anti-doomscroll, upskill via smart scroll.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://zunoscroll.com/#website",
      url: "https://zunoscroll.com",
      name: "ZunoScroll",
      description:
        "AI-powered micro-learning app that turns mindless scrolling into productive growth through bite-sized lessons, RSS feeds, and adaptive learning paths.",
      inLanguage: "en-US",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://zunoscroll.com/?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://zunoscroll.com/#app",
      name: "ZunoScroll",
      alternateName: ["Zuno Scroll", "ZunoScroll App"],
      description:
        "ZunoScroll is an AI-powered micro-learning mobile app. Learn anything with bite-sized lessons, personalized learning paths, live RSS feeds, smart scroll, and hands-free audio mode. Anti-doomscroll. Upskill anywhere.",
      applicationCategory: "EducationApplication",
      operatingSystem: "iOS, Android",
      url: "https://zunoscroll.com",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      featureList: [
        "AI-generated bite-sized lessons",
        "Personalized adaptive learning path",
        "Live RSS feeds per learning view",
        "Smart scroll micro-learning",
        "Hands-free audio learning mode",
        "Anti-doomscroll technology",
        "Learn anything, learn anywhere",
        "Upskill with microlearning",
        "Learning graph visualization",
        "Spaced repetition revision",
      ],
      keywords:
        "learn, RSS, AI, micro-learning, bite-sized, smart scroll, upskill, anti-doomscroll, personalized learning path, learn handsfree, learn anything, learn anywhere, adaptive learning",
    },
    {
      "@type": "Organization",
      "@id": "https://zunoscroll.com/#organization",
      name: "ZunoScroll",
      url: "https://zunoscroll.com",
      logo: {
        "@type": "ImageObject",
        url: "https://zunoscroll.com/assets/logo.png",
      },
      contactPoint: {
        "@type": "ContactPoint",
        email: "support@zunoscroll.com",
        contactType: "customer support",
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://zunoscroll.com/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is ZunoScroll?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ZunoScroll is an AI-powered micro-learning app that transforms mindless scrolling into productive learning. It delivers bite-sized lessons and live RSS feeds through a personalized, adaptive learning path so you can learn anything, anywhere, hands-free.",
          },
        },
        {
          "@type": "Question",
          name: "How does ZunoScroll use AI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ZunoScroll uses AI to generate personalized bite-sized lessons, build an adaptive learning graph tailored to your goals, surface relevant RSS feeds, and continuously refine your learning path as you progress.",
          },
        },
        {
          "@type": "Question",
          name: "What is micro-learning in ZunoScroll?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Micro-learning in ZunoScroll means short, focused, scrollable lessons delivered in a familiar social-media style. Each post is structured to build on the last, making it easy to upskill in minutes a day.",
          },
        },
        {
          "@type": "Question",
          name: "Does ZunoScroll support RSS feeds?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Every learning view in ZunoScroll includes a Feed screen powered by RSS and live web intelligence. This keeps your learning connected to real-world news, industry trends, and new research.",
          },
        },
        {
          "@type": "Question",
          name: "Can I learn hands-free with ZunoScroll?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. ZunoScroll includes an audio mode and auto-scroll feature that lets you learn handsfree — while commuting, exercising, or doing daily tasks.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="canonical" href="https://zunoscroll.com" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="ZunoScroll" />
        {/* AI agent / LLM discovery */}
        <link rel="ai-plugin" href="https://zunoscroll.com/llms.txt" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
