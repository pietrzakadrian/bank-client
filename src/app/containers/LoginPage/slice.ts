import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

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
    changePinCodeAction(state, action: PayloadAction<number>) {
      state.pinCode = action.payload || initialState.pinCode;
    },
    changePasswordAction(state, action: PayloadAction<string>) {
      state.password = action.payload;
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
});

export const { actions, reducer, name: sliceKey } = loginPageSlice;
