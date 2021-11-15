import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Loader } from '../../../types';
import { State } from '../../../types';

const laoderInitialState: Loader = {
    user: false,
    columns: false,
    prayer: false,
    comments: false,
};
export const laoderSlice = createSlice({
    name: 'laoder',
    initialState: laoderInitialState,
    reducers: {
        setUserLoader: (
            state,
            { payload }: PayloadAction<{ newValue: boolean }>,
        ) => {
            return { ...state, user: payload.newValue };
        },
        setColumnsLoader: (
            state,
            { payload }: PayloadAction<{ newValue: boolean }>,
        ) => {
            return { ...state, columns: payload.newValue };
        },
        setPrayerLoader: (
            state,
            { payload }: PayloadAction<{ newValue: boolean }>,
        ) => {
            return { ...state, prayer: payload.newValue };
        },
        setCommentsLoader: (
            state,
            { payload }: PayloadAction<{ newValue: boolean }>,
        ) => {
            return { ...state, comments: payload.newValue };
        },

    },
});
export const slelectUserLoader = (state: State) => state.loader.user;