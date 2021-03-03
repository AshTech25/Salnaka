import { SET_ALERT, REMOVE_ALERT } from '../actions/types';

const initialState = [];

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case SET_ALERT:
            return [...state, ...payload];
        case REMOVE_ALERT:
            //we will filter the alert by checking the alert id so it will filter all the alerts
            //accept which matches the id
            return state.filter((alert) => alert.id !== payload);

        default:
            return state;
    }
}
