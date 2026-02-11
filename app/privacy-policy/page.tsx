"use client";

import { motion } from "framer-motion";
import { Shield, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Zuno Scroll
              </span>
            </Link>
            <Link
              href="/"
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
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
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
          >
            {/* Privacy Policy Content */}
            <div className="prose prose-lg max-w-none">
              <style
                dangerouslySetInnerHTML={{
                  __html: `
                  [data-custom-class='body'], [data-custom-class='body'] * {
                    background: transparent !important;
                  }
                  [data-custom-class='title'], [data-custom-class='title'] * {
                    font-family: Arial !important;
                    font-size: 26px !important;
                    color: #000000 !important;
                  }
                  [data-custom-class='subtitle'], [data-custom-class='subtitle'] * {
                    font-family: Arial !important;
                    color: #595959 !important;
                    font-size: 14px !important;
                  }
                  [data-custom-class='heading_1'], [data-custom-class='heading_1'] * {
                    font-family: Arial !important;
                    font-size: 19px !important;
                    color: #000000 !important;
                  }
                  [data-custom-class='heading_2'], [data-custom-class='heading_2'] * {
                    font-family: Arial !important;
                    font-size: 17px !important;
                    color: #000000 !important;
                  }
                  [data-custom-class='body_text'], [data-custom-class='body_text'] * {
                    color: #595959 !important;
                    font-size: 14px !important;
                    font-family: Arial !important;
                  }
                  [data-custom-class='link'], [data-custom-class='link'] * {
                    color: #3030F1 !important;
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
                    color: #1e293b;
                  }
                  h2 {
                    font-size: 1.875rem;
                    font-weight: bold;
                    margin-top: 2rem;
                    margin-bottom: 1rem;
                    color: #1e293b;
                  }
                  h3 {
                    font-size: 1.5rem;
                    font-weight: bold;
                    margin-top: 1.5rem;
                    margin-bottom: 0.75rem;
                    color: #334155;
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
                    <span style={{ color: "rgb(89, 89, 89)", fontSize: "15px" }}>
                      <span data-custom-class="body_text">
                        This Privacy Notice for <strong>Zunoscroll</strong> (
                        <strong>&quot;we,&quot; &quot;us,&quot;</strong> or{" "}
                        <strong>&quot;our&quot;</strong>), describes how and why we
                        might access, collect, store, use, and/or share (
                        <strong>&quot;process&quot;</strong>) your personal
                        information when you use our services (
                        <strong>&quot;Services&quot;</strong>), including when you:
                      </span>
                    </span>
                  </span>
                </div>
                <div style={{ lineHeight: "1.5" }}>
                  <br />
                </div>
                <ul>
                  <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
                    <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
                      <span data-custom-class="body_text">
                        Download and use our mobile application (
                        <strong>ZunoScroll</strong>), or any other application of
                        ours that links to this Privacy Notice
                      </span>
                    </span>
                  </li>
                </ul>
                <div style={{ lineHeight: "1.5" }}>
                  <br />
                </div>
                <ul>
                  <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
                    <span style={{ fontSize: "15px" }}>
                      Use <strong>Zunoscroll</strong>.{" "}
                      <span data-custom-class="body_text">
                        ZunoScroll is an interactive learning platform designed to
                        replace mindless content consumption with structured,
                        bite-sized education. By utilizing user-defined
                        &quot;Views,&quot; the app generates personalized Learning
                        Graphs that adapt to an individual&apos;s progress and
                        goals. The service delivers curated and AI generated
                        educational content and relevant real-time information
                        (news, blogs, and updates) through a specialized
                        &quot;Learn&quot; and &quot;Feed&quot; interface, allowing
                        users to track their intellectual growth across multiple
                        subjects simultaneously.
                      </span>
                    </span>
                  </li>
                </ul>
                <div style={{ lineHeight: "1.5" }}>
                  <br />
                </div>
                <ul>
                  <li data-custom-class="body_text" style={{ lineHeight: "1.5" }}>
                    <span style={{ fontSize: "15px", color: "rgb(89, 89, 89)" }}>
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
                  <span style={{ fontSize: "15px" }}>
                    <span style={{ color: "rgb(127, 127, 127)" }}>
                      <span data-custom-class="body_text">
                        <strong>Questions or concerns?</strong> Reading this Privacy
                        Notice will help you understand your privacy rights and
                        choices. We are responsible for making decisions about how
                        your personal information is processed. If you do not agree
                        with our policies and practices, please do not use our
                        Services. If you still have any questions or concerns,
                        please contact us at{" "}
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
                          This summary provides key points from our Privacy Notice,
                          but you can find out more details about any of these
                          topics by using our table of contents below to find the
                          section you are looking for.
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
                      <strong>What personal information do we process?</strong> When
                      you visit, use, or navigate our Services, we may process
                      personal information depending on how you interact with us and
                      the Services, the choices you make, and the products and
                      features you use.
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
                      process your information to provide, improve, and administer
                      our Services, communicate with you, for security and fraud
                      prevention, and to comply with law. We may also process your
                      information for other purposes with your consent.
                    </span>
                  </span>
                </div>
                <div style={{ lineHeight: "1.5" }}>
                  <br />
                </div>
                <div style={{ lineHeight: "1.5" }}>
                  <span style={{ fontSize: "15px" }}>
                    <span data-custom-class="body_text">
                      <strong>How do we keep your information safe?</strong> We have
                      adequate organizational and technical processes and procedures
                      in place to protect your personal information. However, no
                      electronic transmission over the internet or information
                      storage technology can be guaranteed to be 100% secure.
                    </span>
                  </span>
                </div>
                <div style={{ lineHeight: "1.5" }}>
                  <br />
                </div>
                <div style={{ lineHeight: "1.5" }}>
                  <span style={{ fontSize: "15px" }}>
                    <span data-custom-class="body_text">
                      <strong>What are your rights?</strong> Depending on where you
                      are located geographically, the applicable privacy law may
                      mean you have certain rights regarding your personal
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
                      For the complete privacy policy including detailed information
                      about data collection, usage, sharing, and your rights, please
                      refer to the sections below or contact us at{" "}
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
                      This Privacy Policy was created to comply with applicable data
                      protection and privacy laws, including but not limited to GDPR,
                      CCPA, and other regional privacy regulations. We are committed
                      to protecting your privacy and handling your personal
                      information responsibly.
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
                      If you have questions or comments about this notice, you may
                      email us at{" "}
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
                      No 58, Hill View Garden Turahalli Uttarahalli
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
                <div style={{ lineHeight: "1.5" }}>
                  <span style={{ fontSize: "12px", color: "rgb(127, 127, 127)" }}>
                    <span data-custom-class="body_text">
                      This Privacy Policy was created using Termly&apos;s{" "}
                      <a
                        href="https://termly.io/products/privacy-policy-generator/"
                        target="_blank"
                        rel="noopener noreferrer"
                        data-custom-class="link"
                      >
                        Privacy Policy Generator
                      </a>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600">
            © 2026 Zuno Scroll. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
