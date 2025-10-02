import { ref, onMounted } from "vue";

export function usePokedex() {
  const search = ref("");
  const results = ref([]);
  const allPokemons = ref([]);
  const loading = ref(true);

  const fetchAllPokemons = async () => {
    try {
      loading.value = true;
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
      const data = await res.json();

      const details = await Promise.all(
        data.results.map(async (p) => {
          try {
            const r = await fetch(p.url);
            const d = await r.json();
            return {
              id: d.id,
              name: d.name,
              image: d.sprites.other["official-artwork"].front_default,
              base_experience: d.base_experience,
              height: d.height,
              weight: d.weight,
              types: d.types.map((t) => t.type.name),
              stats: d.stats,
            };
          } catch (err) {
            console.error("Error cargando detalle de Pokémon:", err);
            return null;
          }
        })
      );

      allPokemons.value = details.filter(Boolean);
      results.value = allPokemons.value;
    } catch (error) {
      console.error("Error cargando pokémon:", error);
    } finally {
      loading.value = false;
    }
  };

  const handleSearch = () => {
    try {
      loading.value = true;
      setTimeout(() => {
        if (!search.value) {
          results.value = allPokemons.value;
        } else {
          const term = search.value.toLowerCase();
          results.value = allPokemons.value.filter(
            (p) =>
              p.name.toLowerCase().includes(term) ||
              p.id.toString().includes(term)
          );
        }
        loading.value = false;
      }, 600);
    } catch (err) {
      console.error("Error al buscar Pokémon:", err);
      loading.value = false;
    }
  };

  onMounted(fetchAllPokemons);

  return {
    search,
    results,
    allPokemons,
    loading,
    handleSearch,
  };
}
