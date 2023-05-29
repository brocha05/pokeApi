import { Grid, Button, Typography, Box } from "@mui/material";
import { useSelector } from "react-redux";
import { usePokemons } from "../hooks/usePokemons";
import LinearProgress from "@mui/material/LinearProgress";

export const PokeDetails = () => {
  const { detailsPokemons } = useSelector((state) => state.pokemons);
  const { handleHome } = usePokemons();

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
      <Button onClick={handleHome} variant="contained" sx={{ mb: 2 }}>
        Regresar
      </Button>
      <Typography variant="h4">{detailsPokemons?.name}</Typography>
      {detailsPokemons?.stats.map((stat) => (
        <Box sx={{ width: "80%", mb: '10px' }} key={stat.base_stat}>
          <Typography>{`${stat.stat.name} ${stat.base_stat}`}</Typography>
          <LinearProgress variant="determinate" value={stat.base_stat}/>
        </Box>
      ))}
      <Typography>{`Número: ${detailsPokemons?.order}`}</Typography>
      <Typography>{`Altura: ${detailsPokemons?.height}`}</Typography>
      <Typography>{`Peso: ${detailsPokemons?.weight}Kgs`}</Typography>
    </Grid>
  );
};
