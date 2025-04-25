import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../redux/counter/CounterSlice"
const store=configureStore({
    reducer:{
        counter:counterSlice
    },
})
export default store