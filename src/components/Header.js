"use client";
import { useState, useEffect } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  // Читаем состояние из localStorage при загрузке
  useEffect(() => {
    const saved = localStorage.getItem("menuOpen");
    if (saved === "true") setOpen(true);
  }, []);

  // Переключение меню и сохранение в localStorage
  const toggleMenu = () => {
    setOpen(prev => {
      localStorage.setItem("menuOpen", !prev);
      return !prev;
    });
  };

  return (
    <>
      {/* Кнопка бургер */}
      <div
        className="burger"
        onClick={toggleMenu}
        style={{
          position: "fixed",
          top: 16,
          right: 16,
          zIndex: 110,
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: 28,
          height: 20,
        }}
      >
        <span style={{ display: "block", height: 3, background: "#8C7A65", borderRadius: 2, transition: "all 0.3s ease" }}></span>
        <span style={{ display: "block", height: 3, background: "#8C7A65", borderRadius: 2, transition: "all 0.3s ease" }}></span>
        <span style={{ display: "block", height: 3, background: "#8C7A65", borderRadius: 2, transition: "all 0.3s ease" }}></span>
      </div>

      {/* Мобильное меню */}
      <nav
        className={`mobile-nav ${open ? "open" : ""}`}
        style={{
          position: "fixed",
          top: 0,
          left: open ? 0 : "-280px",
          width: 280,
          height: "100%",
          background: "#F4EDE2",
          padding: "60px 24px",
          display: "flex",
          flexDirection: "column",
          gap: 24,
          boxShadow: "4px 0 30px rgba(0,0,0,0.15)",
          transition: "left 0.4s ease",
          borderRight: "1px solid rgba(140,122,101,0.1)",
          zIndex: 100,
        }}
      >
        <a href="/">Home</a>
        <a href="/pricing">About</a>
        <a href="/services">Services</a>
        <a href="/portfolio">Portfolio</a>
        <a href="/pricing">Pricing</a>
        <a href="/contact">Contact</a>
        <div style={{ marginTop: "auto", fontSize: 12, color: "#A89582", textAlign: "center" }}>
          © 2025 Mini Sites
        </div>
      </nav>
    </>
  );
}
