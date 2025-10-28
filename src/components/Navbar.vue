<template>
  <nav class="navbar is-link" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item has-text-weight-bold">
        Pokédex
      </router-link>
    </div>

    <div class="navbar-menu">
      <div class="navbar-start">
        <router-link to="/" class="navbar-item" active-class="is-active" exact>
          Inicio
        </router-link>
        <router-link to="/pokedex" class="navbar-item" active-class="is-active">
          Pokédex
        </router-link>

        <router-link to="/favorites" class="navbar-item">Favoritos ❤️</router-link>

        <router-link
          to="/battle-results"
          class="navbar-item"
          active-class="is-active"
        >
          Resultados de Peleas
        </router-link>

        <router-link to="/about" class="navbar-item" active-class="is-active">
          Acerca de
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
/* No necesita lógica por ahora */
</script>
