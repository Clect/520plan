import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import * as types from '../actions/types';

const filter = (state = '', action) => {
    console.log('filter');
    switch (action.type) {
        case types.FILTER:
            return action.filter;
        default:
            return state;
    }
};

const conter = (state = '', action) => {
    switch (action.type) {
        case types.INCREASE:
            return state.conter++;
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    filter,
    conter,
    routing
});

export default rootReducer;
