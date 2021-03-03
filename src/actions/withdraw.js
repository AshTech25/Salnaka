import { CREATING_WITHDRAWAL,CREATED_WITHDRAWAL,WITHDRAWAL_FAILURE,GET_WITHDRAWAL_REQ } from './types';
import axios from 'axios';
import { setAlert } from './Alert';
import { SetToken } from '../setToken/SetToken';
import {loadUser} from './LoginUser';
//registering a user

export const createWithdrawal = (formData) => async (dispatch) => {
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
        dispatch({type: CREATING_WITHDRAWAL});
        const body = formData;
        const res = await axios.post(`${process.env.REACT_APP_AXIOS_BASE_URL}/user/withdraw-amount`, body, config);
        
        const { msg,transaction } = res.data.success;
        return msg;
        dispatch({
            type: CREATED_WITHDRAWAL,
            payload: transaction,
        });
        dispatch(setAlert(msg));

        // dispatch(loadUser());

    } catch (err) {
        if (err.response) {
            const errors = err.response.data.errors;
            console.log(errors);
            if (errors) dispatch(setAlert(errors));

            dispatch({
                type: WITHDRAWAL_FAILURE,
                payload: errors,
            });
        }
    }
};


// Get Withdrawal req history
export const getWithdrawalHistory = () => async dispatch => {
    try {
        dispatch({type: CREATING_WITHDRAWAL});
        const res = await axios.get(`${process.env.REACT_APP_AXIOS_BASE_URL}/user/transactionHistory`);

        dispatch({
            type: GET_WITHDRAWAL_REQ,
            payload: res.data.success.transactions
        })
    } catch (err) {
        let errMsg = '',status = ''
        if(err && err.response){
            errMsg = err.response.statusText
            status = err.response.status
        }else{
            errMsg = 'Network Connection Error'
            status = '500'
        }
        dispatch({
            type: WITHDRAWAL_FAILURE,
            payload: [errMsg,status] 
        });
    }
}
