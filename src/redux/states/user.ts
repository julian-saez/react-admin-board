import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '../../models/user';
import { clearLocalStorage, persistLocalStorage } from '../../utilities/LocalStorage';

export const EmptyUserState: IUser = {
    name: '',
};

export const UserKey = 'user';

export const userSlice = createSlice({
    name: 'user',
    initialState: localStorage.getItem(UserKey) ? JSON.parse(localStorage.getItem(UserKey) as string) : EmptyUserState,
    reducers: {
        createUser: (state, action) => {
        persistLocalStorage<IUser>(UserKey, action.payload);
        return action.payload;
        },
        updateUser: (state, action) => {
        const result = { ...state, ...action.payload };
        persistLocalStorage<IUser>(UserKey, result);
        return result;
        },
        resetUser: () => {
        clearLocalStorage(UserKey);
        return EmptyUserState;
        }
    }
});

export const { createUser, updateUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
