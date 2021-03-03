import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { Autocomplete } from '@material-ui/lab';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import countries from './DialCodes';
import { CircularProgress, InputAdornment } from '@material-ui/core';
import { Field, reduxForm } from 'redux-form';
import asyncValidate from './validation';

let timeout;

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"By registering you agree to Salnaka's "}
            <Link href="#" variant="body2">
                Terms of Service
            </Link>
            {' and '}
            <Link href="#" variant="body2">
                Privacy Policy
            </Link>
        </Typography>
    );
}

function countryToFlag(isoCode) {
    return typeof String.fromCodePoint !== 'undefined'
        ? isoCode.toUpperCase().replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
        : isoCode;
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
    boxSize: {
        marginTop: theme.spacing(3),
    },
    input: {
        fontSize: 8,
    },

    option: {
        fontSize: 15,
        '& > span': {
            marginRight: 10,
            fontSize: 18,
        },
    },
}));

const validate = (values) => {
    const errors = {};
    const requiredFields = ['firstName', 'lastName', 'email', 'password', 'confirmPassword', 'phoneCode', 'phone'];
    requiredFields.forEach((field) => {
        if (!values[field]) {
            errors[field] = 'Required';
        }
    });
    if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    return errors;
};

const renderTextField = ({ label, input, meta: { touched, invalid, error, asyncValidating }, ...custom }) => (
    <TextField
        label={label}
        placeholder={label}
        error={touched && invalid}
        helperText={touched && error}
        fullWidth
        variant="outlined"
        size="small"
        outlined
        {...input}
        {...custom}
        InputProps={
            label === 'Referral Code'
                ? {
                      endAdornment: (
                          <Box display={asyncValidating ? 'block' : 'none'}>
                              <CircularProgress size={32} />
                          </Box>
                      ),
                  }
                : ''
        }
    />
);

const renderDropdown = ({ label, input, name, optionClass, meta: { touched, invalid, error }, ...custom }) => {
    const getSelectedOption = () => {
        return countries.find((option) => `(${option.code}) +${option.phone}` === input.value);
    };
    return (
        <Autocomplete
            id={name}
            options={countries}
            size="small"
            classes={{
                option: optionClass,
            }}
            autoHighlight
            getOptionLabel={(option) => (option ? `(${option.code}) +${option.phone}` : '')}
            renderOption={(option) => (
                <React.Fragment>
                    <span>{countryToFlag(option.code)}</span>
                    {option.label} ({option.code}) +{option.phone}
                </React.Fragment>
            )}
            value={getSelectedOption()}
            onChange={(event, value) => input.onChange(value)}
            renderInput={(params) => (
                <TextField
                    error={touched && invalid}
                    helperText={touched && error}
                    {...params}
                    name={name}
                    label={label}
                    placeholder={label}
                    variant="outlined"
                    inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password', // disable autocomplete and autofill
                    }}
                />
            )}
        />
    );
};

function SignUp() {
    const classes = useStyles();

    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        code: 'None',
        refcode: '',
        showLoader: false,
    });

    const checkRefCode = () => {
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            setState({
                ...state,
                ['showLoader']: true,
            });

            //make api call here
        }, 3000);
    };

    const handleChange = (event) => {
        const name = event.target.name;

        setState({
            ...state,
            [name]: event.target.value.toString(),
        });
    };

    const fields = [
        {
            name: 'firstName',
            label: 'First Name',
            type: 'text',
            autoComplete: 'fname',
            fullWidth: false,
        },
        {
            name: 'lastName',
            label: 'Last Name',
            type: 'text',
            autoComplete: 'lname',
            fullWidth: false,
        },
        {
            name: 'email',
            label: 'Email',
            type: 'text',
            autoComplete: 'email',
            fullWidth: true,
        },
        {
            name: 'password',
            label: 'Password',
            type: 'text',
            autoComplete: 'current-password',
            fullWidth: true,
        },
        {
            name: 'confirmPassword',
            label: 'Confirm Password',
            type: 'text',
            autoComplete: 'current-password',
            fullWidth: true,
        },
        {
            name: 'phoneCode',
            label: 'Code',
            type: 'text',
            autoComplete: '',
            fullWidth: true,
            phoneCode: true,
        },
        {
            name: 'phone',
            label: 'Phone',
            type: 'tel',
            autoComplete: 'phone',
            fullWidth: true,
        },
        {
            name: 'refCode',
            label: 'Referral Code',
            type: 'text',
            autoComplete: '',
            fullWidth: true,
            checkRefCode: checkRefCode,
            inputProps: {
                endAdornment: (
                    <InputAdornment>
                        <Box display={state.showLoader ? 'block' : 'none'}>
                            <CircularProgress size={32} />
                        </Box>
                    </InputAdornment>
                ),
            },
        },
    ];

    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon color="primary" />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Create An Account
                </Typography>
                <form className={classes.form}>
                    <Grid container spacing={2}>
                        {fields.map((field) => (
                            <Grid item xs={12} sm={field.fullWidth ? 12 : 6}>
                                <Field
                                    name={field.name}
                                    label={field.label}
                                    type={field.type}
                                    autoComplete={field.autoComplete}
                                    optionClass={classes.option}
                                    onKeyUp={field.checkRefCode}
                                    InputProps={field.inputProps}
                                    component={field.phoneCode ? renderDropdown : renderTextField}
                                />
                            </Grid>
                        ))}

                        {/* <Grid item xs={12}>
                            <Autocomplete
                                id="country-select-demo"
                                options={countries}
                                size="small"
                                name="code"
                                classes={{
                                    option: classes.option,
                                }}
                                autoHighlight
                                getOptionLabel={(option) => `(${option.code}) +${option.phone}`}
                                renderOption={(option) => (
                                    <React.Fragment>
                                        <span>{countryToFlag(option.code)}</span>
                                        {option.label} ({option.code}) +{option.phone}
                                    </React.Fragment>
                                )}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        name="code"
                                        label="Code"
                                        variant="outlined"
                                        inputProps={{
                                            ...params.inputProps,
                                            autoComplete: 'new-password', // disable autocomplete and autofill
                                        }}
                                    />
                                )}
                            />
                        </Grid> */}
                    </Grid>

                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        Sign Up
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link href="/login" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={5} className={classes.boxSize}>
                <Copyright />
            </Box>
        </Container>
    );
}

export default reduxForm({
    form: 'RegistrationForm', // a unique identifier for this form
    validate,
})(SignUp);
