//função para converter javascript em HTML pego do  index
function convertPokemonToLi (pokemon) {
    return `
    <li class="pokemon">
                <span class="number">#001</span>
                <span class="name">${pokemon.name}</span>
                <div class="detail">
                    <ol class="types">
                        <li class="type">grass</li>
                        <li class="type">poison</li>
                    </ol>
                    
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}">

                </div>
                
            </li>
    `
}

const pokemonList = document.getElementById('pokemonList') // pegando o id pokemonList do html e tranformando eum uma const

pokeApi.getPokemons().then((pokemons = []) => { //trasnformando uma lista de pokemon em uma lista html
    pokemonList.innerHTML +=  pokemons.map(convertPokemonToLi).join('') // pegando a lista de pokemons mapeando os pokemons ou seja converter converta para uma lista de Li - join('') junta todas a lista de Li sem carateres para separar
})
    