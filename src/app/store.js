import { configureStore } from "@reduxjs/toolkit";
import flastatReducer from "../features/Flastat/flastatSlice";
import fleblocReducer from "../features/Flebloc/fleblocSlice";
import floddicReducer from "../features/Floddic/floddicSlice";

export const store = configureStore({
    reducer:{
        flastat: flastatReducer,
        flebloc: fleblocReducer,
        floddic: floddicReducer
    }
});