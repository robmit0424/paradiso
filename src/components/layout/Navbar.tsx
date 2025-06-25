import React from "react";

function Navbar() {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "var(--color-primary)",
        color: "#fff",
        boxShadow: "0 2px 8px 0 rgba(0,0,0,0.04)",
        padding: "0.75rem 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        minHeight: "64px",
      }}
    >
      <h1
        style={{
          fontFamily: "var(--font-silverstreak)",
          fontSize: "2rem",
          margin: 0,
          color: "#fff",
        }}
      >
        Paradiso
      </h1>
      <ul
        style={{
          display: "flex",
          gap: "2rem",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
      >
        <li>
          <a
            href="/"
            style={{
              color: "#fff",
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/dine"
            style={{
              color: "#fff",
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            Dine
          </a>
        </li>
        <li>
          <a
            href="/swim"
            style={{
              color: "#fff",
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            Swim
          </a>
        </li>
        <li>
          <a
            href="/vibe"
            style={{
              color: "#fff",
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            Vibe
          </a>
        </li>
        <li>
          <a
            href="/market"
            style={{
              color: "#fff",
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            Market
          </a>
        </li>
        <li>
          <a
            href="/contact"
            style={{
              color: "#fff",
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            Contact
          </a>
        </li>
        <li>
          <a
            href="/membership"
            style={{
              color: "#fff",
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            Membership
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
