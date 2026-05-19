import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "About — Integrity Acquisitions",
  description:
    "Learn about Integrity Acquisitions — who we are, our founder's story, and our philosophy for buying and building businesses.",
};

const pillars = [
  {
    title: "Relationships First",
    body: "Every acquisition starts with a relationship. We take the time to understand you, your business, and what a successful outcome looks like from your perspective.",
  },
  {
    title: "Operational Excellence",
    body: "We don't just acquire — we operate. Our focus is on sustainable growth, continuous improvement, and building businesses that last.",
  },
  {
    title: "Integrity in Every Deal",
    body: "Our name says it all. We're straightforward, honest, and committed to doing right by the people we work with, at every stage of every deal.",
  },
];

export default function AboutPage() {
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
              Our Story
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
              Built on Integrity.<br />Driven by Results.
            </h1>
            <p
              style={{
                color: "#4b5563",
                fontSize: "1.0625rem",
                lineHeight: 1.75,
                fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
              }}
            >
              Integrity Acquisitions is a Canada-based business acquisition and investment firm
              operating worldwide. We exist to grow a diversified portfolio of businesses while
              creating genuine value for everyone involved.
            </p>
          </div>
        </section>

        {/* Founder section */}
        <section className="py-20 md:py-28">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
              <div>
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
                  Founder & Lead
                </p>
                <h2
                  style={{
                    fontFamily: "var(--font-lora), Georgia, serif",
                    color: "#111827",
                    fontSize: "clamp(1.625rem, 3.5vw, 2.25rem)",
                    fontWeight: 700,
                    marginBottom: "1.25rem",
                    lineHeight: 1.25,
                  }}
                >
                  Ryan
                </h2>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    color: "#4b5563",
                    fontSize: "0.9375rem",
                    lineHeight: 1.75,
                    fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                  }}
                >
                  <p>
                    Ryan is a serial entrepreneur with a business degree and a history of founding
                    and operating multiple successful ventures. His passion for business runs deep —
                    not just as an investment thesis, but as a genuine craft.
                  </p>
                  <p>
                    Over time, Ryan shifted his focus increasingly toward online businesses. The
                    scalability of digital enterprises, combined with greater operational flexibility,
                    creates the ideal environment for building and managing a diverse portfolio
                    efficiently.
                  </p>
                  <p>
                    Through Integrity Acquisitions, Ryan's goal is straightforward: find great
                    businesses, work with the people behind them, and build something that lasts.
                  </p>
                </div>
              </div>

              {/* Quote card */}
              <div
                style={{
                  backgroundColor: "#f8f9fb",
                  border: "1px solid #e5e7eb",
                  borderLeft: "4px solid #1a3c5e",
                  borderRadius: "0.75rem",
                  padding: "2.5rem",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-lora), Georgia, serif",
                    fontSize: "clamp(1.0625rem, 2.5vw, 1.25rem)",
                    color: "#111827",
                    lineHeight: 1.7,
                    fontStyle: "italic",
                    marginBottom: "1.5rem",
                  }}
                >
                  "The best deals aren't won through leverage — they're built through trust.
                  Our goal is always to create a situation where everyone walks away better off
                  than when they started."
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <div
                    style={{
                      width: "2.5rem",
                      height: "2.5rem",
                      borderRadius: "50%",
                      backgroundColor: "#1a3c5e",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#ffffff",
                      fontWeight: 700,
                      fontSize: "1rem",
                      fontFamily: "var(--font-lora), Georgia, serif",
                      flexShrink: 0,
                    }}
                  >
                    R
                  </div>
                  <div>
                    <p
                      style={{
                        color: "#111827",
                        fontWeight: 600,
                        fontSize: "0.9375rem",
                        fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                      }}
                    >
                      Ryan
                    </p>
                    <p
                      style={{
                        color: "#4b5563",
                        fontSize: "0.8125rem",
                        fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                      }}
                    >
                      Founder, Integrity Acquisitions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy pillars */}
        <section
          style={{ backgroundColor: "#f8f9fb", borderTop: "1px solid #e5e7eb", borderBottom: "1px solid #e5e7eb" }}
          className="py-20 md:py-28"
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-14">
              <h2
                style={{
                  fontFamily: "var(--font-lora), Georgia, serif",
                  color: "#111827",
                  fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                  fontWeight: 700,
                  marginBottom: "0.75rem",
                }}
              >
                Our Philosophy
              </h2>
              <p
                style={{
                  color: "#4b5563",
                  fontSize: "1.0625rem",
                  maxWidth: "480px",
                  margin: "0 auto",
                  fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                }}
              >
                Three principles guide everything we do.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pillars.map((p, i) => (
                <div
                  key={p.title}
                  style={{
                    backgroundColor: "#ffffff",
                    border: "1px solid #e5e7eb",
                    borderRadius: "0.75rem",
                    padding: "2rem",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "1.5rem",
                      right: "1.5rem",
                      fontFamily: "var(--font-lora), Georgia, serif",
                      fontSize: "3rem",
                      fontWeight: 700,
                      color: "#1a3c5e",
                      opacity: 0.08,
                      lineHeight: 1,
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-lora), Georgia, serif",
                      color: "#111827",
                      fontSize: "1.1875rem",
                      fontWeight: 700,
                      marginBottom: "0.75rem",
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    style={{
                      color: "#4b5563",
                      fontSize: "0.9375rem",
                      lineHeight: 1.7,
                      fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                    }}
                  >
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2
              style={{
                fontFamily: "var(--font-lora), Georgia, serif",
                color: "#111827",
                fontSize: "clamp(1.5rem, 3.5vw, 2rem)",
                fontWeight: 700,
                marginBottom: "1rem",
              }}
            >
              Ready to start a conversation?
            </h2>
            <p
              style={{
                color: "#4b5563",
                fontSize: "1.0625rem",
                marginBottom: "2rem",
                lineHeight: 1.7,
                fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
              }}
            >
              Whether you're thinking about selling or just want to learn more about what we do,
              we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                style={{
                  display: "inline-block",
                  backgroundColor: "#1a3c5e",
                  color: "#ffffff",
                  padding: "0.875rem 2rem",
                  borderRadius: "0.375rem",
                  fontWeight: 600,
                  fontSize: "1rem",
                  textDecoration: "none",
                  fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                }}
              >
                Get in Touch
              </Link>
              <Link
                href="/what-we-look-for"
                style={{
                  display: "inline-block",
                  backgroundColor: "transparent",
                  color: "#1a3c5e",
                  padding: "0.875rem 2rem",
                  borderRadius: "0.375rem",
                  fontWeight: 600,
                  fontSize: "1rem",
                  textDecoration: "none",
                  border: "2px solid #1a3c5e",
                  fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                }}
              >
                What We Look For
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
