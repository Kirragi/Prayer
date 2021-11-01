import { combineReducers } from 'redux';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ColumnType, PrayerType, State } from '../types';
import { createSelector } from 'reselect';
import { api } from '../api';
const ColumnInitialState: ColumnType[] = [
  {
    title: 'To Doo',
    description: 'To Doo',
  },
  {
    title: 'In Progress',
    description: 'In Progress',
  },
  {
    title: 'Completed',
    description: 'Completed',
  },
];
const PrayerInitialState: PrayerType[] = [
  {
    id: 'asdq',
    title:
      'Prayer item two which is for my family to love God whole heartedly.',
    description: 'To Doo',
    checked: false,
  },
  {
    id: 'asdwr',
    title:
      'Prayer item two which is for my family to love God whole heartedly.',
    description: 'To Doo',
    checked: false,
  },
  {
    id: 'asder',
    title:
      'Prayer item two which is for my family to love God whole heartedly.',
    description: 'To Doo',
    checked: false,
  },
  {
    id: 'asdrr',
    title:
      'Prayer item two which is for my family to love God whole heartedly.',
    description: 'To Doo',
    checked: true,
  },
  {
    id: 'asdt',
    title:
      'Prayer item two which is for my family to love God whole heartedly.',
    description: 'To Doo',
    checked: true,
  },
  {
    id: 'asdw',
    title:
      'Prayer item two which is for my family to love God whole heartedly.',
    description: 'To Doo',
    checked: true,
  },
  {
    id: 'asde',
    title:
      'Prayer item two which is for my family to love God whole heartedly.',
    description: 'To Doo',
    checked: true,
  },
  {
    id: 'asdr',
    title: 'Prayer item twm,o...',
    description: 'Completed',
    checked: true,
  },
  {
    id: 'asdts',
    title:
      'Prayer item two which is for my family to love God whole heartedly.',
    description: 'To Doo',
    checked: true,
  },
  {
    id: 'asdh',
    title:
      'Prayer item two which is for my family to love God whole heartedly.',
    description: 'To Doo',
    checked: true,
  },
  {
    id: 'asdj12',
    title:
      'Prayer item two which is for my family to love God whole heartedly.',
    description: 'To Doo subscribed',
    checked: false,
  },
  {
    id: 'asdk234',
    title:
      'Prayer item two which is for my family to love God whole heartedly.',
    description: 'To Doo subscribed',
    checked: true,
  },
  {
    id: 'asdll1',
    title:
      'Prayer item two which is for my family to love God whole heartedly.',
    description: 'To Doo subscribed',
    checked: false,
  },
];
const CommentsInitialState = [
  {
    id: 'qwe',
    author: 'Anna Barber',
    body: 'Hey, Hey!',
    dateCreate: '22.11.2001',
    image: 's',
  },
  {
    id: 'qw1e',
    author: 'Anna Barber',
    body: 'Hey, Hey!',
    dateCreate: '22.11.2001',
    image: 's',
  },
  {
    id: 'qw2e',
    author: 'Anna Barber',
    body: 'Hey, Hey!',
    dateCreate: '22.11.2001',
    image: 's',
  },
];
export const CommentSlice = createSlice({
  name: 'Comment',
  initialState: CommentsInitialState,
  reducers: {},
});
export const ColumnSlice = createSlice({
  name: 'Column',
  initialState: ColumnInitialState,
  reducers: {},
});
export const PrayerSlice = createSlice({
  name: 'Prayer',
  initialState: PrayerInitialState,
  reducers: {
    changeChecked: (state, { payload }: PayloadAction<{ id: string }>) => {
      const newArrPrayer = state.map((prayer) => {
        if (prayer.id === payload.id) {
          return { ...prayer, checked: !prayer.checked };
        }
        return prayer;
      });
      return newArrPrayer;
    },
  },
});
export const PrayerMenuSlice = createSlice({
  name: 'PrayerMenu',
  initialState: false,
  reducers: {
    activePrayers: () => {
      return false;
    },
    activeSubscribed: () => {
      return true;
    },
  },
});

export function slelectPrayer(description: string, checked: boolean) {
  const selector = createSelector(
    (state: State) => state.Prayer,
    (prayer) =>
      prayer.filter(
        (prayer) =>
          prayer.description === description && prayer.checked === checked,
      ),
  );
  return selector;
}
export const slelectComments = (state: State) => state.Comment;
export function slelectPrayerChecked(description: string, checked: boolean) {
  const selector = createSelector(
    (state: State) => state.Prayer,
    (prayer) =>
      prayer.filter(
        (prayer) =>
          prayer.description === description && prayer.checked === checked,
      ),
  );
  return selector;
}

export const reducer = combineReducers({
  Column: ColumnSlice.reducer,
  Prayer: PrayerSlice.reducer,
  Comment: CommentSlice.reducer,
  PrayerMenu: PrayerMenuSlice.reducer,
});
