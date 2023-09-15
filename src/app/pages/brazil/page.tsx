import './brazil.css'
export default function BrazilPage() {
    return (
        <section className="section-container">
            <div className="main-div">
                <div className="container">
                    <h2 className="title">Casos de Covid-19 no Brasil</h2>
                    <form className="form-container">
                        <div className="form-element">
                            <label className="form-label" htmlFor="state">
                                Estado
                            </label>
                            <select className="form-select focus:shadow-outline" id="state">
                                <option value="Brasil"></option>
                            </select>
                        </div>
                        <div className="form-element">
                            <label className="form-label" htmlFor="city">
                                Cidade
                            </label>
                            <select className="form-select" id="city">
                                <option value="Brasil">São Paulo</option>
                            </select>
                        </div>
                        <div className="flex items-center justify-between">
                            <button className="form-button focus:outline-none " type="submit">
                                Enviar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}