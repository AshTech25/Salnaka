import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import RegisterUser from './RegisterUser';
import Alert from './Alert';
import LoginUser from './LoginUser';
import Withdrawal from './withdraw';


export default combineReducers({
    form: formReducer,
    RegisterUser,
    Alert,
    LoginUser,
    Withdrawal
});
