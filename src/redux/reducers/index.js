import {combineReducers} from 'redux';
import { UsersReducer } from './usersReducer';

import { TAReducer,TUserReducer } from './twitchReducer';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'thunk'
const CombineReducers=combineReducers({
    user:UsersReducer,twitch:TAReducer,tUsers:TUserReducer,
})

export const reduxStore=createStore(CombineReducers,applyMiddleware(thunk))
export default CombineReducers