import React from "react";

function Footer() {
  return (
    <footer
      style={{
        background: "var(--color-secondary)",
        color: "#fff",
        padding: "1.5rem 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "2rem",
        fontSize: "1rem",
        fontFamily: "var(--font-brasilia-short)",
        boxShadow: "0 -2px 8px 0 rgba(0,0,0,0.04)",
      }}
    >
      <a
        href="https://peoplevine.com/login"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: "#fff",
          textDecoration: "none",
          fontWeight: 500,
        }}
      >
        Login (PeopleVine)
      </a>
      <a
        href="https://www.toasttab.com/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: "#fff",
          textDecoration: "none",
          fontWeight: 500,
        }}
      >
        Order Now (Toast)
      </a>
    </footer>
  );
}

export default Footer;
