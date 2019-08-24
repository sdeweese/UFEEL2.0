import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import EmotionReducer from './EmotionReducer';
import EmoteReducer from './EmoteReducer';
import GraphReducer from './GraphReducer';
import DiaryReducer from './DiaryReducer';
import CodeReducer from './CodeReducer';

const rootReducer = combineReducers({
    user: UserReducer,
    emotions: EmoteReducer,
    graph: GraphReducer,
    diary: DiaryReducer,
    code: CodeReducer
});


export default rootReducer;
