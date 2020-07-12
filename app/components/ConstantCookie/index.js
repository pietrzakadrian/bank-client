import React, { useEffect } from 'react';
import { Button } from 'antd';
import ReactGA from 'react-ga';
import { useCookies } from 'react-cookie';
import { FormattedMessage } from 'react-intl';
import {
  StyledConstantCookie,
  StyledConstantCookieActions,
} from './ConstantCookie.style';
import messages from './messages';

export default function ConstantCookie() {
  const [cookies, setCookie] = useCookies();

  useEffect(() => {
    if (cookies.accept) {
      ReactGA.initialize('UA-64684999-1');
      ReactGA.set({ anonymizeIp: true }); // GDPR
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
