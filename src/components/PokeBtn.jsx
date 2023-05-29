import { useSelector } from "react-redux";
import { Grid, Button } from "@mui/material";
import { usePokemons } from "../hooks/usePokemons";

export const PokeBtn = () => {
  const { pokemons } = useSelector((state) => state.pokemons);
  const { handleClick, handleNextPage, handleBackPage } = usePokemons();

  return (
    <Grid
      item
      xs={6}
      className="rightBlock"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderTopRightRadius: "20px",
        borderBottomRightRadius: "20px",
      }}
    >
      {pokemons
        ? pokemons?.results.map((pokemon) => (
            <Button
              key={pokemon.url}
              onClick={() => handleClick(pokemon.url)}
              variant="contained"
              sx={{ width: "80%", mb: 1 }}
            >
              {pokemon.name}
            </Button>
          ))
        : null}
      <Grid sx={{ display: "flex" }}>
        <Button
          disabled={pokemons?.previous === null}
          onClick={() => handleBackPage(pokemons?.previous)}
        >
          Atras
        </Button>
        <Button
          onClick={() => handleNextPage(pokemons?.next)}
          disabled={pokemons?.results.length < 20}
        >
          Adelante
        </Button>
      </Grid>
    </Grid>
  );
};
