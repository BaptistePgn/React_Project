const { createSlice, configureStore } = require("@reduxjs/toolkit");


const PokeRequete = createSlice({
    name: "favori",
    initialState: [],
    reducers: {
        addFavori: (state,pokemon) =>{
            state.push(pokemon)
        },
        deleteFavori:(state,pokemon) =>{
            state = state.filter((t)=> t.payload.name !== pokemon.payload.name)
            return state
        }
    }
})
export const{addFavori, deleteFavori}= PokeRequete.actions

export const Store = configureStore({
    reducer: { 
        favori : PokeRequete.reducer,
    }
})
