import { prayerSlice } from "../Prayer/reducer";

export const {
    requestGetPrayer: requestGetPrayerAction,
    responseGetPrayer: responseGetPrayerAction,
    requestCreatePrayer: requestCreatePrayerAction,
    responseCreatePrayer: responseCreatePrayerAction,
    deletePrayer: deletePrayerAction,
    updatePrayerChecked: updatePrayerCheckedAction,
} = prayerSlice.actions;