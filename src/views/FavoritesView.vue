<template>
  <section class="section">
    <div class="container">
      <h1 class="title has-text-centered">❤️ Tus Pokémon Favoritos</h1>

      <div v-if="!favorites.length" class="has-text-centered mt-6">
        <p>No tienes Pokémon favoritos aún 😢</p>
        <router-link to="/" class="button is-link mt-3">
          Volver a la Pokédex
        </router-link>
      </div>

      <div v-else class="columns is-multiline mt-5">
        <div
          v-for="p in favorites"
          :key="p.name"
          class="column is-one-quarter"
        >
          <PokemonCard :pokemon="p" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { usePokemonStore } from "../store/pokemonStore";
import PokemonCard from "../components/PokemonCard.vue";

const pokemonStore = usePokemonStore();

// Obtenemos la lista reactiva directamente desde el store
const favorites = pokemonStore.favorites;
</script>
