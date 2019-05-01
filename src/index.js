import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger'; // middleware
import thunkMiddleware from 'redux-thunk';
import './index.css';
import 'popper.js';
import 'jquery';
import 'bootstrap';
import './components/assets/custom-btsp.scss';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { searchMobiles, requestMobiles } from './reducers';

const logger = createLogger();

const rootReducer = combineReducers({searchMobiles, requestMobiles})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger)); //(rootReducer for many many reducers)

ReactDOM.render(<Provider store={store}> <App /> </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
