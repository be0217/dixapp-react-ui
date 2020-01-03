import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './store';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import env from './environment/env';


const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

export const environment = env("dev");

// use token when passed
store.subscribe(() => environment.axios.defaults.headers.common['Authorization'] = `Bearer ${store.getState().authReducer.token}`);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
//
