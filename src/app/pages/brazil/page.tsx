
export default function BrazilPage() {
    return (
        <section className="container center">
            <div className="bg-blue-500 text-white m-10 p-10 rounded-2xl">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl mb-8">Casos de Covid-19 no Brasil</h2>
                    <form className="w-full max-w-lg mx-auto">
                        <div className="mb-6">
                            <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
                                Estado
                            </label>
                            <select
                                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="name"
                                placeholder="Seu nome"
                            >
                                <option value="Brasil" ></option>
                            </select>
                        </div>
                        <div className="mb-6">
                            <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
                                Cidade
                            </label>
                            <select
                                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="name"
                                placeholder="Seu nome"
                            >
                                <option value="Brasil">São Paulo</option>
                            </select>
                        </div>
                        <div className="flex items-center justify-between">
                            <button className="bg-white text-blue-500 hover:text-blue-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                Enviar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}