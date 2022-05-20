import { createSlice } from "@reduxjs/toolkit"
import { PETS } from "../../data/data"

export const flastatSlice = createSlice({
    name: "Flastat",
    initialState: PETS.Flastat,
    reducers: {}
});

export const selectFlastat = (state) => state.flastat;
export const filterPets = (query, pets) => Object.values(pets).filter(pet => pet.name.toLowerCase().includes(query.toLowerCase()));

export default flastatSlice.reducer;