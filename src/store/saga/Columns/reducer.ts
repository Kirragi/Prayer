import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Columns } from '../../../types';
import { State } from '../../../types';

const columnsInitialState: Columns[] = [];

export const columnsSlice = createSlice({
    name: 'columns',
    initialState: columnsInitialState,
    reducers: {
        requestGetColumns: (state) => { },
        responseGetColumns: (state, { payload }: PayloadAction<Columns[]>) => {
            return [...payload];
        },
        requestCreateColumn: (
            state,
            { payload }: PayloadAction<{ title: string }>,
        ) => { },
        responseCreateColumn: (state, { payload }: PayloadAction<Columns>) => {
            const newColumns = [...state, payload];
            return newColumns;
        },
        updateColumnTitle: (
            state,
            { payload }: PayloadAction<{ id: number; title: string }>,
        ) => {
            if (payload.title.trim()) {
                const newColumns = state.map((column) => {
                    if (column.id === payload.id) {
                        return { ...column, title: payload.title };
                    }
                    return column;
                });
                return newColumns;
            }
        },
        deleteColumn: (state, { payload }: PayloadAction<{ id: number }>) => {
            let newColumns: Columns[] = state.filter((column) => {
                return column.id !== payload.id;
            });
            return newColumns;
        },
    },
});
export const slelectColumns = (state: State) => state.columns;