import { createSlice ,PayloadAction } from "@reduxjs/toolkit";

interface ResevationState {
    value:string[]
}


const initialState: ResevationState  ={
    value:[]
}


const  reservationsSlice = createSlice({
    name: "reservation",
    initialState,
    reducers:{
        addReservation:(state, action : PayloadAction<any>)=>{
            state.value.push(action.payload)
        }, 
        removeReservation:(state, action :PayloadAction<string> )=>{
            state.value = state.value.filter(item => (action.payload !== item ) )
        }
    }
})


export const {removeReservation , addReservation} = reservationsSlice.actions;
export default reservationsSlice.reducer