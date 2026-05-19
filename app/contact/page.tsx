import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Integrity Acquisitions",
  description:
    "Get in touch with Integrity Acquisitions. We'd love to have a conversation about your business.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
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
              Reach Out
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
              It all starts with<br />a conversation.
            </h1>
            <p
              style={{
                color: "#4b5563",
                fontSize: "1.0625rem",
                lineHeight: 1.75,
                fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
              }}
            >
              Whether you're exploring the idea of selling your business, looking for a partner, or
              just want to learn more — we'd love to hear from you. Fill out the form below and we'll
              be in touch.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16">
              {/* Sidebar */}
              <div className="md:col-span-2">
                <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
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
                      No pressure
                    </h3>
                    <p
                      style={{
                        color: "#4b5563",
                        fontSize: "0.9rem",
                        lineHeight: 1.7,
                        fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                      }}
                    >
                      Reaching out doesn't commit you to anything. We'll have a candid conversation
                      to see if there's a fit.
                    </p>
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
                      Confidential
                    </h3>
                    <p
                      style={{
                        color: "#4b5563",
                        fontSize: "0.9rem",
                        lineHeight: 1.7,
                        fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                      }}
                    >
                      All inquiries are handled with complete discretion. Your information stays
                      between us.
                    </p>
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
                      Quick response
                    </h3>
                    <p
                      style={{
                        color: "#4b5563",
                        fontSize: "0.9rem",
                        lineHeight: 1.7,
                        fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                      }}
                    >
                      We aim to respond to all inquiries within 1–2 business days.
                    </p>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="md:col-span-3">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
