import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  myPokemon: null
}

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setPokemon: (state, action) => {
      state.myPokemon = action.payload
    },
  },
})

// export our action related to this reducer
export const { setPokemon } = pokemonSlice.actions

// export the reducer
export const pokemonReducer = pokemonSlice.reducer