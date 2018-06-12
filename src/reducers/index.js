import { combineReducers } from 'redux'
import VideoReducer from './VideoReducer';
import UserReducer from './UserReducer';
import ChatReducer from './ChatReducer';
import TestReducer from './TestReducer';
import MiscReducer from './MiscReducer';

const killrVideo = combineReducers({
    TestReducer,
    ChatReducer,
    UserReducer,
    VideoReducer,
    MiscReducer,
});

export default killrVideo