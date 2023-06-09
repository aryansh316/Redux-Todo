import {createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import combineReducers from './reducers'

const initialState={};

const middleware = [thunk];

const store = createStore(
    combineReducers,
    initialState,
    applyMiddleware(...middleware)
)

export default store;