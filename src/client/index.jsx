import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import killrVideo from './reducers'
import RootContainer from './components/Root'
import thunkMiddleware from 'redux-thunk'

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

var initialState = {
    TestReducer: {
        testReduce: {
            test: false
        }
    }
}

let store = createStore(
    killrVideo,
    initialState,
    applyMiddleware(
        thunkMiddleware,
    ))


render(
    <Provider store={store}>
            <RootContainer />
    </Provider>,
    document.getElementById('root')
)
