import { Grid } from "@mui/material";
import { PokeImg } from "../components/PokeImg";
import { PokeDetails } from "../components/PokeDetails";

export const PokemonDetails = () => {


  return (
    <div>
      <div className="root">
        <Grid container spacing={2} >
          <PokeImg/>
          <PokeDetails/>
        </Grid>
      </div>
    </div>
  );
};
