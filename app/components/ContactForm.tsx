"use client";

import { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xovwnkgp", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setState("success");
        form.reset();
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.75rem 1rem",
    border: "1px solid #e5e7eb",
    borderRadius: "0.375rem",
    fontSize: "0.9375rem",
    color: "#111827",
    backgroundColor: "#ffffff",
    fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
    outline: "none",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "0.875rem",
    fontWeight: 600,
    color: "#374151",
    marginBottom: "0.375rem",
    fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
  };

  if (state === "success") {
    return (
      <div
        style={{
          backgroundColor: "#f0f7f0",
          border: "1px solid #bbdbb8",
          borderRadius: "0.75rem",
          padding: "2.5rem",
          textAlign: "center",
        }}
      >
        <svg
          width="48"
          height="48"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#16a34a"
          strokeWidth={1.5}
          style={{ margin: "0 auto 1rem" }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3
          style={{
            fontFamily: "var(--font-lora), Georgia, serif",
            color: "#111827",
            fontSize: "1.25rem",
            fontWeight: 700,
            marginBottom: "0.5rem",
          }}
        >
          Message sent!
        </h3>
        <p style={{ color: "#4b5563", fontSize: "0.9375rem", fontFamily: "var(--font-dm-sans), system-ui, sans-serif" }}>
          Thanks for reaching out. We'll be in touch within 1–2 business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" style={labelStyle}>First Name</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            placeholder="Ryan"
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor="lastName" style={labelStyle}>Last Name</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            placeholder="Smith"
            style={inputStyle}
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" style={labelStyle}>Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          style={inputStyle}
        />
      </div>

      <div>
        <label htmlFor="message" style={labelStyle}>Tell us about your business</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Give us a brief overview — type of business, approximate revenue, and what you're looking to explore."
          style={{ ...inputStyle, resize: "vertical", minHeight: "120px" }}
        />
      </div>

      {state === "error" && (
        <p style={{ color: "#dc2626", fontSize: "0.875rem", fontFamily: "var(--font-dm-sans), system-ui, sans-serif" }}>
          Something went wrong. Please try again or email us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={state === "submitting"}
        style={{
          backgroundColor: state === "submitting" ? "#2d5f8a" : "#1a3c5e",
          color: "#ffffff",
          padding: "0.875rem 2rem",
          borderRadius: "0.375rem",
          fontWeight: 600,
          fontSize: "1rem",
          border: "none",
          cursor: state === "submitting" ? "not-allowed" : "pointer",
          fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
          width: "100%",
          transition: "background-color 0.15s",
        }}
      >
        {state === "submitting" ? "Sending…" : "Send Message"}
      </button>

      <p style={{ fontSize: "0.8125rem", color: "#9ca3af", textAlign: "center", fontFamily: "var(--font-dm-sans), system-ui, sans-serif" }}>
        All inquiries are handled with discretion. No obligation.
      </p>
    </form>
  );
}
