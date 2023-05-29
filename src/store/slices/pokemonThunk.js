import { setPokemons } from "./pokemonSlice";

export const fetchPokemons = () => {
  return async (dispatch) => {
    try {
      const result = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
      );
      const data = await result.json();
      dispatch(setPokemons(data));
    } catch (error) {
        console.log(error)
    }
  };
};
