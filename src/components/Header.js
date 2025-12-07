"use client";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-inner container">
        {/* Логотип */}
        <div className="logo">
          <div className="logo-icon">M</div> {/* можно любой символ или букву */}
          <div className="logo-text">
            <div className="logo-name">MySite</div>
            <div className="logo-slogan">Welcome</div>
          </div>
        </div>

        {/* Бургер */}
        <div className="burger" onClick={() => setOpen(!open)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Мобильное меню */}
        <nav className={`mobile-nav ${open ? "open" : ""}`}>
          <a href="/">Home</a>
          <a href="/pricing">About</a>
          <a href="/services">Services</a>
          <a href="/portfolio">Portfolio</a>
          <a href="/contact">Contact</a>
          <div className="nav-footer">© 2025 MySite</div>
        </nav>
      </div>
    </header>
  );
}
