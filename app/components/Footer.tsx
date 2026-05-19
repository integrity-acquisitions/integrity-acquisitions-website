import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: "#1a3c5e",
        color: "#ffffff",
        marginTop: "auto",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Integrity Acquisitions"
              width={44}
              height={38}
              style={{ height: "auto", filter: "brightness(0) invert(1)" }}
            />
            <div>
              <p
                style={{
                  fontFamily: "var(--font-lora), Georgia, serif",
                  fontWeight: 600,
                  fontSize: "1rem",
                  lineHeight: 1.25,
                }}
              >
                Integrity Acquisitions
              </p>
              <p style={{ fontSize: "0.8125rem", opacity: 0.7, marginTop: "0.125rem" }}>
                Business Buying & Investing
              </p>
            </div>
          </div>

          {/* Nav links */}
          <nav>
            <ul className="flex flex-wrap gap-6">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/what-we-look-for", label: "What We Look For" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    style={{
                      color: "rgba(255,255,255,0.8)",
                      textDecoration: "none",
                      fontSize: "0.9rem",
                      fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                    }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.15)",
            marginTop: "2rem",
            paddingTop: "1.5rem",
          }}
        >
          <p style={{ fontSize: "0.8125rem", opacity: 0.55 }}>
            &copy; {year} Integrity Acquisitions. All rights reserved. Canada &amp; Worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
}
