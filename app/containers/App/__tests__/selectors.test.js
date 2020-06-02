import {
  selectGlobalDomain,
  makeSelectLocation,
  makeSelectIsLogged,
  makeSelectToken,
  makeSelectUser,
} from 'containers/App/selectors';

describe('selectGlobalDomain', () => {
  it('should select the home state', () => {
    const globalState = {
      isLogged: false,
      isLoading: false,
      error: {},
      token: {},
      user: {},
    };
    const mockedState = {
      global: globalState,
    };
    expect(selectGlobalDomain(mockedState)).toEqual(globalState);
  });
});

describe('makeSelectLocation', () => {
  it('should select the location', () => {
    const locationStateSelector = makeSelectLocation();
    const router = {
      location: { pathname: '/foo' },
    };
    const mockedState = {
      router,
    };
    expect(locationStateSelector(mockedState)).toEqual(router.location);
  });
});

describe('makeSelectIsLogged', () => {
  const isLoggedSelector = makeSelectIsLogged();
  it('should select the is logged', () => {
    const isLogged = false;
    const mockedState = {
      global: {
        isLogged,
      },
    };
    expect(isLoggedSelector(mockedState)).toEqual(isLogged);
  });
});

describe('makeSelectToken', () => {
  const tokenSelector = makeSelectToken();
  it('should select the token', () => {
    const token = {};
    const mockedState = {
      global: {
        token,
      },
    };
    expect(tokenSelector(mockedState)).toEqual(token);
  });
});

describe('makeSelectUser', () => {
  const userSelector = makeSelectUser();
  it('should select the token', () => {
    const user = {};
    const mockedState = {
      global: {
        user,
      },
    };
    expect(userSelector(mockedState)).toEqual(user);
  });
});
