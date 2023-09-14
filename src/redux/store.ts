import { configureStore } from "@reduxjs/toolkit";
import { IUser } from "../models/user";
import { userSlice } from "./states/user";

export interface AppStore {
    user: IUser;
}

export default configureStore<AppStore>({
    reducer: {
        user: userSlice.reducer
    }
});
