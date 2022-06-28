import { createStore, applyMiddleware, combineReducers } from 'redux';
import {drawerReducer} from './drawerreducer'


const reducer = combineReducers({
	drawerReducer: drawerReducer,
	
});

export const store = createStore(reducer)

