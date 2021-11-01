import { PrayerMenuSlice, PrayerSlice } from './reducer';

export const {
  activePrayers: activePrayers,
  activeSubscribed: activeSubscribed,
} = PrayerMenuSlice.actions;
export const { changeChecked: changeChecked } = PrayerSlice.actions;
