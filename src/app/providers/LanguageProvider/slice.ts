import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';
import i18n from 'i18next';

export const initialState: ContainerState = {
  locale: i18n.language,
  dateFormat: 'dd.MM.yyyy, hh:mm aa',
};

const localeSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    localeChanged(state, action: PayloadAction<string>) {
      state.locale = action.payload;

      if (action.payload === 'en') {
        state.dateFormat = 'dd.MM.yyyy, hh:mm aa';
      } else {
        state.dateFormat = 'dd.MM.yyyy, HH:mm';
      }
    },
  },
});

export const { actions, reducer, name: sliceKey } = localeSlice;
