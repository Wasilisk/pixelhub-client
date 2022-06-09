import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {AuthResponse} from "../../models/response/AuthResponse";
import {AuthState} from "../../models/store";

const initialState: AuthState = {
  isAuth: false,
  email: null,
}

export const counterSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<AuthResponse>) => {
      state.isAuth = true;
      state.email = action.payload.email;
    },
    logout: (state) => {
        state.isAuth = false;
        state.email = null;
    },
  },
})

export const {login, logout} = counterSlice.actions

export default counterSlice.reducer