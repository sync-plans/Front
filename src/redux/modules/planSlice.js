import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    my_plan : {
        toggleSidebar : false,
    }
}



const planSlice = createSlice({
    name : 'planItem',
    initialState : initialState,
    reducers : {
        toggleSidebar: (state,action) => {
            state.my_plan.toggleSidebar = !state.my_plan.toggleSidebar;
        }
    }
})


export default planSlice.reducer;
export const {toggleSidebar} = planSlice.actions;