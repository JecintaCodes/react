import {createSlice} from "@reduxjs/toolkit"


const initialState = {
    taskUser: "" || null
}

const GlobalState = createSlice({
    name: "task",
    initialState,
    reducers: {
       createUser:(state: any, {payload}:any)=>{
        state.user = payload
       },
       logOut:(state: any)=>{
        state.user =  null
       }
    }
});

export const {createUser, logOut} = GlobalState.actions

export default GlobalState.reducer

