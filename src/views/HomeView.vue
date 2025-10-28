<template>
  <section class="section has-text-centered home-festive">
    <div class="container">
      <h1 class="title is-1 animate-title">¡Bienvenido a la Pokedex!</h1>
      <p class="subtitle animate-subtitle">Prepárate para capturar y pelear con tus Pokémon favoritos</p>
      <router-link to="/pokedex" class="button is-primary mt-4 animate-button">Ir a la Pokedex</router-link>
    </div>
  </section>
</template>

<script setup>
import { reactive } from "vue";
import "../assets/css/Home.css";
</script>
