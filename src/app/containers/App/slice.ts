import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the App container
export const initialState: ContainerState = {
  isCollapsedSidebar: false,
  isCollapsedDrawer: false,
  isLogged: false,
  token: {},
  user: {},
  currencies: [],
};

const appSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    getCurrenciesRequestAction() {},
    getCurrenciesSuccessAction(state, action: PayloadAction<any>) {
      state.currencies = action.payload;
    },
    getCurrenciesErrorAction(state, action: PayloadAction<any>) {},
  },
});

export const { actions, reducer, name: sliceKey } = appSlice;
