import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';
import { actions as AppActions } from 'app/containers/App/slice';

// The initial state of the RegistrationPage container
export const initialState: ContainerState = {
  firstName: '',
  lastName: '',
  currency: '',
  email: '',
  password: '',
  pinCode: '',
  currentStep: 0,
};

const registrationPageSlice = createSlice({
  name: 'registrationPage',
  initialState,
  reducers: {
    registerRequestAction() {},
    registerSuccessAction(state, action: PayloadAction<number>) {
      state.pinCode = action.payload;
    },
    registerErrorAction(state, action: PayloadAction<string>) {},
  },
  extraReducers: {
    [AppActions.changeInputAction.type]: (
      state,
      action: PayloadAction<any>,
    ) => {
      if (action.payload.dataset.key === registrationPageSlice.name) {
        state[action.payload.name] = action.payload.value;
      }
    },
  },
});

export const { actions, reducer, name: sliceKey } = registrationPageSlice;
