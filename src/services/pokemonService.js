import axios from 'axios';

const API_URL = 'https://pokeapi.co/api/v2';

export const getPokemons = async () => {
  try {
    const response = await axios.get(`${API_URL}/pokemon`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching Pokémon:', error);
    return [];
  }
};

export const getPokemonDetail = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching Pokémon detail:', error);
    return null;
  }
};
