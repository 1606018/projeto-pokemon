

async function buscarPokemonEMostrarNaTela() {
    const idPokemon = pegarValorDigitadoNaTela("#idPokemon")
    const pokemon = await buscarPokemonNaApi(idPokemon)
    montarTela(pokemon)
}

function pegarValorDigitadoNaTela(idDoInput) {
    const elementoInput = document.querySelector(idDoInput)
    return elementoInput.value
}

async function buscarPokemonNaApi(idPokemon) {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + idPokemon)
    const pokemon = await response.json()

    return pokemon
}

function montarTela(pokemon){
    console.log(pokemon)
    document.querySelector("#imagemPokemon").src = pokemon.sprites.front_default
    document.querySelector("#nomePokemon").innerHTML = pokemon.name
}

