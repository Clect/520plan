import * as types from '../actions/types';

export function filterTable(filter) {
    return {
        type: types.FILTER,
        filter
    };
}

export function increase() {
    return {
        type: types.INCREASE
    };
}
