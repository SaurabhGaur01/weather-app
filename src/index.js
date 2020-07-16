import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import thunk from 'redux-thunk';
import WeatherApp from './components/WeatherApp';
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers/index';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <WeatherApp />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
