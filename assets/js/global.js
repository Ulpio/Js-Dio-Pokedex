const PokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const loadGen1 = document.getElementById('loadGen1')
const loadGen2 = document.getElementById('loadGen2')
const loadGen3 = document.getElementById('loadGen3')
const loadGen4 = document.getElementById('loadGen4')
const loadGen5 = document.getElementById('loadGen5')
const loadGen6 = document.getElementById('loadGen6')
const loadGen7 = document.getElementById('loadGen7')
const loadGen8 = document.getElementById('loadGen8')
const loadGen9 = document.getElementById('loadGen9')
const loadAll = document.getElementById('loadAll')
const limit = 20
let offset = 0
function loadPokemonItens(offset,limit){
    pokeApi.getPokemons(offset,limit).then((pokemons) => {
        const newHtml = pokemons.map((pokemon) =>`
            <li class="pokemon ${pokemon.type}">
                        <span class="number">#${pokemon.number}</span>
                        <span class="name">${(pokemon.name)}</span>
                        <div class="detail">
                            <ol class="types">
                                ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                            </ol>
                            <img src="${pokemon.photo}"
                                alt=${pokemon.name}>
                        </div>
                    </li>`
            ).join('')

        PokemonList.innerHTML += newHtml

    })

}

loadPokemonItens(offset,limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    loadPokemonItens(offset,limit)
})

loadGen1.addEventListener('click', () => {
    offset = 0
    PokemonList.innerHTML = ''
    loadPokemonItens(offset,151)
})
loadGen2.addEventListener('click', () => {
    offset = 151
    PokemonList.innerHTML = ''
    loadPokemonItens(offset,100)
})
loadGen3.addEventListener('click', () => {
    offset = 251
    PokemonList.innerHTML = ''
    loadPokemonItens(offset,135)
})
loadGen4.addEventListener('click', () => {
    offset = 386
    PokemonList.innerHTML = ''
    loadPokemonItens(offset,107)
})
loadGen5.addEventListener('click', () => {
    offset = 493
    PokemonList.innerHTML = ''
    loadPokemonItens(offset,156)
})
loadGen6.addEventListener('click', () => {
    offset = 649
    PokemonList.innerHTML = ''
    loadPokemonItens(offset,72)
})
loadGen7.addEventListener('click', () => {
    offset = 721
    PokemonList.innerHTML = ''
    loadPokemonItens(offset,88)
})
loadGen8.addEventListener('click', () => {
    offset = 809
    PokemonList.innerHTML = ''
    loadPokemonItens(offset,89)
})
loadGen9.addEventListener('click', () => {
    offset = 905
    PokemonList.innerHTML = ''
    loadPokemonItens(offset,105)
})
loadAll.addEventListener('click', () => {
    offset = 0
    PokemonList.innerHTML = ''
    loadPokemonItens(offset,898)
})