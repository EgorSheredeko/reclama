// src/app/layout.js — серверный компонент
import '../globals.css';
import Header from '../components/Header';

export const metadata = {
  title: 'Mini Sites — stylish landing & micro-sites',
  description: 'Мы делаем мини-сайты быстро и стильно'
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <Header /> {/* Header сам будет клиентским */}
        <main>{children}</main>
        <footer className="footer">
          <div
            className="container"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 24,
              flexWrap: 'wrap'
            }}
          >
            <div>
              <div style={{ fontWeight: 700 }}>Mini Sites</div>
              <div style={{ fontSize: 13 }}>Создание мини-сайтов и лендингов</div>
            </div>
            <div style={{ fontSize: 13 }}>
              © {new Date().getFullYear()} Mini Sites — Все права защищены
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
