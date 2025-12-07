export default function Services(){
  return (
    <section className="section">
      <div className="container">
        <h1>Услуги</h1>
        <p style={{color:'var(--muted)'}}>Полный спектр работ — от идеи до запуска.</p>
        <div style={{display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:18, marginTop:18}}>
          <div className="card-ghost">
            <h3>Лендинги</h3>
            <p style={{color:'var(--muted)'}}>Оптимизированные страницы под рекламу.</p>
          </div>
          <div className="card-ghost">
            <h3>Быстрые визитки</h3>
            <p style={{color:'var(--muted)'}}>Быстрое решение для контактов и услуг.</p>
          </div>
          <div className="card-ghost">
            <h3>Поддержка</h3>
            <p style={{color:'var(--muted)'}}>Техническая поддержка и хостинг — по желанию.</p>
          </div>
          <div className="card-ghost">
            <h3>SEO & Analytics</h3>
            <p style={{color:'var(--muted)'}}>Базовая настройка аналитики и SEO.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
