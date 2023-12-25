import { createSlice } from "@reduxjs/toolkit";
const initialState = [
    {id: '0', name: 'Dude Lebowski'},
    {id: '1', name: 'Neil Young'},
    {id: '2', name: 'Arm Strong'}
]

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})


export const {} = usersSlice.actions
export const selectAllUsers = (state) => state.users
export default usersSlice.reducer