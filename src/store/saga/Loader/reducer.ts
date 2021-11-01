import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Loader } from '../../../types';

const laoderInitialState: Loader = {
    user: false,
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
    },
});
