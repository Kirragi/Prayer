import { commentsSlice } from './reducer';

export const {
    requestGetComments: requestGetCommentsAction,
    responseGetComments: responseGetCommentsAction,
    requestCreateComment: requestCreateCommentAction,
    responseCreateComment: responseCreateCommentAction,
    deleteComment: deleteCommentAction,
} = commentsSlice.actions;