import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { battleStore } from "../store/battleStore.js";

export function usePokemonDetail() {
  const route = useRoute();
  const pokemon = ref(null);
  const opponent = ref(null);
  const isFighting = ref(false);
  const fightMessage = ref("");
  const winner = ref("");

  const pokemonHP = ref(100);
  const opponentHP = ref(100);
  const pokemonShake = ref(false);
  const opponentShake = ref(false);
  const pokemonRedEye = ref(false);
  const opponentRedEye = ref(false);
  const fightModalActive = ref(false);

  const pokemonHPColor = computed(() => pokemonHP.value > 50 ? "#48c774" : (pokemonHP.value > 20 ? "#ffdd57" : "#ff3860"));
  const opponentHPColor = computed(() => opponentHP.value > 50 ? "#48c774" : (opponentHP.value > 20 ? "#ffdd57" : "#ff3860"));

  const fetchPokemon = async () => {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${route.params.id}`);
      const d = await res.json();
      pokemon.value = {
        id: d.id,
        name: d.name,
        image: d.sprites.other["official-artwork"].front_default,
        height: d.height,
        weight: d.weight,
        types: d.types.map(t => t.type.name),
        stats: d.stats,
      };
    } catch (err) {
      console.error("Error cargando Pokémon:", err);
    }
  };

  const openFightModal = () => {
    fightModalActive.value = true;
    startFight();
  };

  const closeFightModal = () => {
    fightModalActive.value = false;
    winner.value = "";
    fightMessage.value = "";
    opponent.value = null;
    pokemonHP.value = 100;
    opponentHP.value = 100;
  };

  const startFight = async () => {
    if (!pokemon.value) return;
    isFighting.value = true;
    winner.value = "";
    fightMessage.value = "";

    // Pokémon rival random
    const randomId = Math.floor(Math.random() * 151) + 1;
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
      const d = await res.json();
      opponent.value = {
        id: d.id,
        name: d.name,
        image: d.sprites.other["official-artwork"].front_default,
        stats: d.stats,
      };
    } catch (err) {
      console.error("Error cargando rival:", err);
      isFighting.value = false;
      return;
    }

    const pokemonMaxHP = pokemon.value.stats.find(s => s.stat.name === "hp")?.base_stat || 50;
    const opponentMaxHP = opponent.value.stats.find(s => s.stat.name === "hp")?.base_stat || 50;

    pokemonHP.value = 100;
    opponentHP.value = 100;

    let currentPokemonHP = pokemonMaxHP;
    let currentOpponentHP = opponentMaxHP;
    let turn = 0;

    const interval = setInterval(() => {
      const attackPower = Math.floor(Math.random() * 15) + 5;

      if (turn === 0) {
        currentOpponentHP -= attackPower;
        if (currentOpponentHP < 0) currentOpponentHP = 0;
        opponentHP.value = (currentOpponentHP / opponentMaxHP) * 100;
        fightMessage.value = `${pokemon.value.name} ataca a ${opponent.value.name} por ${attackPower} de daño!`;
        opponentShake.value = true;
        opponentRedEye.value = true;
        setTimeout(() => { opponentShake.value = false; opponentRedEye.value = false; }, 300);
      } else {
        currentPokemonHP -= attackPower;
        if (currentPokemonHP < 0) currentPokemonHP = 0;
        pokemonHP.value = (currentPokemonHP / pokemonMaxHP) * 100;
        fightMessage.value = `${opponent.value.name} ataca a ${pokemon.value.name} por ${attackPower} de daño!`;
        pokemonShake.value = true;
        pokemonRedEye.value = true;
        setTimeout(() => { pokemonShake.value = false; pokemonRedEye.value = false; }, 300);
      }

      turn = 1 - turn;

      if (currentPokemonHP <= 0 || currentOpponentHP <= 0) {
        clearInterval(interval);
        if (currentPokemonHP <= 0 && currentOpponentHP <= 0) winner.value = "¡Empate!";
        else if (currentPokemonHP <= 0) winner.value = opponent.value.name;
        else winner.value = pokemon.value.name;

        battleStore.addBattle(
          pokemon.value.name,
          opponent.value.name,
          winner.value,
          pokemon.value.image,
          opponent.value.image
        );

        isFighting.value = false;
      }
    }, 800);
  };

  onMounted(fetchPokemon);

  return {
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
  };
}
