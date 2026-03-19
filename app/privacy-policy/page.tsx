"use client";

import { motion } from "framer-motion";
import { Shield, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background text-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-surface/80 backdrop-blur-md z-50 border-b border-border">
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
            className="card p-8 md:p-12 bg-surface/90 text-gray-100"
          >
            {/* Privacy Policy Content */}
            <div className="prose prose-lg max-w-none text-text-primary">
              <style
                dangerouslySetInnerHTML={{
                  __html: `
                  [data-custom-class='body'], [data-custom-class='body'] * {
                    background: transparent !important;
                    color: #f3f4f6 !important;
                  }
                  [data-custom-class='title'], [data-custom-class='title'] * {
                    font-family: Arial !important;
                    font-size: 26px !important;
                    color: #fff !important;
                  }
                  [data-custom-class='subtitle'], [data-custom-class='subtitle'] * {
                    font-family: Arial !important;
                    color: #cbd5e1 !important;
                    font-size: 14px !important;
                  }
                  [data-custom-class='heading_1'], [data-custom-class='heading_1'] * {
                    font-family: Arial !important;
                    font-size: 19px !important;
                    color: #fff !important;
                  }
                  [data-custom-class='heading_2'], [data-custom-class='heading_2'] * {
                    font-family: Arial !important;
                    font-size: 17px !important;
                    color: #e0e7ef !important;
                  }
                  [data-custom-class='body_text'], [data-custom-class='body_text'] * {
                    color: #e5e7eb !important;
                    font-size: 14px !important;
                    font-family: Arial !important;
                  }
                  [data-custom-class='link'], [data-custom-class='link'] * {
                    color: #60a5fa !important;
                    font-size: 14px !important;
                    font-family: Arial !important;
                    word-break: break-word !important;
                  }
                  ul {
                    list-style-type: square;
                  }
                  ul > li > ul {
                    list-style-type: circle;
                  }
                  ul > li > ul > li > ul {
                    list-style-type: square;
                  }
                  ol li {
                    font-family: Arial;
                  }
                  h1 {
                    font-size: 2.25rem;
                    font-weight: bold;
                    margin-bottom: 1rem;
                    color: #fff;
                  }
                  h2 {
                    font-size: 1.875rem;
                    font-weight: bold;
                    margin-top: 2rem;
                    margin-bottom: 1rem;
                    color: #f3f4f6;
                  }
                  h3 {
                    font-size: 1.5rem;
                    font-weight: bold;
                    margin-top: 1.5rem;
                    margin-bottom: 0.75rem;
                    color: #e5e7eb;
                  }
                `,
                }}
              />

              <div data-custom-class="body">
                <div>
                  <strong>
                    <span style={{ fontSize: "26px" }}>
                      <span data-custom-class="title">
                        <h1>PRIVACY POLICY</h1>
                      </span>
                    </span>
                  </strong>
                </div>
                <div>
                  <span style={{ color: "rgb(127, 127, 127)" }}>
                    <strong>
                      <span style={{ fontSize: "15px" }}>
                        <span data-custom-class="subtitle">
                          Last updated February 11, 2026
                        </span>
                      </span>
                    </strong>
                  </span>
                </div>
                <div>
                  <br />
                </div>
                <div style={{ lineHeight: "1.5" }}>
                  <span style={{ color: "rgb(127, 127, 127)" }}>
                    <span
                      style={{ color: "rgb(89, 89, 89)", fontSize: "15px" }}
                    >
                      <span data-custom-class="body_text">
                        This Privacy Notice for <strong>Zunoscroll</strong> (
                        <strong>&quot;we,&quot; &quot;us,&quot;</strong> or{" "}
                        <strong>&quot;our&quot;</strong>), describes how and why
                        we might access, collect, store, use, and/or share (
                        <strong>&quot;process&quot;</strong>) your personal
                        information when you use our services (
                        <strong>&quot;Services&quot;</strong>), including when
                        you:
                      </span>
                    </span>
                  </span>
                </div>
                <div style={{ lineHeight: "1.5" }}>
                  <br />
                </div>
                <ul>
                  <li
                    data-custom-class="body_text"
                    style={{ lineHeight: "1.5" }}
                  >
                    <span
                      style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}
                    >
                      <span data-custom-class="body_text">
                        Download and use our mobile application (
                        <strong>ZunoScroll</strong>), or any other application
                        of ours that links to this Privacy Notice
                      </span>
                    </span>
                  </li>
                </ul>
                <div style={{ lineHeight: "1.5" }}>
                  <br />
                </div>
                <ul>
                  <li
                    data-custom-class="body_text"
                    style={{ lineHeight: "1.5" }}
                  >
                    <span style={{ fontSize: "15px" }}>
                      Use <strong>Zunoscroll</strong>.{" "}
                      <span data-custom-class="body_text">
                        ZunoScroll is an interactive learning platform designed
                        to replace mindless content consumption with structured,
                        bite-sized education. By utilizing user-defined
                        &quot;Views,&quot; the app generates personalized
                        Learning Graphs that adapt to an individual&apos;s
                        progress and goals. The service delivers curated and AI
                        generated educational content and relevant real-time
                        information (news, blogs, and updates) through a
                        specialized &quot;Learn&quot; and &quot;Feed&quot;
                        interface, allowing users to track their intellectual
                        growth across multiple subjects simultaneously.
                      </span>
                    </span>
                  </li>
                </ul>
                <div style={{ lineHeight: "1.5" }}>
                  <br />
                </div>
                <ul>
                  <li
                    data-custom-class="body_text"
                    style={{ lineHeight: "1.5" }}
                  >
                    <span
                      style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}
                    >
                      <span data-custom-class="body_text">
                        Engage with us in other related ways, including any
                        marketing or events
                      </span>
                    </span>
                  </li>
                </ul>
                <div style={{ lineHeight: "1.5" }}>
                  <br />
                </div>
                <div style={{ lineHeight: "1.5" }}>
                  <strong>
                    <span style={{ fontSize: "15px" }}>
                      <span data-custom-class="heading_2">
                        <h3>FAIR USE DISCLAIMER</h3>
                      </span>
                    </span>
                  </strong>
                </div>
                <div style={{ lineHeight: "1.5" }}>
                  <span style={{ fontSize: "15px" }}>
                    <span data-custom-class="body_text">
                      This app uses images for educational and transformative
                      learning purposes. We strive to use Public Domain or
                      Creative Commons content. If you are a copyright holder
                      and believe your work is used improperly, please contact{" "}
                      <a
                        href="mailto:support@zunoscroll.com"
                        data-custom-class="link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        support@zunoscroll.com
                      </a>{" "}
                      for immediate removal.
                    </span>
                  </span>
                </div>
                <div style={{ lineHeight: "1.5" }}>
                  <br />
                </div>
                <div style={{ lineHeight: "1.5" }}>
                  <span style={{ fontSize: "15px" }}>
                    <span style={{ color: "rgb(127, 127, 127)" }}>
                      <span data-custom-class="body_text">
                        <strong>Questions or concerns?</strong> Reading this
                        Privacy Notice will help you understand your privacy
                        rights and choices. We are responsible for making
                        decisions about how your personal information is
                        processed. If you do not agree with our policies and
                        practices, please do not use our Services. If you still
                        have any questions or concerns, please contact us at{" "}
                        <a
                          href="mailto:support@zunoscroll.com"
                          data-custom-class="link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          support@zunoscroll.com
                        </a>
                        .
                      </span>
                    </span>
                  </span>
                </div>

                <div style={{ lineHeight: "1.5" }}>
                  <br />
                </div>
                <div style={{ lineHeight: "1.5" }}>
                  <br />
                </div>

                <div style={{ lineHeight: "1.5" }}>
                  <strong>
                    <span style={{ fontSize: "15px" }}>
                      <span data-custom-class="heading_1">
                        <h2>SUMMARY OF KEY POINTS</h2>
                      </span>
                    </span>
                  </strong>
                </div>
                <div style={{ lineHeight: "1.5" }}>
                  <br />
                </div>
                <div style={{ lineHeight: "1.5" }}>
                  <span style={{ fontSize: "15px" }}>
                    <span data-custom-class="body_text">
                      <strong>
                        <em>
                          This summary provides key points from our Privacy
                          Notice, but you can find out more details about any of
                          these topics by using our table of contents below to
                          find the section you are looking for.
                        </em>
                      </strong>
                    </span>
                  </span>
                </div>
                <div style={{ lineHeight: "1.5" }}>
                  <br />
                </div>
                <div style={{ lineHeight: "1.5" }}>
                  <span style={{ fontSize: "15px" }}>
                    <span data-custom-class="body_text">
                      <strong>What personal information do we process?</strong>{" "}
                      When you visit, use, or navigate our Services, we may
                      process personal information depending on how you interact
                      with us and the Services, the choices you make, and the
                      products and features you use.
                    </span>
                  </span>
                </div>
                <div style={{ lineHeight: "1.5" }}>
                  <br />
                </div>
                <div style={{ lineHeight: "1.5" }}>
                  <span style={{ fontSize: "15px" }}>
                    <span data-custom-class="body_text">
                      <strong>
                        Do we process any sensitive personal information?
                      </strong>{" "}
                      We do not process sensitive personal information.
                    </span>
                  </span>
                </div>
                <div style={{ lineHeight: "1.5" }}>
                  <br />
                </div>
                <div style={{ lineHeight: "1.5" }}>
                  <span style={{ fontSize: "15px" }}>
                    <span data-custom-class="body_text">
                      <strong>
                        Do we collect any information from third parties?
                      </strong>{" "}
                      We do not collect any information from third parties.
                    </span>
                  </span>
                </div>
                <div style={{ lineHeight: "1.5" }}>
                  <br />
                </div>
                <div style={{ lineHeight: "1.5" }}>
                  <span style={{ fontSize: "15px" }}>
                    <span data-custom-class="body_text">
                      <strong>How do we process your information?</strong> We
                      process your information to provide, improve, and
                      administer our Services, communicate with you, for
                      security and fraud prevention, and to comply with law. We
                      may also process your information for other purposes with
                      your consent.
                    </span>
                  </span>
                </div>
                <div style={{ lineHeight: "1.5" }}>
                  <br />
                </div>
                <div style={{ lineHeight: "1.5" }}>
                  <span style={{ fontSize: "15px" }}>
                    <span data-custom-class="body_text">
                      <strong>How do we keep your information safe?</strong> We
                      have adequate organizational and technical processes and
                      procedures in place to protect your personal information.
                      However, no electronic transmission over the internet or
                      information storage technology can be guaranteed to be
                      100% secure.
                    </span>
                  </span>
                </div>
                <div style={{ lineHeight: "1.5" }}>
                  <br />
                </div>
                <div style={{ lineHeight: "1.5" }}>
                  <span style={{ fontSize: "15px" }}>
                    <span data-custom-class="body_text">
                      <strong>What are your rights?</strong> Depending on where
                      you are located geographically, the applicable privacy law
                      may mean you have certain rights regarding your personal
                      information.
                    </span>
                  </span>
                </div>
                <div style={{ lineHeight: "1.5" }}>
                  <br />
                </div>
                <div style={{ lineHeight: "1.5" }}>
                  <span style={{ fontSize: "15px" }}>
                    <span data-custom-class="body_text">
                      For the complete privacy policy including detailed
                      information about data collection, usage, sharing, and
                      your rights, please refer to the sections below or contact
                      us at{" "}
                      <a
                        href="mailto:support@zunoscroll.com"
                        data-custom-class="link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        support@zunoscroll.com
                      </a>
                      .
                    </span>
                  </span>
                </div>

                <div style={{ lineHeight: "1.5" }}>
                  <br />
                </div>

                <div style={{ lineHeight: "1.5" }}>
                  <span style={{ fontSize: "15px" }}>
                    <span data-custom-class="body_text">
                      This Privacy Policy was created to comply with applicable
                      data protection and privacy laws, including but not
                      limited to GDPR, CCPA, and other regional privacy
                      regulations. We are committed to protecting your privacy
                      and handling your personal information responsibly.
                    </span>
                  </span>
                </div>

                <div style={{ lineHeight: "1.5" }}>
                  <br />
                </div>

                <div style={{ lineHeight: "1.5" }}>
                  <strong>
                    <span data-custom-class="heading_1">
                      <h2>CONTACT INFORMATION</h2>
                    </span>
                  </strong>
                </div>
                <div style={{ lineHeight: "1.5" }}>
                  <br />
                </div>
                <div style={{ lineHeight: "1.5" }}>
                  <span style={{ fontSize: "15px" }}>
                    <span data-custom-class="body_text">
                      If you have questions or comments about this notice, you
                      may email us at{" "}
                      <a
                        href="mailto:support@zunoscroll.com"
                        data-custom-class="link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        support@zunoscroll.com
                      </a>{" "}
                      or contact us by post at:
                    </span>
                  </span>
                </div>
                <div style={{ lineHeight: "1.5" }}>
                  <br />
                </div>
                <div style={{ lineHeight: "1.5" }}>
                  <span style={{ fontSize: "15px" }}>
                    <span data-custom-class="body_text">
                      <strong>Zunoscroll</strong>
                    </span>
                  </span>
                </div>
                <div style={{ lineHeight: "1.5" }}>
                  <span style={{ fontSize: "15px" }}>
                    <span data-custom-class="body_text">
                      Hill View Garden Turahalli Uttarahalli
                    </span>
                  </span>
                </div>
                <div style={{ lineHeight: "1.5" }}>
                  <span style={{ fontSize: "15px" }}>
                    <span data-custom-class="body_text">
                      Opposite ds max saaga apartment
                    </span>
                  </span>
                </div>
                <div style={{ lineHeight: "1.5" }}>
                  <span style={{ fontSize: "15px" }}>
                    <span data-custom-class="body_text">
                      Bangalore, Karnataka 560061
                    </span>
                  </span>
                </div>
                <div style={{ lineHeight: "1.5" }}>
                  <span style={{ fontSize: "15px" }}>
                    <span data-custom-class="body_text">India</span>
                  </span>
                </div>
                <div style={{ lineHeight: "1.5" }}>
                  <br />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-surface border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center items-center space-x-2 mb-2">
            <img
              src="/assets/logo.png"
              alt="ZunoScroll Logo"
              className="w-12 h-12"
              style={{ filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.12))" }}
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src =
                  "https://via.placeholder.com/48x48?text=Z";
              }}
            />
            <span
              className="text-xl font-bold text-primary"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              ZunoScroll
            </span>
          </div>
          <p className="text-textSecondary">
            © 2026 ZunoScroll. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
