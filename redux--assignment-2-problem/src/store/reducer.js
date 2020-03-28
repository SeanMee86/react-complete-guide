import {ADD_PERSON, DELETE_PERSON} from "./actions";

const initialState = {
    persons: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PERSON:
            const newPerson = {
                id: Math.random(), // not really unique but good enough here!
                name: action.name,
                age: action.age
            };
            const addedPersonArray = state.persons.concat(newPerson);
            return {
                ...state,
                persons: addedPersonArray
            };
        case DELETE_PERSON:
            const deletedPersonArray = state.persons.filter(person => person.id !== action.id);
            return {
                ...state,
                persons: deletedPersonArray
            };
        default:
            return state;
    }
};

export default reducer;