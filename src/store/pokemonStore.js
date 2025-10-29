import { defineStore } from "pinia";

export const usePokemonStore = defineStore("pokemon", {
  state: () => ({
    pokemons: [],
    selectedPokemon: null,
    favorites: JSON.parse(localStorage.getItem("favorites") || "[]"),
    loading: false,
    error: null,
  }),

  actions: {
   // En src/stores/pokemonStore.js
async fetchPokemons(limit = 150, offset = 0) {
  this.loading = true;
  this.error = null;
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
    const data = await res.json();

    // 🧠 mapear para incluir id e imagen
    this.pokemons = data.results.map((p) => {
      const id = p.url.split("/").filter(Boolean).pop();
      return {
        name: p.name,
        id,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
        url: p.url,
      };
    });
  } catch (err) {
    this.error = "Error al obtener los Pokémon 😢";
    console.error(err);
  } finally {
    this.loading = false;
  }
    },

toggleFavorite(pokemon) {
  const index = this.favorites.findIndex((p) => p.name === pokemon.name);
  if (index === -1) {
    // ✅ Asegurar que el Pokémon tenga todos los datos necesarios
    const id = pokemon.id || pokemon.url?.split("/").filter(Boolean).pop();
    const image =
      pokemon.image ||
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

    this.favorites.push({
      name: pokemon.name,
      id,
      image,
      url: pokemon.url || `https://pokeapi.co/api/v2/pokemon/${id}/`,
    });
  } else {
    this.favorites.splice(index, 1);
  }

  localStorage.setItem("favorites", JSON.stringify(this.favorites));
},

    isFavorite(name) {
      return this.favorites.some((p) => p.name === name);
    },
  },
});
