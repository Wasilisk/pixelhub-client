import {RootState} from "../index";

export const selectIsAuth = (state: RootState) => state.auth.isAuth;
export const selectUserEmail = (state: RootState) => state.auth.email;