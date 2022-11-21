
// cosumindo a api na front end
const pokeApi = {}

pokeApi.getPokemons = (offset =0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    return fetch(url)
        .then((response) => response.json()) //quando a promise for resolvida Convertendo o body para json 
        .then((jsonBody) => jsonBody.results) //quando a promise reponse for convertida e resolvida se transforma jsonBody que com o resultado da json se trangforma em pkemon list
        .catch((error) => console.error(error))
}