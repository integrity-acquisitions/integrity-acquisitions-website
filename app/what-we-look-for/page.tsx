import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "What We Look For — Integrity Acquisitions",
  description:
    "Learn about the types of businesses Integrity Acquisitions acquires — our criteria, what we value, and what makes a good fit.",
};

const criteria = [
  {
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#1a3c5e" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Profitable Operations",
    body: "We look for businesses that are generating consistent revenue and profit. We're buyers, not turnaround specialists — the business should be working before we're involved.",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#1a3c5e" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Online or Offline",
    body: "Our primary focus is digital and online businesses — e-commerce, SaaS, content, services, and more. That said, we evaluate all profitable opportunities and remain open to traditional businesses as well.",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#1a3c5e" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Any Industry",
    body: "We don't limit ourselves to a single vertical. If the business is profitable, well-operated, and has a clear value proposition, we're interested in learning more.",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#1a3c5e" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Established & Operating",
    body: "We acquire businesses with an established track record — not startups or pre-revenue concepts. The business should have customers, revenue, and a history of delivering value.",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#1a3c5e" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Open to a Conversation",
    body: "The most important thing: you're willing to have an honest conversation. We don't need you to be ready to sell today — we just need you to be open to exploring the possibilities.",
  },
];

const notAFit = [
  "Pre-revenue startups or idea-stage businesses",
  "Businesses requiring significant turnaround or restructuring",
  "Operations with no clear path to profitability",
  "Businesses in highly regulated industries without established compliance",
];

export default function WhatWeLookForPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Page header */}
        <section
          style={{ backgroundColor: "#f8f9fb", borderBottom: "1px solid #e5e7eb" }}
          className="py-16 md:py-20"
        >
          <div className="max-w-3xl mx-auto px-6">
            <p
              style={{
                color: "#2d5f8a",
                fontSize: "0.875rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "0.875rem",
                fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
              }}
            >
              Acquisition Criteria
            </p>
            <h1
              style={{
                fontFamily: "var(--font-lora), Georgia, serif",
                color: "#111827",
                fontSize: "clamp(2rem, 4.5vw, 3rem)",
                fontWeight: 700,
                lineHeight: 1.2,
                marginBottom: "1.25rem",
              }}
            >
              What Makes a Good Fit
            </h1>
            <p
              style={{
                color: "#4b5563",
                fontSize: "1.0625rem",
                lineHeight: 1.75,
                fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
              }}
            >
              We're constantly looking to grow our portfolio. Here's what we look for in a business —
              and how to know if it might be a fit.
            </p>
          </div>
        </section>

        {/* Criteria grid */}
        <section className="py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {criteria.map((c) => (
                <div
                  key={c.title}
                  style={{
                    backgroundColor: "#f8f9fb",
                    border: "1px solid #e5e7eb",
                    borderRadius: "0.75rem",
                    padding: "2rem",
                    display: "flex",
                    gap: "1.25rem",
                  }}
                >
                  <div
                    style={{
                      width: "2.75rem",
                      height: "2.75rem",
                      borderRadius: "0.5rem",
                      backgroundColor: "#e8eef5",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {c.icon}
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--font-lora), Georgia, serif",
                        color: "#111827",
                        fontSize: "1.1rem",
                        fontWeight: 700,
                        marginBottom: "0.5rem",
                      }}
                    >
                      {c.title}
                    </h3>
                    <p
                      style={{
                        color: "#4b5563",
                        fontSize: "0.9375rem",
                        lineHeight: 1.7,
                        fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                      }}
                    >
                      {c.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Not a fit */}
        <section
          style={{ backgroundColor: "#f8f9fb", borderTop: "1px solid #e5e7eb", borderBottom: "1px solid #e5e7eb" }}
          className="py-16 md:py-20"
        >
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div>
                <h2
                  style={{
                    fontFamily: "var(--font-lora), Georgia, serif",
                    color: "#111827",
                    fontSize: "clamp(1.5rem, 3.5vw, 2rem)",
                    fontWeight: 700,
                    marginBottom: "0.75rem",
                  }}
                >
                  What's Probably Not a Fit
                </h2>
                <p
                  style={{
                    color: "#4b5563",
                    fontSize: "0.9375rem",
                    lineHeight: 1.75,
                    fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                  }}
                >
                  We want to be upfront about situations that aren't typically a good match for us,
                  so you can make the best decision for your situation.
                </p>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                {notAFit.map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.75rem",
                      color: "#4b5563",
                      fontSize: "0.9375rem",
                      lineHeight: 1.6,
                      fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                    }}
                  >
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#9ca3af" strokeWidth={2} style={{ flexShrink: 0, marginTop: "0.125rem" }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Unsure? CTA */}
        <section className="py-20 md:py-24" style={{ backgroundColor: "#1a3c5e" }}>
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2
              style={{
                fontFamily: "var(--font-lora), Georgia, serif",
                color: "#ffffff",
                fontSize: "clamp(1.75rem, 4vw, 2.25rem)",
                fontWeight: 700,
                marginBottom: "1rem",
              }}
            >
              Think your business might be a fit?
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.8)",
                fontSize: "1.0625rem",
                marginBottom: "2rem",
                lineHeight: 1.7,
                fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
              }}
            >
              Even if you're not sure, let's talk. A short conversation is the best way to find out
              whether there's an opportunity worth exploring together.
            </p>
            <Link
              href="/contact"
              style={{
                display: "inline-block",
                backgroundColor: "#ffffff",
                color: "#1a3c5e",
                padding: "0.875rem 2rem",
                borderRadius: "0.375rem",
                fontWeight: 700,
                fontSize: "1rem",
                textDecoration: "none",
                fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
              }}
            >
              Let's Talk
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
