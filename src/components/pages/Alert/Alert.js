import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useSnackbar } from 'notistack';

import { removeAlert } from '../../../actions/Alert';
// import MuiAlert from '@material-ui/lab/Alert';

function Alert({ errors, payload, user, removeAlert }) {
    const { enqueueSnackbar } = useSnackbar();

    if (errors.length > 0) {
        enqueueSnackbar(errors[0].msg, { variant: 'error' });

        setTimeout(function () {
            removeAlert(errors[0].id);
        }, 3000);
    }

    // else if (loginErrors.length > 0 ) {

    //     enqueueSnackbar(loginErrors[0].msg, { variant: 'error' });

    //     setTimeout(function () {
    //         removeAlert(errors[0].id);
    //     }, 3000);
    // }
    else if (user) {
        enqueueSnackbar('Login Successful', { variant: 'success' });
    } else if (payload.success) {
        enqueueSnackbar('Register Successful', { variant: 'success' });
    }

    return <div></div>;
}

const mapStateToProps = (state) => ({
    errors: state.Alert,
    payload: state.RegisterUser.payload,
});

Alert.propTypes = {
    errors: PropTypes.array.isRequired,
    loginErrors: PropTypes.array.isRequired,
    payload: PropTypes.object.isRequired,
    removeAlert: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { removeAlert })(Alert);

// function AlertHandler(props) {
//   return <MuiAlert elevation={6} variant="filled" {...props} />;
// }

// const Alert = ({ alerts }) =>alerts !== null && alerts.length > 0 && alerts.map(alert =>

//     <div key={alert.id} className="notification-container bottom-right">

//     <div

//       className="notification toast bottom-right"
//       style={{ backgroundColor: alert.alertType }}
//     >
//       <div className="notification-image">
//         <img src={alert.icon} alt="" />
//       </div>

//         <p className="notification-message">
//           {alert.msg}
//         </p>

//     </div>

//     </div>
// )

//   //return<AlertHandler AlertHandler severity = "error" > { alert.msg }</AlertHandler>

// Alert.propTypes = {
//   alerts: PropTypes.array.isRequired
// }

// //we are mapping the redux state to a prop
// const mapStateToProps = state => ({
//   //state.alert comes from the rootReducer because the previous state is in the root reducer
//   //now alerts is the prop that we need
//   alerts: state.Alert
// })

// //connect consist of initial state and actions so we pass the initial state here
// export default connect(mapStateToProps)(Alert)
