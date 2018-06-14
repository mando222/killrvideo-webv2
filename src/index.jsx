import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import killrVideo from './reducers'
import Root from './components/Root'
import ReduxThunk from 'redux-thunk'
import injectTapEventPlugin from 'react-tap-event-plugin'
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
            <Root/>
    </Provider>,
    document.getElementById('root')
)
