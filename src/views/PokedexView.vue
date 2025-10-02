<template>
  <section class="section has-background-link-light min-vh-100">
    <div class="container has-text-centered">
      <h1 class="title is-2">Pokédex</h1>

      <!-- Barra de búsqueda -->
      <SearchBar :search="search" @update="search = $event" @onSearch="handleSearch" />

      <!-- Loader con placeholders -->
      <div v-if="loading" class="columns is-multiline mt-5">
        <div v-for="n in 8" :key="n" class="column is-one-quarter">
          <div class="card placeholder-card">
            <div class="card-content has-text-centered">
              <div class="pokeball"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Resultados -->
      <transition-group name="fade" tag="div" class="columns is-multiline mt-5" v-else>
        <div v-for="p in results" :key="p.id" class="column is-one-quarter">
          <PokemonCard :pokemon="p" />
        </div>
      </transition-group>

      <p v-if="!loading && !results.length && search">No se encontró Pokémon</p>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import SearchBar from "../components/SearchBar.vue";
import PokemonCard from "../components/PokemonCard.vue";
import "../assets/css/PokedexView.css";
import { usePokedex } from "../composables/usePokedex.js";

const { search, results, loading, handleSearch } = usePokedex();
</script>
