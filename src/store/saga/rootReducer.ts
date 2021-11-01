import { combineReducers } from '@reduxjs/toolkit';
import { laoderSlice } from './Loader/reducer';
import { userSlice } from './User/reducer';

export const reducer = combineReducers({
    user: userSlice.reducer,
    loader: laoderSlice.reducer,
});
