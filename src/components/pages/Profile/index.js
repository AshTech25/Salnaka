import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Image from '../../../images/auth_bg.jpg';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { getFormValues } from 'redux-form';
import PropTypes from 'prop-types';
import { updateProfile } from '../../../actions/profile';

import ProfileForm from './profile-form';

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

function Profile(props) {
    const onSubmit = (e) => {
        e.preventDefault();
        const { firstName, lastName,fathersName,address, phone, phoneCode,bankName,accountNumber,accountHolderName,nicNumber,nicImages } = props.formStates;
        console.log("submit values", props.formStates)
        let data = {
            bankName,
            accountNumber,
            accountHolderName,
            nicNumber,
            firstName,
            lastName,
            phone,
            phoneCode,
            fathersName,
            address,
            nicImages
        }
        props.updateProfile(data);
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
                <Grid item xs={11} lg={8}>
                    <Paper elevation={3} className={classes.paper}>
                        <ProfileForm onSubmit={onSubmit}/>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

Profile.propTypes = {
    formStates: PropTypes.object.isRequired,
    RegisterUser: PropTypes.func.isRequired,
    error: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
    return {
        // user: state.LoginUser,
        formStates: getFormValues('ProfileForm')(state), // here 'form' is the name you have given your redux form
        error: state.RegisterUser.error,
    };
}

export default connect(mapStateToProps, { updateProfile })(Profile);
