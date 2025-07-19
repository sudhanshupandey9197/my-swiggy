import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRestData = createAsyncThunk(
    "restaurant/fetch",
    async (args, thunkAPI) => {
        try {
            const corsProxy = "https://cors-anywhere-upqq.onrender.com/";
            const swiggyURL = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
            const response = await fetch(corsProxy+swiggyURL,{
                headers: {
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/137.0.0.0 Safari/537.36",
                    "sec-ch-ua-platform": "\"Windows\"",
                    "sec-ch-ua-mobile": "?0",
                    // ...other desktop headers if needed
                }
            });
            const data = await response.json();
            return data;
        }
        catch(error) {
            return rejectWithValue(error.message);
        }
    }
);

const restaurantSlice = createSlice({
    name: "slice1",
    initialState: {restData : [], loading: false, error: null},
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchRestData.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchRestData.fulfilled, (state, action) => {
            state.restData = action.payload;
            state.loading = false; 
        })
        .addCase(fetchRestData.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
        })
    }
})

const slice1Reducer = restaurantSlice.reducer;

export default slice1Reducer;