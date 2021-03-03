import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import PersonIcon from '@material-ui/icons/Person';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { loginUser } from '../../../actions/LoginUser';
import PropTypes from 'prop-types';
import Alert from '../Alert/Alert';
import './login.css';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"By registering you agree to Salnaka's "}
            <Link href="/terms-of-sevice">Terms of Service</Link> {'and'}{' '}
            <Link href="/privacy-policy">Privacy Policy</Link>
        </Typography>
    );
}

function errorMessage(msg, statusHeader) {
    return statusHeader === 400 ? (
        <div className="notification toast" style={{ backgroundColor: '#d9534f' }}>
            <p className="notification-message">{msg}</p>
        </div>
    ) : (
        ''
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        // marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

function SignIn({ loginUser, Authenticated, LoginUser: { user } }) {
    const classes = useStyles();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const { email, password } = formData;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        loginUser(email, password);
    };

    if (Authenticated && !user.package) {
        return <Redirect to="/package-selection" />;
    } else if (Authenticated && user.package) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <PersonIcon color="primary" />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Login
                </Typography>
                <form className={classes.form} onSubmit={(e) => onSubmit(e)}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                size="small"
                                onChange={(e) => onChange(e)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                size="small"
                                onChange={(e) => onChange(e)}
                            />
                        </Grid>
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        Sign In
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link href="/register" variant="body2">
                                Dont have an account? Register
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}

SignIn.propTypes = {
    loginUser: PropTypes.func.isRequired,
    Authenticated: PropTypes.bool,
    error: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
    Authenticated: state.LoginUser.Authenticated,
    LoginUser: state.LoginUser,
});
export default connect(mapStateToProps, { loginUser })(SignIn);
