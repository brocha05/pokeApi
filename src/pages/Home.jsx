import { useEffect } from "react";
import { Grid } from "@mui/material";
import { fetchPokemons } from "../store/slices/pokemonThunk";
import { useDispatch } from "react-redux";
import { PokeImg } from "../components/PokeImg";
import { PokeBtn } from "../components/PokeBtn";

export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemons());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="root">
      <Grid container spacing={2}>
        <PokeImg/>
        <PokeBtn/>
      </Grid>
    </div>
  );
};
