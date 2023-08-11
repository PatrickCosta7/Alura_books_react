import axios from "axios";

const favoritosApi = axios.create({ baseURL: "http://localhost:8000/favoritos" });

async function getFavoritos() {
    const response = await favoritosApi.get('/') // após declarar a função como assíncrona, foi colocado o await com a intenção de sinalizar que a função deve esperar a resposta do get

    return response.data
}

export { getFavoritos }
