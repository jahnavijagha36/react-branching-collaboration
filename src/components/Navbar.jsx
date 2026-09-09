import React from "react";

export default function Navbar() {
  return (
    <nav style={{ padding: 10, background: "#eee" }}>
      <a href="#home" style={{ marginRight: 15 }}>
        Home
      </a>

      <a href="#contact">
        Contact
      </a>
    </nav>
  );
}