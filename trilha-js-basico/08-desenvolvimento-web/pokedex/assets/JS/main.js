const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

const maxRecords = 15
const limit = 10
let offset = 0;

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => `
            <li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        <span class="Tipo" style="color:white;">${pokemon.tipo}</span>
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                        <span class="Habil" style="color:white;">${pokemon.habilidades}</span>
                        ${pokemon.abilities.map((ability) => `<li class="ability ${ability}">${ability}</li>`).join('')}
                        <span class="Altura" style="color:white;">${pokemon.altura}</span> <p style="margin:0;"></p>
                        <span class="height">${pokemon.height}</span> <p style="margin:0;padding:2px;"></p>
                        <span class="Peso" style="color:white;">${pokemon.peso}</span> <p style="margin:0;"></p>
                        <span class="weight">${pokemon.weight}</span>

                    </ol >

                    <img src="${pokemon.photo}"
                        alt="${pokemon.name}">
                </div>
            </li >
    `).join('')

        pokemonList.innerHTML += newHtml
    })
}
/* Da linha 19 à x foi eu quem adicionei além do que foi passado em aula */

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordWithNextPage = offset + limit

    if (qtdRecordWithNextPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
})