const pokemonList = document.getElementById('pokemonList') // pegando o id pokemonList do html e tranformando eum uma const
const loadMoreButton = document.getElementById('loadMoreButton')

const maxRecords = 386
const limit = 10
let offset = 0




function loadPokemonItens(offset, limit) {
    //função para converter javascript em HTML pego do  index
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => { //trasnformando uma lista de pokemon em uma lista html
        const newHtml = pokemons.map((pokemon) => `
            <li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                    
                    <img src="${pokemon.photo}" 
                    alt="${pokemon.name}">

                </div>
                
            </li>
        `).join('') // pegando a lista de pokemons mapeando os pokemons ou seja converter converta para uma lista de Li - join('') junta todas a lista de Li sem carateres para separar
        
        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit

    const qtdRecordsWithNexPage = offset + limit

    if(qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
    
})


