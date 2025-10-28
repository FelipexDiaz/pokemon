<script setup>
import { usePokemonStore } from "../store/pokemonStore";
import { onMounted } from "vue";
import PokemonCard from "../components/PokemonCard.vue";

const pokemonStore = usePokemonStore();

onMounted(() => {
  pokemonStore.fetchPokemons();
});
</script>

<template>
  <section class="section">
    <div class="container">
      <h1 class="title">Pokédex</h1>

      <div v-if="pokemonStore.loading" class="has-text-centered">Cargando...</div>
      <div v-else-if="pokemonStore.error" class="notification is-danger">
        {{ pokemonStore.error }}
      </div>

      <div v-else class="columns is-multiline">
        <div
          v-for="p in pokemonStore.pokemons"
          :key="p.name"
          class="column is-one-quarter"
        >
          <PokemonCard :pokemon="p" />
        </div>
      </div>
    </div>
  </section>
</template>
