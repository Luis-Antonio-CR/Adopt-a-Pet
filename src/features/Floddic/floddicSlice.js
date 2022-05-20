import { createSlice } from "@reduxjs/toolkit";
import { PETS } from "../../data/data";

export const floddicSlice = createSlice({
    name: "Floddic",
    initialState: PETS.Floddic,
    reducers: {}
})

export const selectFLoddic = (state) => state.floddic;

export default floddicSlice.reducer