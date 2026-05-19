"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/what-we-look-for", label: "What We Look For" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{ borderBottom: "1px solid #e5e7eb", backgroundColor: "#ffffff" }}
      className="sticky top-0 z-50"
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/logo.png"
            alt="Integrity Acquisitions"
            width={48}
            height={41}
            priority
            style={{ height: "auto" }}
          />
          <span
            style={{
              fontFamily: "var(--font-lora), Georgia, serif",
              color: "#1a3c5e",
              fontWeight: 600,
              fontSize: "1.05rem",
              lineHeight: 1.25,
            }}
          >
            Integrity<br />Acquisitions
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                style={{
                  color: "#4b5563",
                  fontSize: "0.9375rem",
                  fontWeight: 500,
                  textDecoration: "none",
                  transition: "color 0.15s",
                  fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                }}
                className="hover:text-[#1a3c5e]"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="hidden md:inline-flex"
          style={{
            backgroundColor: "#1a3c5e",
            color: "#ffffff",
            padding: "0.5rem 1.25rem",
            borderRadius: "0.375rem",
            fontSize: "0.9375rem",
            fontWeight: 600,
            textDecoration: "none",
            fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
            transition: "background-color 0.15s",
          }}
        >
          Let's Talk
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          style={{ color: "#1a3c5e" }}
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div style={{ borderTop: "1px solid #e5e7eb", backgroundColor: "#ffffff" }} className="md:hidden">
          <ul className="flex flex-col px-6 py-4 gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  style={{
                    color: "#111827",
                    fontSize: "1rem",
                    fontWeight: 500,
                    textDecoration: "none",
                    fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                  }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                style={{
                  display: "inline-block",
                  backgroundColor: "#1a3c5e",
                  color: "#ffffff",
                  padding: "0.5rem 1.25rem",
                  borderRadius: "0.375rem",
                  fontSize: "0.9375rem",
                  fontWeight: 600,
                  textDecoration: "none",
                  fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                }}
              >
                Let's Talk
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
