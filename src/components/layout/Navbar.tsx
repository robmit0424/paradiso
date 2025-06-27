"use client";
import React, { useEffect, useState } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-8 py-3 flex items-center justify-between h-16 md:h-20
          ${
            scrolled
              ? "bg-[var(--color-primary)] bg-opacity-95 backdrop-blur-md shadow-md text-white"
              : "bg-transparent text-white"
          }`}
    >
      <div className="flex items-center gap-3">
        <img
          src="/Paradiso-Icon-Round.png"
          alt="Paradiso Icon"
          className="w-10 h-10 rounded-full"
        />
        <h2
          style={{
            fontFamily: "var(--font-silverstreak)",
            fontSize: "2rem",
            margin: 0,
            color: "#fff",
            paddingBottom: 4,
          }}
        >
          Paradiso
        </h2>
      </div>
      <ul
        style={{
          display: "flex",
          gap: "2rem",
          listStyle: "none",
          fontSize: "1.25rem",
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
              fontFamily: "var(--font-brasilia-short)",
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
              fontFamily: "var(--font-brasilia-short)",
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
              fontFamily: "var(--font-brasilia-short)",
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
              fontFamily: "var(--font-brasilia-short)",
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
              fontFamily: "var(--font-brasilia-short)",
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
              fontFamily: "var(--font-brasilia-short)",
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
              fontFamily: "var(--font-brasilia-short)",
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
