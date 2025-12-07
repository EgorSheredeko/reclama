import '../globals.css'

export const metadata = {
  title: 'Mini Sites — stylish landing & micro-sites',
  description: 'We build minimal, lovely mini-sites and landing pages — fast and affordable.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <header className="header">
          <div className="container header-inner">
            <div className="logo">
              <div className="logo-icon">MS</div>
              <div className="logo-text">
                <div className="logo-name">Mini Sites</div>
                <div className="logo-slogan">быстро. стильно. доступно.</div>
              </div>
            </div>

            <nav className="nav">
              <a href="/">Главная</a>
              <a href="/services">Услуги</a>
              <a href="/portfolio">Примеры</a>
              <a href="/pricing">Тарифы</a>
              <a href="/contact" className="btn btn-nav">Связаться</a>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="footer">
          <div className="container footer-inner">
            <div className="footer-left">
              <div className="footer-name">Mini Sites</div>
              <div className="footer-desc">Создание мини-сайтов и лендингов</div>
            </div>
            <div className="footer-right">
              © {new Date().getFullYear()} Mini Sites — Все права защищены
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
