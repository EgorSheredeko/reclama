export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-left">
          <div className="hero-text">
            <h1 className="hero-title">
              Стильные мини-сайты<br/>для вашего бизнеса
            </h1>
            <p className="text-muted hero-desc">
              Быстро запускаем лендинги, визитки и промо-страницы — в нежной пастельной эстетике, оптимизированные под конверсию.
            </p>
            <div className="hero-buttons">
              <a className="btn" href="/contact">Заказать сайт</a>
              <a className="btn-outline" href="/pricing">Посмотреть тарифы</a>
            </div>
          </div>
        </div>
        <div className="container hero-right">
          <div className="card hero-card">
            <img src="/placeholder.svg" alt="preview" className="hero-img"/>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Что мы делаем</h2>
          <div className="grid">
            <div className="card-ghost">
              <h3>Лендинги под продажу</h3>
              <p className="text-muted">
                Короткие страницы, фокус на продукт и CTA — идеально для запусков.
              </p>
            </div>
            <div className="card-ghost">
              <h3>Визитки и портфолио</h3>
              <p className="text-muted">
                Простые и красивые страницы для представления услуг и кейсов.
              </p>
            </div>
            <div className="card-ghost">
              <h3>Шаблоны и редизайн</h3>
              <p className="text-muted">
                Готовые шаблоны и быстрые редизайны ваших страниц.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="section section-portfolio">
        <div className="container">
          <h2 className="section-title">Портфолио</h2>
          <p className="text-muted mb-6">Несколько примеров готовых работ.</p>
          <div className="portfolio-grid">
            <div className="card"><img src="/placeholder.svg" alt="Project 1" className="portfolio-img"/></div>
            <div className="card"><img src="/placeholder.svg" alt="Project 2" className="portfolio-img"/></div>
            <div className="card"><img src="/placeholder.svg" alt="Project 3" className="portfolio-img"/></div>
          </div>
        </div>
      </section>
    </>
  )
}
