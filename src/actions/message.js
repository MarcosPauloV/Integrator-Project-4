import { SET_MESSAGE, CLEAR_MESSAGE } from "./type";

export const setMessage = (msg) => ({
    type: SET_MESSAGE,
    payload: msg
});

export const clearMessage = () => ({
    type: CLEAR_MESSAGE
});