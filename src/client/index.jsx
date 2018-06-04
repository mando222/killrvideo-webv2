import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import killrVideo from './reducers'
import RootContainer from './components/Root'
import ReduxThunk from 'redux-thunk'
injectTapEventPlugin = require("react-tap-event-plugin");
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
        ReduxThunk,
    ))


render(
    <Provider store={store}>
            <RootContainer />
    </Provider>,
    document.getElementById('root')
)
