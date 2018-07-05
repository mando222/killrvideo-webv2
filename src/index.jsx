import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import killrVideo from './reducers'
import Root from './components/Root'
import ReduxThunk from 'redux-thunk'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();


// Require basic CSS needed by the app
// require('bootswatch/cosmo/bootstrap.css');
// require('font-awesome/css/font-awesome.css');
// require('gemini-scrollbar/gemini-scrollbar.css');
// require('app.css');
// require('react-joyride/lib/react-joyride-compiled.css');

var initialState = {
    NavReducer: {
        page: "Home",
    },
    ChatReducer: {

    },
    MiscReducer:{
        showWhatIsThis: true,
        showTour: false,
        searchSuggestions: null,
    },
    UserReducer: {
        currentUser: {
            isLoggedIn: false,
        }
    },
    VideoReducer: {
        suggestions: "this is a test",
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
