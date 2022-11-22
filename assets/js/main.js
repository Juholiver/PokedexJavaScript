//função para mudar o type do pokemon no html
function convertPokemonTypesToLi(pokemonTypes) {
    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
}

//função para converter javascript em HTML pego do  index
function convertPokemonToLi (pokemon) {
    return `
    <li class="pokemon">
                <span class="number">#${pokemon.order}</span>
                <span class="name">${pokemon.name}</span>
                <div class="detail">
                    <ol class="types">
                        ${convertPokemonTypesToLi(pokemon.types).join('')}
                    </ol>
                    
                    <img src="${pokemon.sprites.other.dream_world.front_default}" 
                    alt="${pokemon.name}">

                </div>
                
            </li>
    `
}

const pokemonList = document.getElementById('pokemonList') // pegando o id pokemonList do html e tranformando eum uma const

pokeApi.getPokemons().then((pokemons = []) => { //trasnformando uma lista de pokemon em uma lista html
    pokemonList.innerHTML +=  pokemons.map(convertPokemonToLi).join('') // pegando a lista de pokemons mapeando os pokemons ou seja converter converta para uma lista de Li - join('') junta todas a lista de Li sem carateres para separar
})
    