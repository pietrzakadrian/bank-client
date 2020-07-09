import produce from 'immer';
import registerPageReducer from '../reducer';
import { registerSuccessAction } from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('registerPageReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      firstName: '',
      lastName: '',
      currency: null,
      email: '',
      password: '',
      pinCode: '',
      currentStep: 0,
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(registerPageReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the registerSuccess action correctly', () => {
    const fixture = 1231;

    const expectedResult = produce(state, (draft) => {
      draft.pinCode = fixture;
    });

    expect(registerPageReducer(state, registerSuccessAction(fixture))).toEqual(
      expectedResult,
    );
  });
});
