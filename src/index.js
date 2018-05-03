import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';

import PageTemplate from './containers/PageTemplate';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <PageTemplate />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
