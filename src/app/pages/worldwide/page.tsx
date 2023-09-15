
export default function WorldwidePage() {
  return (
    <section className="section-container">
    <div className="main-div">
      <div className="container">
        <h2 className="title">Casos de Covid-19 no Mundo</h2>
        <form className="form-container">
          <div className="form-element">
            <label className="form-label" htmlFor="country">
              País
            </label>
            <select className="form-select" id="country">
              <option value="Brasil">Brasil</option>
            </select>
          </div>
          <div className="flex items-center justify-between">
            <button className="form-button" type="submit">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
  );
}