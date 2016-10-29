import { DEFAULT_STATE } from '../constants/ActionTypes';

const DEFAULT_BOILERPLATE_STATE = {};

export function boilerplate(state = {}, action) {
    switch (action.type) {
        case DEFAULT_STATE:
            return Object.assign({}, state, DEFAULT_BOILERPLATE_STATE);
        default:
            return state;
    }
}