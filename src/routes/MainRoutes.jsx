import { Routes, Route } from "react-router-dom"
import { PokemonDetails } from "../pages/PokemonDetails"
import { Home } from "../pages/Home"

export const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} index/>
        <Route path="/pokemonDetails" element={<PokemonDetails/>}/>
    </Routes>
  )
}
