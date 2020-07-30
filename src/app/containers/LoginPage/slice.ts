import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';
import { actions as AppActions } from 'app/containers/App/slice';

// The initial state of the LoginPage container
export const initialState: ContainerState = {
  pinCode: '',
  password: '',
  currentStep: 1,
};

const loginPageSlice = createSlice({
  name: 'loginPage',
  initialState,
  reducers: {
    loginRequestAction() {},
    loginSuccessAction(state, action: PayloadAction<any>) {},
    loginErrorAction(state, action: PayloadAction<string>) {},
  },
  extraReducers: {
    [AppActions.changeInputAction.type]: (
      state,
      action: PayloadAction<any>,
    ) => {
      if (action.payload.dataset.key === loginPageSlice.name) {
        state[action.payload.name] = action.payload.value;
      }
    },
    [AppActions.nextStepAction.type]: (state, action: PayloadAction<any>) => {
      if (action.payload.dataset.key === loginPageSlice.name) {
        state.currentStep += 1;
      }
    },
    [AppActions.previousStepAction.type]: (
      state,
      action: PayloadAction<any>,
    ) => {
      console.log(action);

      if (action.payload.dataset.key === loginPageSlice.name) {
        state.currentStep -= 1;
      }
    },
  },
});

export const { actions, reducer, name: sliceKey } = loginPageSlice;
