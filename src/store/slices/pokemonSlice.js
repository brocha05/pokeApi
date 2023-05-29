import { createSlice } from '@reduxjs/toolkit'

const initialState = {pokemons: null, detailsPokemons: null, imgPokemon: '', page: 1}

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload;
      if(action.payload.next.includes('offset=160')){
        action.payload.results = action.payload.results.slice(0, 11);
        state.pokemons = action.payload;
      }
    },
    setDetailsPokemons: (state, action) => {
      state.detailsPokemons = action.payload;
    },
    setImgPokemon: (state, action) => {
      state.imgPokemon = action.payload;
    }
  },
})

export const { setPokemons, setDetailsPokemons, setImgPokemon } = pokemonSlice.actions
