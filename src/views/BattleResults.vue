<template>
  <section class="section">
    <div class="container">
      <h1 class="title">Resultados de Peleas</h1>
      <p v-if="!battles.length">No se han registrado peleas aún.</p>

<button v-if="battles.length" class="button is-danger mb-4" @click="battleStore.clearBattles()">
  Borrar historial
</button>


      <table class="table is-fullwidth is-striped" v-if="battles.length">
        <thead>
          <tr>
            <th>#</th>
            <th>Pokémon</th>
            <th>Oponente</th>
            <th>Ganador</th>
            <th>Fecha/Hora</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(b, index) in battles" :key="index">
            <td>{{ index + 1 }}</td>
            <td class="has-text-centered">
              <figure class="image is-64x64 is-inline-block mr-2">
                <img :src="b.pokemonImage" :alt="b.pokemon"/>
              </figure>
              {{ b.pokemon }}
            </td>
            <td class="has-text-centered">
              <figure class="image is-64x64 is-inline-block mr-2">
                <img :src="b.opponentImage" :alt="b.opponent"/>
              </figure>
              {{ b.opponent }}
            </td>
            <td>{{ b.winner }}</td>
            <td>{{ b.date }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script setup>
import { battleStore } from "../store/battleStore.js";
import "../assets/css/BattleResults.css";
const battles = battleStore.battles;
</script>


