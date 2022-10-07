import { configureStore } from "@reduxjs/toolkit";
import reservationsReducer from "../feactures/reservationsSlice";

export const store = configureStore({ 
    reducer:{
        reservations:reservationsReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispach = typeof store.dispatch;