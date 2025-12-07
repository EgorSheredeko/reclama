import '../globals.css'

export const metadata = {
  title: 'Mini Sites — stylish landing & micro-sites',
  description: 'We build minimal, lovely mini-sites and landing pages — fast and affordable.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        {/* Header */}
        <header className="header">
          <div className="container header-inner">
            <div style={{display:'flex',alignItems:'center',gap:12}}>
              <div className="logo" style={{
                background:'linear-gradient(180deg,#C6B9A4,#E8DCC8)'
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
          </div>
        </header>

        <main>{children}</main>

        <footer className="footer">
          <div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:24,flexWrap:'wrap'}}>
            <div>
              <div style={{fontWeight:700}}>Mini Sites</div>
              <div style={{fontSize:13}}>Создание мини-сайтов и лендингов</div>
            </div>
            <div style={{fontSize:13}}>© {new Date().getFullYear()} Mini Sites — Все права защищены</div>
          </div>
        </footer>
      </body>
    </html>
  )
}
