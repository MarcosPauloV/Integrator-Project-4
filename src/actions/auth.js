import { 
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_MESSAGE
} from "./type";

import authService from "../services/authService";

export const register = (username, lastname, cpf, pnumber, email, password, password2) => (dispatch) => {
    return authService.register(username, lastname, cpf, pnumber, email, password, password2).then(
        (response) => {
          dispatch({
            type: REGISTER_SUCCESS,
          });
    
          dispatch({
            type: SET_MESSAGE,
            payload: response.data.message,
          });
    
          return Promise.resolve();
        },
        (error) => {
          const message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
    
          dispatch({
            type: REGISTER_FAIL,
          });
    
          dispatch({
            type: SET_MESSAGE,
            payload: message,
          });
    
          return Promise.reject();
        }
    );
};

export const login = (email, password) => (dispatch) => {
    return authService.login(email, password).then(
        (data) => {
          dispatch({
            type: LOGIN_SUCCESS,
            payload: { user: data },
          });
    
          return Promise.resolve();
        },
        (error) => {
          const message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
    
          dispatch({
            type: LOGIN_FAIL,
          });
    
          dispatch({
            type: SET_MESSAGE,
            payload: message,
          });
    
          return Promise.reject();
        }
    );
};

const logout = ( ) => (dispatch) => {
    authService.logout();
    dispatch({
        type: LOGOUT,
    });
};