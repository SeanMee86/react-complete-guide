import * as actionTypes from '../actions/types';
import {updateObject} from "../utilities/updateObject";

const initialState = {
    results: []
};

const deleteResult = (state, action) => {
    const newResults = state.results.filter(el => el.id !== action.id);
    return updateObject(state, {results: newResults});
};

const resultReducer = (state =  initialState, action) => {
    switch(action.type){
        case actionTypes.STORE_RESULT: return updateObject(state, {results: state.results.concat({value: action.result, id: new Date()})});
        case actionTypes.DELETE_RESULT: return deleteResult(state, action);
        default: return state;
    }
};

export default resultReducer;