import { combineReducers } from '@reduxjs/toolkit';
import { laoderSlice } from './Loader/reducer';
import { userSlice } from './User/reducer';
import { columnsSlice } from './Columns/reducer';
import { prayerSlice } from './Prayer/reducer';
import { commentsSlice } from './Comments/reducer';

export const reducer = combineReducers({
    user: userSlice.reducer,
    columns: columnsSlice.reducer,
    loader: laoderSlice.reducer,
    prayer: prayerSlice.reducer,
    comments: commentsSlice.reducer,
});
