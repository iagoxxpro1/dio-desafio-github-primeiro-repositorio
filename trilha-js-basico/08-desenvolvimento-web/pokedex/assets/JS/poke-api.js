
const pokeApi = {}

function converPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name
    pokemon.habilidades = 'Habil.:' /* ADICIONEI */
    pokemon.tipo = 'Tipo:' /* ADICIONEI */
    pokemon.altura='Altura:' /* ADICIONEI */
    pokemon.height = pokeDetail.height /* ADICIONEI */
    pokemon.peso='Peso:' /* ADICIONEI */
    pokemon.weight=pokeDetail.weight /* ADICIONEI */

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types
    pokemon.types = types
    pokemon.type = type

    const abilities = pokeDetail.abilities.map((abilitiesAbility) => abilitiesAbility.ability.name) /* ADICIONEI */
    const [ability] = abilities /* ADICIONEI */
    pokemon.abilities = abilities /* ADICIONEI */
    pokemon.ability = ability /* ADICIONEI */

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    return pokemon
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(converPokeApiDetailToPokemon)
}

pokeApi.getPokemons = (offset = 0, limit = 5) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url) //buscando a nossa lista de pokemons
        .then((response) => response.json()) //conversão do response para json
        .then((jsonBody) => jsonBody.results) //o json vem com muitos detalhes, o .results é o que nos interessa para trazer assim somente a lista de pokemons
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail)) // .map foi para mapear a lista dos pokemons para trazer os detalhes dos pokemons
        .then((detailRequest) => Promise.all(detailRequest)) //o Promise é quando estamos com a lista de requisição já e somente aguardando que todas as requisições terminem
        .then((pokemonsDetails) => pokemonsDetails) //devolução da lista dos pokemons
}
