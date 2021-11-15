import { columnsSlice } from '../Columns/reducer';

export const {
    requestGetColumns: requestGetColumnsAction,
    responseGetColumns: responseGetColumnsAction,
    requestCreateColumn: requestCreateColumnAction,
    responseCreateColumn: responseCreateColumnAction,
    updateColumnTitle: updateColumnTitleAction,
    deleteColumn: deleteColumnAction,
} = columnsSlice.actions;