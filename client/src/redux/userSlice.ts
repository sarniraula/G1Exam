import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    email: string;
    isLoggedIn: boolean;
    token: string;
}

const initialState: UserState = {
    email: '',
    isLoggedIn: false,
    token: '',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login(state, action: PayloadAction<UserState>) {
            state.email = action.payload.email;
            state.isLoggedIn = true;
            state.token = action.payload.token;
        },
        logout(state) {
            state.email = '';
            state.isLoggedIn = false;
            state.token = '';
        },
    },
})

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;