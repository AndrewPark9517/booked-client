import {CHANGE_DISPLAY_TO_BLOCK, CHANGE_DISPLAY_TO_LINE} from '../actions/inventory';

const initialState = {
    displayMode: "block"
};

export default function reducer(state = initialState, action) {
    if(action.type === CHANGE_DISPLAY_TO_BLOCK) {
        return Object.assign({}, state, {displayMode: "block"});
    }
    else if(action.type === CHANGE_DISPLAY_TO_LINE) {
        return Object.assign({}, state, {displayMode: "line"});
    }
    return state;
}