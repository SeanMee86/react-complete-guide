import {ADD, DECREMENT, INCREMENT, SUBTRACT} from "./types";

export const increment = () => {
    return {
        type: INCREMENT
    }
};

export const decrement = () => {
    return {
        type: DECREMENT
    }
};

export const add = () => {
    return {
        type: ADD,
        value: 10
    }
};

export const subtract = (num) => {
    return {
        type: SUBTRACT,
        value: num
    }
};