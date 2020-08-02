import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';
import { LOCATION_CHANGE } from 'connected-react-router';

// The initial state of the LoginPage container
export const initialState: ContainerState = {
  pinCode: '',
  password: '',
  currentStep: 0,
};

const loginPageSlice = createSlice({
  name: 'loginPage',
  initialState,
  reducers: {
    changeInputAction(state, action: PayloadAction<any>) {
      state[action.payload.name] = action.payload.value;
    },
    nextStepAction(state) {
      state.currentStep += 1;
    },
    previousStepAction(state) {
      state.currentStep -= 1;
    },
    loginRequestAction() {},
    loginSuccessAction(state, action: PayloadAction<any>) {},
    loginErrorAction(state, action: PayloadAction<string>) {},
  },
  extraReducers: {
    [LOCATION_CHANGE]: () => {
      return initialState;
    },
  },
});

export const { actions, reducer, name: sliceKey } = loginPageSlice;
