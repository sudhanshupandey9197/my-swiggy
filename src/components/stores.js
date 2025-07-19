import {configureStore} from "@reduxjs/toolkit"
import slice1Reducer from "./slice1"
import restReducer from "./restSlice";
import filterSliceReducer from "./filterSlice";

const store = configureStore({
    reducer : {
        slice1 : slice1Reducer,
        restSlice: restReducer,
        filterSlice: filterSliceReducer
    }
});

export default store;