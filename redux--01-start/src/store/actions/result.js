import {DELETE_RESULT, STORE_RESULT} from "./types";

export const storeResult = (result) => {
    return (dispatch, getState) => {
        setTimeout(() => {
            console.log(getState());
            dispatch({
                type: STORE_RESULT,
                result
            })
        }, 2000);
    };
};

export const deleteResult = (id) => {
    return {
        type: DELETE_RESULT,
        id
    }
};