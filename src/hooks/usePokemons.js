import { useRef } from "react";
import { useDispatch } from "react-redux";
import { setPokemons, setDetailsPokemons, setImgPokemon } from "../store/slices/pokemonSlice";
import { useNavigate } from "react-router-dom";

export const usePokemons = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const clickTimeout = useRef(null);

  const handleClick = (url) => {
    if (clickTimeout.current) {
      clearTimeout(clickTimeout.current);
      clickTimeout.current = null;
      getPokemonDetails(url);
      getPokemonImage(url);
      navigate("/pokemonDetails");
    } else {
      clickTimeout.current = setTimeout(() => {
        clickTimeout.current = null;
        getPokemonImage(url);
      }, 200);
    }
  };

  const getPokemonDetails = async (url) => {
    const result = await fetch(url);
    const data = await result.json();
    dispatch(setDetailsPokemons(data));
  };

  const getPokemonImage = async (url) => {
    const result = await fetch(url);
    const data = await result.json();
    dispatch(setImgPokemon(data.sprites.front_default))
  };

  const handleNextPage = async (url) => {
    const result = await fetch(url);
    const data = await result.json();
    dispatch(setPokemons(data));
  };

  const handleBackPage = async (url) => {
    const result = await fetch(url);
    const data = await result.json();
    dispatch(setPokemons(data));
  };

  const handleHome = () => {
    navigate(-1);
  };

  return {
    handleClick,
    handleNextPage,
    handleBackPage,
    handleHome,
  };
};
