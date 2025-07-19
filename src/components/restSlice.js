import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRest = createAsyncThunk(
    "rest/fetch",
    async (args, thunkAPI) => {
        try {
            const corsProxy = "https://cors-anywhere-upqq.onrender.com/";
            const swiggyURL = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${args}&catalog_qa=undefined&submitAction=ENTER`;
            const response = await fetch(corsProxy+swiggyURL,{
                headers: {
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/137.0.0.0 Safari/537.36",
                    "sec-ch-ua-platform": "\"Windows\"",
                    "sec-ch-ua-mobile": "?0",
                    // ...other desktop headers if needed
                }
            });
            const data = await response.json();
            return data.data;
        }
        catch(error) {
            return rejectWithValue(error.message);
        }
    }
);

const restSlice = createSlice({
    name: "restSlice",
    initialState: {restData : [], loading: false, error: null},
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchRest.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchRest.fulfilled, (state, action) => {
            state.restData = action.payload;
            state.loading = false; 
        })
        .addCase(fetchRest.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
        })
    }
});


const restReducer = restSlice.reducer;
export default restReducer;