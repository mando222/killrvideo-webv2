import { combineReducers } from 'redux'
import VideoReducer from './VideoReducer';
import UserReducer from './UserReducer';
import ChatReducer from './ChatReducer';
import MiscReducer from './MiscReducer';

const killrVideo = combineReducers({
    ChatReducer,
    UserReducer,
    VideoReducer,
    MiscReducer,
});

export default killrVideo