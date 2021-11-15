import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Prayer, State } from '../../../types';
import { createSelector } from 'reselect';

const prayerInitialState: Prayer[] = [];

export const prayerSlice = createSlice({
    name: 'prayer',
    initialState: prayerInitialState,
    reducers: {
        requestGetPrayer: (state) => { },
        responseGetPrayer: (state, { payload }: PayloadAction<Prayer[]>) => {
            return [...payload];
        },
        requestCreatePrayer: (
            state,
            { payload }: PayloadAction<{ title: string, columnId: number }>,
        ) => { },
        responseCreatePrayer: (
            state,
            {
                payload,
            }: PayloadAction<{
                id: number;
                title: string;
                description: string;
                columnId: number;
                checked: boolean;
            }>,
        ) => {
            const newPrayer: Prayer = {
                id: payload.id,
                title: payload.title,
                description: payload.description,
                checked: payload.checked,
                columnId: payload.columnId,
                commentsIds: [],
            };
            const newPrayers: Prayer[] = [...state, newPrayer];
            return newPrayers;
        },
        deletePrayer: (state, { payload }: PayloadAction<{ id: number }>) => {
            let newPrayers: Prayer[] = state.filter((prayer) => {
                return prayer.id !== payload.id;
            });
            return newPrayers;
        },
        updatePrayerChecked: (
            state,
            { payload }: PayloadAction<{ id: number; title: string, checked: boolean }>,
        ) => {
            if (payload.title.trim()) {
                const newPrayers = state.map((prayer) => {
                    if (prayer.id === payload.id) {
                        return { ...prayer, checked: payload.checked, };
                    }
                    return prayer;
                });
                return newPrayers;
            }
        },
    }
});

export function slelectPrayer(columnId: number, checked: boolean) {
    const selector = createSelector(
        (state: State) => state.prayer,
        (prayer) => prayer.filter((prayer) => prayer.columnId === columnId && prayer.checked === checked),
    );
    return selector;
}