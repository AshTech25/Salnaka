import { REGISTER_USER, REGISTER_FAILURE } from './types';
import axios from 'axios';
import { setAlert } from './Alert';
//registering a user

export const registerUser = (formData) => async (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    try {
        if (!formData.refCode) {
            delete formData.refCode;
        }

        const body = JSON.stringify(formData);

        const res = await axios.post(`${process.env.REACT_APP_AXIOS_BASE_URL}/user/register`, body, config);

        dispatch({
            type: REGISTER_USER,
            payload: res.data,
        });

        //dispatch(setAlert('User Registered','success'))
    } catch (error) {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            //   console.log(error.response);
            //   console.log(error.response.status);
            //   console.log(error.response.headers);
            // } else if (error.request) {
            //   // The request was made but no response was received
            //   // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            //   // http.ClientRequest in node.js
            //   console.log(error.request);
            // } else {
            //   // Something happened in setting up the request that triggered an Error
            //   console.log('Error', error.message);
            // }
            // console.log(error.config);
            //alert("Somwthing went wrong with API.AI\nCheck console log for details...")
            const errors = error.response.data.errors;
            console.log(errors);
            if (errors) dispatch(setAlert(errors));

            dispatch({
                type: REGISTER_FAILURE,
                payload: errors,
            });
        }
    }
};
