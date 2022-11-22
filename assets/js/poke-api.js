
// cosumindo a api na front end
const pokeApi = {}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url).then((response) => response.json())}// transformando a lista em um json


pokeApi.getPokemons = (offset =0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    return fetch(url) // Buscando lista no servidor  = url 
        .then((response) => response.json()) //quando a promise for resolvida Convertendo o body para json 
        .then((jsonBody) => jsonBody.results) //transforma json em uma lista
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))//transformando a lista pokemon e uma lista de promisse da nova requisição do url
        .then((detailRequests) => Promise.all(detailRequests))// pegando e esperando que todas informaçoes do pokemons termine
        .then((pokemonsDetails) => pokemonsDetails) // devolvendo uma lista de detalhes de pokemon
}

