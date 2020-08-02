import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the DashboardPage container
export const initialState: ContainerState = {};

const dashboardPageSlice = createSlice({
  name: 'dashboardPage',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
  },
});

export const { actions, reducer, name: sliceKey } = dashboardPageSlice;
