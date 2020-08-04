import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';
import { actions as appActions } from 'app/containers/App/slice';

// The initial state of the SettingsPage container
export const initialState: ContainerState = {
  user: {},
  newData: {},
  isOpenedModal: false,
};

const settingsPageSlice = createSlice({
  name: 'settingsPage',
  initialState,
  reducers: {
    selectCurrencyAction(state, action: PayloadAction<any>) {
      if (state.user?.userConfig?.currency?.uuid !== action.payload) {
        state.newData.currency = action.payload;
        state.isOpenedModal = true;
      }
    },
    setUserDataRequestAction() {},
    setUserDataSuccessAction(state, action: PayloadAction<any>) {
      state.isOpenedModal = false;
      state.user = action.payload;
    },
    setUserDataErrorAction(state, action: PayloadAction<any>) {
      state.isOpenedModal = false;
    },
    changeInputAction(state, action: PayloadAction<any>) {
      if (
        state.user[action.payload.name] === action.payload.value ||
        !action.payload.value.length
      ) {
        delete state.newData[action.payload.name];
      } else {
        state.newData[action.payload.name] = action.payload.value;
      }
    },
    toggleCurrencyModal(state) {
      state.isOpenedModal = !state.isOpenedModal;
      delete state.newData.currency;
    },
  },
  extraReducers: {
    [appActions.getUserSuccessAction.type]: (
      state,
      action: PayloadAction<any>,
    ) => {
      state.user = action.payload;
    },
  },
});

export const { actions, reducer, name: sliceKey } = settingsPageSlice;
