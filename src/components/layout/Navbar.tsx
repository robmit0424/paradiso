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
      <ul className="flex gap-8 list-none m-0 p-0 text-xl">
        <li>
          <a
            href="/"
            className="text-white no-underline font-medium hover:-translate-y-0.5 transition-transform duration-200"
            style={{
              fontFamily: "var(--font-brasilia-short)",
            }}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/dine"
            className="text-white no-underline font-medium hover:-translate-y-0.5 transition-transform duration-200"
            style={{
              fontFamily: "var(--font-brasilia-short)",
            }}
          >
            Dine
          </a>
        </li>
        <li>
          <a
            href="/swim"
            className="text-white no-underline font-medium hover:-translate-y-0.5 transition-transform duration-200"
            style={{
              fontFamily: "var(--font-brasilia-short)",
            }}
          >
            Swim
          </a>
        </li>
        <li>
          <a
            href="/vibe"
            className="text-white no-underline font-medium hover:-translate-y-0.5 transition-transform duration-200"
            style={{
              fontFamily: "var(--font-brasilia-short)",
            }}
          >
            Vibe
          </a>
        </li>
        <li>
          <a
            href="https://themarketparadiso.com/"
            className="text-white no-underline font-medium hover:-translate-y-0.5 transition-transform duration-200"
            style={{
              fontFamily: "var(--font-brasilia-short)",
            }}
          >
            Market
          </a>
        </li>
        <li>
          <a
            href="/contact"
            className="text-white no-underline font-medium hover:-translate-y-0.5 transition-transform duration-200"
            style={{
              fontFamily: "var(--font-brasilia-short)",
            }}
          >
            Contact
          </a>
        </li>
        <li>
          <a
            href="https://join.paradisochs.com/mixson-individual-membership"
            target="_blank"
            className="text-white no-underline font-medium hover:-translate-y-0.5 transition-transform duration-200"
            style={{
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
