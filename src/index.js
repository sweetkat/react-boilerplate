import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers/index';
import Boilerplate from './containers/Boilerplate';
import './styles/index.scss';

// Add redux dev tools and thunk middleware
const enhance = process.env.NODE_ENV !== 'production' && window.devToolsExtension ? compose(
    applyMiddleware(thunkMiddleware),
    window.devToolsExtension && window.devToolsExtension()
) : applyMiddleware(thunkMiddleware);

const store = createStore(
    rootReducer,
    enhance
);

render(
    <Provider store={store}>
        <Boilerplate/>
    </Provider>,
    document.querySelector('[data-component="react-boilerplate"]')
);