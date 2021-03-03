import { UPDATE_PROFILE, UPDATE_PROFILE_FAILURE,LOAD_USER } from './types';
import axios from 'axios';
import { setAlert } from './Alert';
import { SetToken } from '../setToken/SetToken';

//registering a user

export const updateProfile = (formData) => async (dispatch) => {
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
        let {nicImages,...remaing}=formData;
        const body = remaing;
        let res;
        console.log(nicImages,remaing)
        if(nicImages && nicImages.length > 0 && nicImages.every(val => !val._id)){
            let formData = new FormData();
            nicImages.map((val,ind) => {
                formData.append(`nicImages`,val);
            })
            res = await axios.all([
                axios.put(`${process.env.REACT_APP_AXIOS_BASE_URL}/user`, body, config),
                axios.post(`${process.env.REACT_APP_AXIOS_BASE_URL}/user/uploadNIC`, formData, config)
            ])
        }else{
            res = await axios.put(`${process.env.REACT_APP_AXIOS_BASE_URL}/user`, body, config);
        }

        dispatch({
            type: LOAD_USER,
            payload: res.data.success.user,
        });
    } catch (err) {
        if (err.response) {
            const errors = err.response.data.errors;
            console.log(errors);
            if (errors) dispatch(setAlert(errors));

            dispatch({
                type: UPDATE_PROFILE_FAILURE,
                payload: errors,
            });
        }
    }
};
