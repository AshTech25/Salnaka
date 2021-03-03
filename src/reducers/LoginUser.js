import { LOGIN_USER, LOAD_USER, LOGIN_FAILURE, AUTH_ERROR, LOGOUT } from '../actions/types';

const initialState = {
    token: localStorage.getItem('token'),
    Authenticated: false,
    loading: true,
    loginErrors: [],
    user: null,
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case LOAD_USER:
            return {
                ...state,
                Authenticated: true,
                loading: false,
                user: payload,
            };

        case LOGIN_USER:
            localStorage.setItem('token', payload.success.token);
            return {
                ...state,
                ...payload,
                Authenticated: true,
                loading: false,
                user: payload.success.user,
            };
        case LOGIN_FAILURE:
        case AUTH_ERROR:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,

                Authenticated: false,
                loading: false,
            };

        case LOGOUT:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                user: null,
                Authenticated: false,
                loading: false,
            };
        default:
            return state;
    }
}
