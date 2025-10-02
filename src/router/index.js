import { createRouter, createWebHistory } from "vue-router";

// Views
import Home from "../views/HomeView.vue";
import PokedexView from "../views/PokedexView.vue";
import PokemonDetail from "../views/PokemonDetail.vue";
import BattleResults from "../views/BattleResults.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  // Página de inicio
  { path: "/", name: "Home", component: Home },

  // Pokedex
  { path: "/pokedex", name: "Pokedex", component: PokedexView },

  // Detalle de Pokémon
  { path: "/pokemon/:id", name: "PokemonDetail", component: PokemonDetail },

  // Resultados de peleas
  { path: "/battle-results", name: "BattleResults", component: BattleResults },

  // Ruta catch-all para páginas no encontradas
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
