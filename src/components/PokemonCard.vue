<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-128x128 mx-auto">
        <img :src="pokemon.image" :alt="pokemon.name" />
      </figure>
    </div>

    <div class="card-content has-text-centered">
      <p class="title is-5">{{ pokemon.name }}</p>

      <div class="buttons is-centered mt-2">
        <!-- 🔗 Link al detalle -->
        <router-link
          :to="`/pokemon/${pokemon.id}`"
          class="button is-small is-link"
        >
          Seleccionar
        </router-link>

        <!-- ❤️ Botón de favoritos -->
        <button
          class="button is-small"
          :class="isFav ? 'is-danger' : 'is-light'"
          @click="toggleFavorite"
        >
          <span v-if="isFav">❤️</span>
          <span v-else>🤍</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { usePokemonStore } from "../store/pokemonStore";

const props = defineProps({
  pokemon: {
    type: Object,
    required: true,
  },
});

const pokemonStore = usePokemonStore();

// 🔄 Computed para verificar si el Pokémon es favorito
const isFav = computed(() => pokemonStore.isFavorite(props.pokemon.name));

const toggleFavorite = () => {
  pokemonStore.toggleFavorite(props.pokemon);
};
</script>
