import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Image from '../../../images/auth_bg.jpg';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { getFormValues } from 'redux-form';
import PropTypes from 'prop-types';
import { registerUser } from '../../../actions/RegisterUser';

//import Form from './Form';
import FormBackUp from './Form';

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundImage: `url(${Image})`,
        position: 'relative',
        height: '100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    root: {
        minHeight: '100vh',
        paddingTop: theme.mixins.toolbar.minHeight,
        paddingBottom: theme.mixins.toolbar.minHeight,
    },
    paper: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
    },
}));

function Registration(props) {
    const onSubmit = (e) => {
        const { firstName, lastName, email, password, phone, phoneCode, confirmPassword, refCode } = props.formStates;
        e.preventDefault();
        props.registerUser({
            firstName,
            lastName,
            email,
            password,
            phone,
            phoneCode,
            confirmPassword,
            refCode,
        });
    };

    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Grid
                container
                justify="center"
                alignItems="center"
                direction="column"
                className={classes.root}
                spacing={0}
            >
                <Grid item xs={11} lg={6}>
                    <Paper elevation={3} className={classes.paper}>
                        <FormBackUp onSubmit={onSubmit} />
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

Registration.propTypes = {
    formStates: PropTypes.object.isRequired,
    RegisterUser: PropTypes.func.isRequired,
    error: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
    return {
        formStates: getFormValues('RegistrationForm')(state), // here 'form' is the name you have given your redux form
        error: state.RegisterUser.error,
    };
}

export default connect(mapStateToProps, { registerUser })(Registration);
