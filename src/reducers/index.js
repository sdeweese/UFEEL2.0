import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import EmotionReducer from './EmotionReducer';
import EmoteReducer from './EmoteReducer';
import GraphReducer from './GraphReducer';
import DiaryReducer from './DiaryReducer';

const rootReducer = combineReducers({
    user: UserReducer,
    emotions: EmoteReducer,
    graph: GraphReducer,
    diary: DiaryReducer
});


export default rootReducer;
