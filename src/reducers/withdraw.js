import { CREATING_WITHDRAWAL, CREATED_WITHDRAWAL, WITHDRAWAL_FAILURE, GET_WITHDRAWAL_REQ } from '../actions/types';

const initialState = {
    payload: '',
    loading: false,
    errors: [],
    requests: [],
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_WITHDRAWAL_REQ:
            return {
                ...state,
                requests: payload,
                loading: false,
            };
        case CREATING_WITHDRAWAL:
            return {
                ...state,
                loading: true,
            };
        case CREATED_WITHDRAWAL:
            return {
                ...state,
                payload,
                loading: false,
            };
        case WITHDRAWAL_FAILURE:
            return {
                ...state,
                loading: false,
                errors: payload,
            };
        default:
            return state;
    }
}
