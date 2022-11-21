const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

//função para converter javascript em HTML
function convertPokemonToHtml (pokemon) {
    return `
    <li class="pokemon">
                <span class="number">#001</span>
                <span class="name">${pokemon.name}</span>
                <div class="detail">
                    <ol class="types">
                        <li class="type">grass</li>
                        <li class="type">poison</li>
                    </ol>
                    
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="<li class="pokemon">
                <span class="number">#001</span>
                <span class="name">Bulbasaur</span>
                <div class="detail">
                    <ol class="types">
                        <li class="type">grass</li>
                        <li class="type">poison</li>
                    </ol>
                    
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="<li class="pokemon">
                <span class="number">#001</span>
                <span class="name">Bulbasaur</span>
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

fetch(url)
    .then((response) => response.json()) //quando a promise for resolvida Convertendo o body para json 
    .then((jsonBody) => jsonBody.results) //quando a promise reponse for convertida e resolvida se transforma jsonBody que com o resultado da json se trangforma em pkemon list
    .then((pokemons) => { //lista de pokemon
        for (let i = 0; i < pokemons.length; i++) { //for loop para percorrer um array
            const pokemon = pokemons[i];
            pokemonList.innerHTML += convertPokemonToHtml(pokemon) //adiconando mais um Linha em pokemon list -- innerHTML le string em html

        }

    })
    .catch((error) => console.error(error))
    .finally(function() {
        console.log('Requisição concluida!!')
    })