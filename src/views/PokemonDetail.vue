<template>
  <section class="section" v-if="pokemon">
    <div class="container">
      <!-- Fila superior: Imagen, Datos y Estadísticas -->
      <div class="columns">
        <div class="column is-4 has-text-centered">
          <PokemonImage :image="pokemon.image" :name="pokemon.name" />
        </div>
        <div class="column is-4">
          <h1 class="title is-2">{{ pokemon.name }} (#{{ pokemon.id }})</h1>
          <PokemonInfo :height="pokemon.height" :weight="pokemon.weight" :types="pokemon.types" />
        </div>
        <div class="column is-4">
          <PokemonStats :stats="pokemon.stats" />
        </div>
      </div>

      <!-- Fila inferior: Botones -->
      <div class="columns is-centered mt-4">
        <div class="column is-narrow has-text-centered">
          <button class="button is-danger mb-2" @click="openFightModal" :disabled="isFighting">🥊 Pelear</button>
          <br />
          <router-link to="/pokedex" class="button is-link mt-2">⬅ Volver</router-link>
        </div>
      </div>
    </div>

    <!-- Modal de pelea -->
    <FightModal :active="fightModalActive" @close="closeFightModal">
      <div v-if="opponent">
        <div class="columns is-vcentered">
          <!-- Pokémon principal -->
          <div class="column has-text-centered">
            <p><strong>{{ pokemon.name }}</strong></p>
            <img :src="pokemon.image" :alt="pokemon.name"
                 :class="{ shake: pokemonShake, redEye: pokemonRedEye, circle: true }"/>
            <!-- HP bar -->
            <div class="hp-bar">
              <div class="hp-fill" :style="{ width: pokemonHP + '%', backgroundColor: pokemonHPColor }"></div>
            </div>
          </div>

          <!-- Pokémon rival -->
          <div class="column has-text-centered">
            <p><strong>{{ opponent.name }}</strong></p>
            <img :src="opponent.image" :alt="opponent.name"
                 :class="{ shake: opponentShake, redEye: opponentRedEye, circle: true }"/>
            <!-- HP bar -->
            <div class="hp-bar">
              <div class="hp-fill" :style="{ width: opponentHP + '%', backgroundColor: opponentHPColor }"></div>
            </div>
          </div>
        </div>

        <p class="mt-2">{{ fightMessage }}</p>
        <p v-if="winner" class="title is-4 mt-2">{{ winner }} gana la pelea! 🏆</p>
      </div>

      <!-- Footer con botones -->
      <template #footer>
        <button class="button is-warning mr-2" @click="startFight" :disabled="isFighting">Pelear otra vez</button>
        <router-link v-if="winner" to="/battle-results" class="button is-link" @click="closeFightModal">
          Ver resultados anteriores
        </router-link>
      </template>
    </FightModal>
  </section>

  <!-- Cargando Pokémon -->
  <section v-else class="section has-text-centered">
    <div class="pokeball"></div>
    <p class="mt-4">Cargando Pokémon...</p>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { battleStore } from "../store/battleStore.js";

import PokemonImage from "../components/PokemonImage.vue";
import PokemonInfo from "../components/PokemonInfo.vue";
import PokemonStats from "../components/PokemonStats.vue";
import FightModal from "../components/FightModal.vue";
import "../assets/css/PokemonDetail.css";
import { usePokemonDetail } from "../composables/usePokemonDetail.js";

const {
  pokemon,
  opponent,
  isFighting,
  fightMessage,
  winner,
  pokemonHP,
  opponentHP,
  pokemonShake,
  opponentShake,
  pokemonRedEye,
  opponentRedEye,
  fightModalActive,
  pokemonHPColor,
  opponentHPColor,
  openFightModal,
  closeFightModal,
  startFight,
} = usePokemonDetail();

</script>
