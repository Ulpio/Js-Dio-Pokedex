
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

function convertPokemonTypeToLi(pokemonTypes){
    return pokemonTypes.map((TypeSlot) => `<li class="type">${TypeSlot.type.name}</li>`)
}
function convertToList(pokemon) {
    return `
    <li class="pokemon">
                <span class="number">#${pokemon.order}</span>
                <span class="name">${(pokemon.name).toUpperCase()}</span>
                <div class="detail">
                    <ol class="types">
                        ${convertPokemonTypeToLi(pokemon.types).join('')}
                    </ol>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.order}.png" alt=${pokemon.name}>
                </div>
            </li>`
}

const PokemonList = document.getElementById('pokemonList')

pokeApi.getPokemons().then((pokemons) => {
    PokemonList.innerHTML += pokemons.map(convertToList).join('')
})
