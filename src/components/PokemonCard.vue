<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-128x128 mx-auto">
        <img :src="pokemon.image" :alt="pokemon.name" />
      </figure>
    </div>
    <div class="card-content has-text-centered">
      <p class="title is-5">{{ pokemon.name }}</p>
      <!-- 👇 link directo al detalle -->
      <router-link :to="`/pokemon/${pokemon.id}`" class="button is-small is-link mt-2">
        Seleccionar
      </router-link>
    </div>
  </div>
</template>

<script setup>
defineProps({
  pokemon: Object,
});
</script>
