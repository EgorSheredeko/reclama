export default function Pricing() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="text-3xl font-bold mb-4">Тарифы</h1>
        <p className="text-muted mb-6">Простые и прозрачные цены.</p>

        <div className="pricing-grid">
          {/* Тариф Старт */}
          <div className="card">
            <h3 className="text-xl font-semibold mb-2">Старт</h3>
            <p className="text-muted mb-3">
              Одностраничный лендинг — быстрая реализация.
            </p>
            <div className="price"><strong>от 35 000₸</strong></div>
          </div>

          {/* Тариф Про */}
          <div className="card">
            <h3 className="text-xl font-semibold mb-2">Про</h3>
            <p className="text-muted mb-3">
              Визитка + портфолио, базовый SEO.
            </p>
            <div className="price"><strong>от 60 000₸</strong></div>
          </div>

          {/* Тариф Премиум */}
          <div className="card">
            <h3 className="text-xl font-semibold mb-2">Премиум</h3>
            <p className="text-muted mb-3">
              Шаблон + индивидуальная кастомизация дизайна, базовая SEO оптимизация и лёгкие анимации.
            </p>
            <div className="price"><strong>по запросу</strong></div>
          </div>
        </div>
      </div>
    </section>
  )
}
