import axios from "axios";

const livrosApi = axios.create({ baseURL: "http://localhost:8000/livros" });

async function getLivros() {
    const response = await livrosApi.get('/') // após declarar a função como assíncrona, foi colocado o await com a intenção de sinalizar que a função deve esperar a resposta do get

    return response.data
}

export { getLivros }
