import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const valueProps = [
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#1a3c5e" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
    title: "Win/Win Philosophy",
    body:
      "We believe the best deals leave everyone better off. Our process is built around creating outcomes that work for sellers, partners, and the businesses themselves.",
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#1a3c5e" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: "Experienced Operators",
    body:
      "Led by a serial entrepreneur with a business degree and a track record of founding and operating multiple successful ventures across industries.",
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#1a3c5e" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    title: "Online & Offline",
    body:
      "We evaluate both digital and traditional businesses. Our primary focus is online enterprises, but we consider all profitable opportunities regardless of model.",
  },
];

const steps = [
  {
    num: "01",
    title: "Reach Out",
    body: "Send us a message through our contact form. Tell us about your business — there's no obligation and no pressure.",
  },
  {
    num: "02",
    title: "We Evaluate",
    body: "We'll review the details and have a candid conversation to determine whether your business is a good fit for our portfolio.",
  },
  {
    num: "03",
    title: "We Make an Offer",
    body: "If it's a fit, we move quickly. We put together a fair offer and work toward a smooth, respectful transition for everyone involved.",
  },
];

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section
          style={{
            position: "relative",
            overflow: "hidden",
            minHeight: "560px",
            display: "flex",
            alignItems: "center",
          }}
          className="py-24 md:py-36"
        >
          {/* Background image */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: "url('/hero.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              zIndex: 0,
            }}
          />
          {/* Overlay: dark navy gradient for text legibility */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(135deg, rgba(10,20,38,0.82) 0%, rgba(26,60,94,0.70) 50%, rgba(10,20,38,0.75) 100%)",
              zIndex: 1,
            }}
          />
          {/* Content */}
          <div className="relative max-w-4xl mx-auto px-6 text-center" style={{ zIndex: 2 }}>
            <p
              style={{
                color: "rgba(180,210,240,0.9)",
                fontSize: "0.875rem",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: "1rem",
                fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
              }}
            >
              Canada &amp; Worldwide
            </p>
            <h1
              style={{
                fontFamily: "var(--font-lora), Georgia, serif",
                color: "#ffffff",
                fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
                fontWeight: 700,
                lineHeight: 1.15,
                marginBottom: "1.5rem",
                textShadow: "0 2px 16px rgba(0,0,0,0.35)",
              }}
            >
              We Buy and Build<br />
              <span style={{ color: "#a8c8e8" }}>Profitable Businesses</span>
            </h1>
            <p
              style={{
                color: "rgba(255,255,255,0.82)",
                fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
                lineHeight: 1.75,
                maxWidth: "600px",
                margin: "0 auto 2.5rem",
                fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
              }}
            >
              We're a group of business buyers and investors committed to creating
              win/win outcomes — for sellers, partners, and the businesses we acquire.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                Start a Conversation
              </Link>
              <Link
                href="/what-we-look-for"
                style={{
                  display: "inline-block",
                  backgroundColor: "transparent",
                  color: "#ffffff",
                  padding: "0.875rem 2rem",
                  borderRadius: "0.375rem",
                  fontWeight: 600,
                  fontSize: "1rem",
                  textDecoration: "none",
                  border: "2px solid rgba(255,255,255,0.6)",
                  fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                }}
              >
                What We Look For
              </Link>
            </div>
          </div>
        </section>

        {/* Value Props */}
        <section className="py-20 md:py-28">
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
                Why Work With Us
              </h2>
              <p
                style={{
                  color: "#4b5563",
                  fontSize: "1.0625rem",
                  maxWidth: "520px",
                  margin: "0 auto",
                  fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                }}
              >
                We're not brokers. We're operators who buy, improve, and grow businesses long-term.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {valueProps.map((vp) => (
                <div
                  key={vp.title}
                  style={{
                    backgroundColor: "#f8f9fb",
                    border: "1px solid #e5e7eb",
                    borderRadius: "0.75rem",
                    padding: "2rem",
                  }}
                >
                  <div style={{ marginBottom: "1rem" }}>{vp.icon}</div>
                  <h3
                    style={{
                      fontFamily: "var(--font-lora), Georgia, serif",
                      color: "#111827",
                      fontSize: "1.1875rem",
                      fontWeight: 700,
                      marginBottom: "0.625rem",
                    }}
                  >
                    {vp.title}
                  </h3>
                  <p
                    style={{
                      color: "#4b5563",
                      fontSize: "0.9375rem",
                      lineHeight: 1.7,
                      fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                    }}
                  >
                    {vp.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section
          style={{ backgroundColor: "#f8f9fb", borderTop: "1px solid #e5e7eb", borderBottom: "1px solid #e5e7eb" }}
          className="py-20 md:py-28"
        >
          <div className="max-w-5xl mx-auto px-6">
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
                How It Works
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
                A straightforward process built on transparency and respect.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {steps.map((step, i) => (
                <div key={step.num} className="relative">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      marginBottom: "1rem",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-lora), Georgia, serif",
                        fontSize: "2rem",
                        fontWeight: 700,
                        color: "#1a3c5e",
                        opacity: 0.25,
                        lineHeight: 1,
                      }}
                    >
                      {step.num}
                    </span>
                    <h3
                      style={{
                        fontFamily: "var(--font-lora), Georgia, serif",
                        fontSize: "1.1875rem",
                        fontWeight: 700,
                        color: "#111827",
                      }}
                    >
                      {step.title}
                    </h3>
                  </div>
                  <p
                    style={{
                      color: "#4b5563",
                      fontSize: "0.9375rem",
                      lineHeight: 1.7,
                      fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                    }}
                  >
                    {step.body}
                  </p>
                  {i < steps.length - 1 && (
                    <div
                      className="hidden md:block absolute top-3 left-full w-12"
                      style={{
                        height: "1px",
                        backgroundColor: "#e5e7eb",
                        transform: "translateX(-1.5rem)",
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section
          style={{ backgroundColor: "#1a3c5e" }}
          className="py-20 md:py-24"
        >
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2
              style={{
                fontFamily: "var(--font-lora), Georgia, serif",
                color: "#ffffff",
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                fontWeight: 700,
                marginBottom: "1rem",
              }}
            >
              It all starts with a conversation.
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
              If you own a profitable business and are exploring your options, we'd love to connect.
              No pressure — just a candid conversation to see if it's a good fit.
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
              Get in Touch
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
