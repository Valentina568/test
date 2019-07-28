import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'
import ducks from "../ducks/ducks";
import market from "../ducks/market";

const middleware = [];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

middleware.push(thunkMiddleware);

export default createStore(combineReducers({ducks, market}), composeEnhancers(applyMiddleware(...middleware))
)