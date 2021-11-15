import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Comments, State } from '../../../types';
import { createSelector } from 'reselect';

const commentsInitialState: Comments[] = [];

export const commentsSlice = createSlice({
    name: 'comments',
    initialState: commentsInitialState,
    reducers: {
        requestGetComments: (state) => { },
        responseGetComments: (state, { payload }: PayloadAction<Comments[]>) => {
            return [...payload];
        },
        requestCreateComment: (
            state,
            { payload }: PayloadAction<{ id: number; body: string }>,
        ) => { },
        responseCreateComment: (state, { payload }: PayloadAction<Comments>) => {
            return [...state, payload];
        },
        deleteComment: (state, { payload }: PayloadAction<{ id: number }>) => {
            let newComments: Comments[] = state.filter((comment) => {
                return comment.id !== payload.id;
            });
            return newComments;
        },
    },
});
export function slelectComments(prayerId: number) {
    const selector = createSelector(
        (state: State) => state.comments,
        (comments) => comments.filter((comment) => comment.prayerId === prayerId),
    );
    return selector;
}