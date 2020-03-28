import * as actionTypes from '../actions';

const initialState = {
    results: []
};

const resultReducer = (state =  initialState, action) => {
    switch(action.type){
        case actionTypes.STORE_RESULT:
            // const newResults = [...state.results];
            // newResults.push({value: state.counter, id: new Date()});
            return {
                ...state,
                // results: newResults
                results: state.results.concat({value: action.result, id: new Date()})

            };
        case actionTypes.DELETE_RESULT:
            // const newResults = [...state.results];
            // const indexOfEl = newResults
            //     .indexOf(newResults
            //         .filter(newResult => newResult.id === action.id)[0]);
            // newResults.splice(indexOfEl, 1);
            const newResults = state.results.filter(el => el.id !== action.id);
            return {
                ...state,
                results: newResults
            };
        default:
            return state;
    }
};

export default resultReducer;