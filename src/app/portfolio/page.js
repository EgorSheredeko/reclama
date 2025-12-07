export default function Portfolio() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="text-3xl font-bold mb-4">Примеры работ</h1>
        <p className="text-muted mb-6">Короткие кейсы и скриншоты.</p>
        <div className="portfolio-grid">
          <div className="card">
            <img src="/placeholder.svg" alt="Project 1" className="portfolio-img"/>
          </div>
          <div className="card">
            <img src="/placeholder.svg" alt="Project 2" className="portfolio-img"/>
          </div>
          <div className="card">
            <img src="/placeholder.svg" alt="Project 3" className="portfolio-img"/>
          </div>
        </div>
      </div>
    </section>
  )
}
