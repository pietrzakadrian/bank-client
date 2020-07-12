import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga';
const history = createBrowserHistory();

history.listen((location) => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});

export default history;
