
// cosumindo a api na front end
const pokeApi = {}

//criando meu modelo de objeto pokemon-model - e convertendo a PokeApi
function convertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.order
    pokemon.name = pokeDetail.name
    
    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const[type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    return pokemon
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())// transformando a lista em um json
        .then(convertPokeApiDetailToPokemon)

}
pokeApi.getPokemons = (offset =0, limit = 50) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    return fetch(url) // Buscando lista no servidor  = url 
        .then((response) => response.json()) //quando a promise for resolvida Convertendo o body para json 
        .then((jsonBody) => jsonBody.results) //transforma json em uma lista
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))//transformando a lista pokemon e uma lista de promisse da nova requisição do url
        .then((detailRequests) => Promise.all(detailRequests))// pegando e esperando que todas informaçoes do pokemons termine
        .then((pokemonsDetails) => pokemonsDetails) // devolvendo uma lista de detalhes de pokemon
}

