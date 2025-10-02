import { reactive, watch } from "vue";

// Cargar resultados de localStorage
const savedBattles = JSON.parse(localStorage.getItem("battles") || "[]");

export const battleStore = reactive({
  battles: savedBattles,

  addBattle(pokemonName, opponentName, winner, pokemonImage, opponentImage) {
    const newBattle = {
      pokemon: pokemonName,
      opponent: opponentName,
      winner,
      pokemonImage,
      opponentImage,
      date: new Date().toLocaleString(),
    };
    this.battles.push(newBattle);
  },

clearBattles() {
  // Vaciar el array de manera reactiva
  this.battles.splice(0, this.battles.length);
  // Limpiar localStorage
  localStorage.removeItem("battles");
}

});

watch(
  () => battleStore.battles,
  (newBattles) => {
    localStorage.setItem("battles", JSON.stringify(newBattles));
  },
  { deep: true }
);
