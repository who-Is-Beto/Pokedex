async function serch(id) {
  const URL = 'https://pokeapi.co/api/v2/pokemon/'
  const response = await fetch(`${URL}${id}`)
  const pokemon = await response.json()
  return pokemon
}

async function inicio() {
  const primerPokemon = await serch(25)
  actualizarPokemon(primerPokemon)
}
inicio()

function actualizarPokemon(pokemon) {
  window.pokeImage.setAttribute('src', pokemon.sprites.front_default)
  window.pokename.textContent = pokemon.name
}

window.pokeInput.addEventListener('change', async () => {
  const pokemon = await serch(window.pokeInput.value)
  actualizarPokemon(pokemon)
})