import { Grid, Typography } from "@mui/material";
import pokeApi from "../assets/images/poke.png";
import { useSelector } from "react-redux";

export const PokeImg = () => {
  const { imgPokemon } = useSelector((state) => state.pokemons);

  return (
    <Grid
      item
      xs={6}
      className="leftBlock"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderTopLeftRadius: "20px",
        borderBottomLeftRadius: "20px",
      }}
    >
      <img src={pokeApi} width={"300px"} />
      {imgPokemon !== "" ? (
        <img src={imgPokemon} width={"300px"} />
      ) : (
        <Typography variant="h3" textAlign={"center"} color={"white"}>
          Da un clic en el nombre de un Pokemon para ver su foto, da doble clic
          para ver los detalles de ese Pokemon
        </Typography>
      )}
    </Grid>
  );
};
