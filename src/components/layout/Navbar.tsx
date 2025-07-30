"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
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
      <Link
        href="/"
        className="flex items-center gap-3 cursor-pointer bg-transparent border-none p-0 m-0 focus:outline-none"
        style={{ textDecoration: "none" }}
        aria-label="Go to home page"
      >
        <Image
          src="/Paradiso-Icon-Round.png"
          alt="Paradiso Icon"
          className="w-10 h-10 rounded-full"
          width={40}
          height={40}
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
      </Link>
      <ul className="flex gap-8 list-none m-0 p-0 text-xl">
        <li>
          <Link
            href="/"
            className="text-white no-underline font-medium hover:-translate-y-0.5 transition-transform duration-200"
            style={{
              fontFamily: "var(--font-brasilia-short)",
            }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/dine"
            className="text-white no-underline font-medium hover:-translate-y-0.5 transition-transform duration-200"
            style={{
              fontFamily: "var(--font-brasilia-short)",
            }}
          >
            Dine
          </Link>
        </li>
        <li>
          <Link
            href="/swim"
            className="text-white no-underline font-medium hover:-translate-y-0.5 transition-transform duration-200"
            style={{
              fontFamily: "var(--font-brasilia-short)",
            }}
          >
            Swim
          </Link>
        </li>
        <li>
          <Link
            href="/vibe"
            className="text-white no-underline font-medium hover:-translate-y-0.5 transition-transform duration-200"
            style={{
              fontFamily: "var(--font-brasilia-short)",
            }}
          >
            Vibe
          </Link>
        </li>

        <li>
          <Link
            href="/lodging"
            className="text-white no-underline font-medium hover:-translate-y-0.5 transition-transform duration-200"
            style={{
              fontFamily: "var(--font-brasilia-short)",
            }}
          >
            Lodging
          </Link>
        </li>
        <li>
          <Link
            href="https://themarketparadiso.com/"
            target="_blank"
            className="text-white no-underline font-medium hover:-translate-y-0.5 transition-transform duration-200"
            style={{
              fontFamily: "var(--font-brasilia-short)",
            }}
          >
            Market
          </Link>
        </li>
        <li>
          <Link
            href="/membership"
            className="text-white no-underline font-medium hover:-translate-y-0.5 transition-transform duration-200"
            style={{
              fontFamily: "var(--font-brasilia-short)",
            }}
          >
            Membership
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
