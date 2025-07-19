import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filterSlice",
    initialState: {count: 0, items: []},
    reducers: {
        AddItems: (state,action) => {
            state.count++;
            state.items.push({...action.payload,quantity: 1});
        },
        AddNew: (state,action) => {
            state.count = 1;
            state.items = [];
            state.items.push({...action.payload,quantity: 1})
        },
        IncrementItems: (state,action) => {
            if(state.items[0].restId===action.payload.restId) {
                state.count += 1;
                const element = state.items.find(item => item.id===action.payload.id);
                element.quantity += 1;
            }
            
        },
        DecrementItems: (state,action) => {
            state.count -= 1;
            const element = state.items.find(item => item.id===action.payload.id);
            if(element.quantity > 1) {
                element.quantity -= 1;
            }
            else {
                state.items = state.items.filter(val => val.id!=action.payload.id);
            }
        }
    }
})

const filterSliceReducer = filterSlice.reducer;
export const {AddItems,AddNew,IncrementItems,DecrementItems} = filterSlice.actions;

export default filterSliceReducer;