import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import EmotionReducer from './EmotionReducer';

const rootReducer = combineReducers({
    user: UserReducer,
    emotions: EmotionReducer,
});


export default rootReducer;
