import { createSlice } from "@reduxjs/toolkit";
import { PETS } from "../../data/data";

export const fleblocSlice = createSlice({
    name: "Flebloc",
    initialState: PETS.Flebloc,
    reducers: {}
})

export const selectFlebloc = (state) => state.flebloc;

export default fleblocSlice.reducer;