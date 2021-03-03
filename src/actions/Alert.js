import { SET_ALERT, REMOVE_ALERT } from './types';
import { v4 as uuid } from 'uuid';

export const setAlert = (errors) => (dispatch) => {
    //uuid generates the random universal id

    //we are going to call the SET_ALERT from reducer
    dispatch({
        type: SET_ALERT,
        payload: errors.map((error) => {
            return { id: uuid(), msg: error.msg };
        }),
    });

    //we gna remove the alert after 5 seconds
};

export const removeAlert = (id) => (dispatch) => {
    dispatch({
        type: REMOVE_ALERT,
        payload: id,
    });

    //we gna remove the alert after 5 seconds
};
