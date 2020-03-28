const initialState = {
    counter: 0,
    results: []
};

const reducer = (state =  initialState, action) => {
    switch(action.type){
        case 'INCREMENT':
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1;
            return newState;
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1
            };
        case 'ADD':
            return {
                ...state,
                counter: state.counter + action.value
            };
        case 'SUBTRACT':
            return {
                ...state,
                counter: state.counter - action.value
            };
        case 'STORE_RESULT':
            // const newResults = [...state.results];
            // newResults.push({value: state.counter, id: new Date()});
            return {
                ...state,
                // results: newResults
                results: state.results.concat({value: state.counter, id: new Date()})

            };
        case 'DELETE_RESULT':
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

export default reducer;