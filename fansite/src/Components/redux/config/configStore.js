import { createStore } from 'redux';
import { combineReducers } from 'redux';
import comments from '../modules/Comments';

const rootReducer = combineReducers({
	//리듀서들 넣는 곳
	comments,
});
const store = createStore(rootReducer);

export default store;
