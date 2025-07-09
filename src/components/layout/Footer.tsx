import React from "react";

function Footer() {
  return (
    <footer
      style={{
        background: "var(--color-secondary)",
        color: "#fff",
        padding: "2.5rem 1.5rem 1rem 1.5rem",
        fontFamily: "var(--font-brasilia-short)",
        boxShadow: "0 -2px 8px 0 rgba(0,0,0,0.04)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "2rem",
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        {/* Address & Phone */}
        <div style={{ minWidth: 180, flex: 1 }}>
          <h4 style={{ fontWeight: 700, marginBottom: 8, fontSize: 18 }}>
            Address
          </h4>
          <div style={{ fontSize: 15, marginBottom: 6 }}>
            4401 McCarthy Street
            <br />
            North Charleston, SC 29405
          </div>
          <div style={{ fontSize: 15 }}>
            Phone:{" "}
            <a
              href="tel:843.885.4663"
              style={{ color: "#fff", textDecoration: "underline dotted" }}
            >
              843-885-4663
            </a>
          </div>
        </div>
        {/* Hours */}
        <div style={{ minWidth: 180, flex: 1 }}>
          <h4 style={{ fontWeight: 700, marginBottom: 8, fontSize: 18 }}>
            Hours
          </h4>
          <div style={{ fontSize: 15 }}>
            <strong>Office:</strong>
            <br />
            Mon–Fri 9am–5pm
            <br />
            <br />
            <strong>Pool Deck:</strong>
            <br />
            Open Daily Sunrise to Sunset
            <br />
            <br />
            <strong>Fitness Center:</strong>
            <br />
            Open 24/7
          </div>
        </div>
        {/* Contact */}
        <div style={{ minWidth: 180, flex: 1 }}>
          <h4 style={{ fontWeight: 700, marginBottom: 8, fontSize: 18 }}>
            Contact
          </h4>
          <div style={{ fontSize: 15, marginTop: 8 }}>
            <a
              href="mailto:hospitality@paradisochs.com"
              style={{ color: "#fff", textDecoration: "underline dotted" }}
            >
              hospitality@paradisochs.com
            </a>
          </div>
          <div style={{ fontSize: 15, marginTop: 8 }}>
            <a
              href="/contact"
              style={{ color: "#fff", textDecoration: "underline dotted" }}
            >
              Contact Form
            </a>
          </div>
        </div>
      </div>
      {/* Social Media Row */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1.5rem",
          marginTop: 32,
        }}
      >
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          style={{ color: "#fff", fontSize: 24 }}
        >
          {/* Instagram SVG */}
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="2"
              y="2"
              width="20"
              height="20"
              rx="6"
              fill="none"
              stroke="#fff"
              strokeWidth="2"
            />
            <circle
              cx="12"
              cy="12"
              r="5"
              stroke="#fff"
              strokeWidth="2"
              fill="none"
            />
            <circle cx="17" cy="7" r="1.2" fill="#fff" />
          </svg>
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          style={{ color: "#fff", fontSize: 24 }}
        >
          {/* Facebook SVG */}
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="2"
              y="2"
              width="20"
              height="20"
              rx="6"
              fill="none"
              stroke="#fff"
              strokeWidth="2"
            />
            <path
              d="M15.5 8.5H14C13.1716 8.5 12.5 9.17157 12.5 10V12.5H11V15H12.5V21H15V15H16.5L17 12.5H15V10.75C15 10.6119 15.1119 10.5 15.25 10.5H17V8.5H15.5Z"
              fill="#fff"
            />
          </svg>
        </a>
      </div>
      {/* Copyright */}
      <div
        style={{
          textAlign: "center",
          marginTop: 18,
          fontSize: 13,
          opacity: 0.7,
        }}
      >
        © {new Date().getFullYear()} Paradiso. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
