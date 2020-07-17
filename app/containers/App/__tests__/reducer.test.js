import produce from 'immer';

import { loginSuccessAction } from 'containers/LoginPage/actions';
import { logoutSuccessAction } from '../actions';
import appReducer from '../reducer';

/* eslint-disable default-case, no-param-reassign */
describe('registerPageReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      isCollapsedDrawer: false,
      isCollapsedSidebar: false,
      isLogged: false,
      token: {},
      user: {},
      currencies: [],
      isOpenedMessage: false,
      messages: [],
      isOpenedModal: false,
      notifications: [],
      openedMessage: '',
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(appReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the loginSuccess action correctly', () => {
    const fixture = {
      isLogged: true,
      token: {},
      user: {},
    };
    const expectedResult = produce(state, (draft) => {
      draft.isLogged = fixture.isLogged;
      draft.token = fixture.token;
      draft.user = fixture.user;
    });

    expect(
      appReducer(state, loginSuccessAction(fixture.user, fixture.token)),
    ).toEqual(expectedResult);
  });

  it('should handle the logoutSuccessAction action correctly', () => {
    const expectedResult = produce(state, (draft) => {
      draft.isLogged = state.isLogged;
      draft.token = state.token;
      draft.user = state.user;
    });

    expect(appReducer(state, logoutSuccessAction())).toEqual(expectedResult);
  });
});
