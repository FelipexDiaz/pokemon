<template>
  <section class="section has-text-centered home-festive">
    <div class="container">
      <h1 class="title is-1 animate-title">¡Bienvenido a la Pokedex!</h1>
      <p class="subtitle animate-subtitle">Prepárate para capturar y pelear con tus Pokémon favoritos</p>
      <router-link to="/pokedex" class="button is-primary mt-4 animate-button">Ir a la Pokedex</router-link>

      <!-- Animación de banderas chilenas -->
      <div class="flags-container">
        <span v-for="n in 30" :key="n" class="flag" :style="flagStyle(n)"></span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from "vue";
import "../assets/css/Home.css";

const flagStyle = (n) => {
  const size = Math.random() * 25 + 15; // 15px a 40px
  const left = Math.random() * 100; // posición horizontal %
  const duration = Math.random() * 3 + 3; // 3s a 6s
  const delay = Math.random() * 2; // retraso inicial
  const rotate = Math.random() * 360; // rotación inicial
  return {
    width: `${size}px`,
    height: `${size * 0.66}px`,
    left: `${left}%`,
    animationDuration: `${duration}s`,
    animationDelay: `${delay}s`,
    transform: `rotate(${rotate}deg)`,
  };
};
</script>
