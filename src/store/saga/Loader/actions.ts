import { laoderSlice } from '../Loader/reducer';

export const {
    setUserLoader: setUserLoaderAction,
    setColumnsLoader: setColumnsLoaderAction,
    setPrayerLoader: setPrayerLoaderAction,
    setCommentsLoader: setCommentsLoaderAction } =
    laoderSlice.actions;
