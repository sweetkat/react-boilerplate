import { DEFAULT_STATE } from '../constants/ActionTypes';

export function resetState() {
    return {
        type: DEFAULT_STATE
    };
}