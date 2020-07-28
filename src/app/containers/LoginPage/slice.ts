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
    changePinCodeAction(state, action: PayloadAction<string>) {
      state.pinCode = action.payload;
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
    loginAction(state) {},
  },
});

export const { actions, reducer, name: sliceKey } = loginPageSlice;
