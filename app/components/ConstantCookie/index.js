import React, { useEffect } from 'react';
import { Button } from 'antd';
import ReactGA from 'react-ga';
import { useCookies } from 'react-cookie';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { makeSelectLocation } from 'containers/App/selectors';
import { useSelector } from 'react-redux';
import { StyledConstantCookie, StyledConstantCookieActions } from './styles';
import messages from './messages';

const stateSelector = createStructuredSelector({
  location: makeSelectLocation(),
});

export default function ConstantCookie() {
  const [cookies, setCookie] = useCookies();
  const {
    location: { pathname },
  } = useSelector(stateSelector);

  useEffect(() => {
    if (cookies.accept) {
      ReactGA.initialize('UA-64684999-1');
      ReactGA.set({ anonymizeIp: true, page: pathname }); // GDPR
      ReactGA.pageview(pathname);
    }
  }, [cookies]);

  return (
    !cookies.accept && (
      <StyledConstantCookie>
        <div>
          <p>
            <FormattedMessage {...messages.description} />
          </p>
          <StyledConstantCookieActions>
            <Button>
              <a href="https://github.com/pietrzakadrian">
                <FormattedMessage {...messages.decline} />
              </a>
            </Button>
            <Button type="primary" onClick={() => setCookie('accept', true)}>
              <FormattedMessage {...messages.accept} />
            </Button>
          </StyledConstantCookieActions>
        </div>
      </StyledConstantCookie>
    )
  );
}
