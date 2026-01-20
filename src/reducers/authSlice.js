import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: null,
    balance: null,
    pin: null,
    phoneNumber: null,
    isLogin: false,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action) {
            state.name = action.payload.name;
            state.balance = action.payload.balance;
            state.phoneNumber = action.payload.phoneNumber;
            state.pin = action.payload.pin;
            state.isLogin = true;
        },
        logout(state) {
            state = initialState;
        }
    }
})


export const { login, logout } = authSlice.actions;

export default authSlice.reducer;