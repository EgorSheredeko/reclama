export default function Contact() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="text-3xl font-bold mb-4">Контакты</h1>
        <p className="text-muted mb-6">
          Напишите нам — обсудим задачу и подготовим предложение.
        </p>
        <div className="contact-grid">
          <div className="card">
            <form className="form">
              <label className="form-label">
                Имя
                <input type="text" name="name" className="form-input"/>
              </label>
              <label className="form-label">
                Email
                <input type="email" name="email" className="form-input"/>
              </label>
              <label className="form-label">
                Сообщение
                <textarea name="message" rows={6} className="form-input"></textarea>
              </label>
              <div className="mt-3">
                <button className="btn" type="button">Отправить</button>
              </div>
            </form>
          </div>
          <div className="card-ghost">
            <h3 className="text-xl font-semibold mb-2">Где мы</h3>
            <p className="text-muted mb-1">
              Работаем удалённо. Можем подключиться по почте или мессенджеру.
            </p>
            <p className="text-muted">WhatsApp  : +7 777 960 7512</p>
          </div>
        </div>
      </div>
    </section>
  )
}
