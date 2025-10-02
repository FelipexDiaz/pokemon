<template>
  <ul class="list-group">
    <li 
      v-for="pokemon in pokemones" 
      :key="pokemon.id" 
      class="list-group-item"
    >
      {{ pokemon.nombre }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "PokemonList",
  props: {
    pokemones: {
      type: Array,
      required: true
    }
  }
}
</script>
