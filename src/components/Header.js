// src/components/Header.js
"use client";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-inner">
        <div style={{display:'flex',alignItems:'center',gap:12}}>
          <div className="logo" style={{
            width:48,height:48, borderRadius:10,
            background:'linear-gradient(180deg,#C6B9A4,#E8DCC8)',
            display:'flex',alignItems:'center',justifyContent:'center', fontWeight:700, color:'#fff'
          }}>MS</div>
          <div>
            <div style={{fontWeight:700}}>Mini Sites</div>
            <div style={{fontSize:12,color:'var(--muted)'}}>быстро. стильно. доступно.</div>
          </div>
        </div>

        <nav style={{display:'flex',gap:18,alignItems:'center'}}>
          <a href="/" style={{textDecoration:'none',color:'var(--text)'}}>Главная</a>
          <a href="/services" style={{textDecoration:'none',color:'var(--text)'}}>Услуги</a>
          <a href="/portfolio" style={{textDecoration:'none',color:'var(--text)'}}>Примеры</a>
          <a href="/pricing" style={{textDecoration:'none',color:'var(--text)'}}>Тарифы</a>
          <a href="/contact" className="btn" style={{padding:'8px 14px'}}>Связаться</a>
        </nav>

        <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`mobile-nav ${menuOpen ? "open" : ""}`}>
          <a href="/" onClick={() => setMenuOpen(false)}>Главная</a>
          <a href="/services" onClick={() => setMenuOpen(false)}>Услуги</a>
          <a href="/portfolio" onClick={() => setMenuOpen(false)}>Примеры</a>
          <a href="/pricing" onClick={() => setMenuOpen(false)}>Тарифы</a>
          <a href="/contact" className="btn" onClick={() => setMenuOpen(false)}>Связаться</a>
        </div>
      </div>
    </header>
  );
}
