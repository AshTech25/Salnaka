import { LOAD_USER, LOGIN_USER, LOGIN_FAILURE, AUTH_ERROR, LOGOUT } from './types';
import { setAlert } from './Alert';
import { SetToken } from '../setToken/SetToken';
import axios from 'axios';
import check from '../images/check.png';
import errorIcon from '../images/error.png';

export const logOut = () => (dispatch) => {
    dispatch({
        type: LOGOUT,
    });
};

export const loginUser = (email, password) => async (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const body = JSON.stringify({ email, password });

    try {
        const res = await axios.post(`${process.env.REACT_APP_AXIOS_BASE_URL}/user/login`, body, config);

        dispatch({
            type: LOGIN_USER,
            payload: res.data,
        });
    } catch (error) {
        const errors = error.response.data.errors;
        console.log(errors);
        if (errors) {
            dispatch(setAlert(errors));
        }

        dispatch({
            type: LOGIN_FAILURE,
            payload: errors,
        });
    }
};

export const loadUser = () => async (dispatch) => {
    var token = localStorage.getItem('token');
    if (token) {
        SetToken(token);
    }
    let config = {
        headers: {
            authorization: 'Bearer ' + token,
        },
    };

    try {
        const res = await axios.get(`${process.env.REACT_APP_AXIOS_BASE_URL}/user`, config);

        dispatch({
            type: LOAD_USER,
            payload: res.data.success.user,
        });
    } catch (err) {
        dispatch({
            type: AUTH_ERROR,
        });
    }
};
