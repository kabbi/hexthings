import ReactDOM from 'react-dom';
import React from 'react';

import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import 'react-virtualized/styles.css';
import 'bootstrap-loader';
import 'styles/core.scss';

import createBrowserHistory from 'history/lib/createBrowserHistory';
import { useRouterHistory } from 'react-router';
import makeRoutes from './routes';
import Root from './containers/Root';

const browserHistory = useRouterHistory(createBrowserHistory)({
  basename: __BASENAME__,
});

const routes = makeRoutes();

ReactDOM.render(
  <Root history={browserHistory} routes={routes} />,
  document.getElementById('root')
);
