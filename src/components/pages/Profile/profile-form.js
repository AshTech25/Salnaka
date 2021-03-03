import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { Autocomplete } from '@material-ui/lab';
import PersonOutline from '@material-ui/icons/PersonOutline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import countries from '../Login_Registration/DialCodes';
import { CircularProgress, InputAdornment } from '@material-ui/core';
import { Field, reduxForm } from 'redux-form';
import asyncValidate from '../Login_Registration/validation';
import DropZoneComponent from '../../common/dropzone'
import PropTypes, { object } from 'prop-types';


import { Link as RouterLink } from 'react-router-dom';


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
    const requiredFields = ['firstName', 'lastName','nicNumber', 'phoneCode', 'phone','backName','accountHolderName','accountNumber'];
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

const renderTextField = ({ label, input,readOnly=false, meta: { touched, invalid, error, asyncValidating }, ...custom }) => (
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
        InputProps={{readOnly:readOnly}}
    />
);

const renderDropZone = ({ label, input,placeholder,accept,maxFiles, meta: { touched, invalid, error, asyncValidating }, ...custom }) => (
    <DropZoneComponent 
        placeholder={placeholder} 
        accept={accept} 
        maxFiles={maxFiles} 
        handleChange={files => input.onChange(files)}
        selectedFiles={input.value}/>
);

const renderDropdown = ({ label, input, name, optionClass, meta: { touched, invalid, error }, ...custom }) => {
    const getSelectedOption = () => {
        // console.log("input value--",input.value)
        let value = input.value;
        let selected="";
        if(input.value && typeof input.value === "object"){
            value = `(${input.value.code}) +${input.value.phone}`;
            selected = countries.find((option) => `(${option.code}) +${option.phone}` === value);
        }else{
            selected = countries.find((option) => `+${option.phone}` === value);
        }

        return selected ?  selected: "";
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

function ProfileForm(props) {
    const classes = useStyles();

    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        fatherName:'',
        alternatePhone:'',
        idCardImages:[],
        address:'',
        bankName:'',
        accountHolderName:'',
        accountNumber:'',
        code: 'None',
        showLoader: false,
    });

    const { invalid,pristine, submitting } = props;
    
    const handleChange = (event) => {
        const name = event.target.name;

        setState({
            ...state,
            [name]: event.target.value.toString(),
        });
    };

    const submit = (e) => {
        e.preventDefault();        
        console.log(state)
    }

    const profileFields = [
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
            readOnly:true
        },
        {
            name: 'fathersName',
            label: 'Father Name',
            type: 'text',
            autoComplete: 'fathername',
            fullWidth: true,
        },
        {
            name: 'phoneCode',
            label: 'Code',
            type: 'text',
            autoComplete: '',
            fullWidth: false,
            phoneCode: true,
        },
        {
            name: 'phone',
            label: 'Phone',
            type: 'tel',
            autoComplete: 'phone',
            fullWidth: false,
        },
        {
            name: 'nicImages',
            label: 'NIC Images',
            type: 'image',
            autoComplete: '',
            dropzone:true,
            placeholder:"Drag ID card front & back image here, or click to select images",
            accept:'image/jpeg,image/png',
            maxFiles:2,
            fullWidth: true
        },
        {
            name: 'address',
            label: 'Address',
            type: 'text',
            autoComplete: 'address',
            fullWidth: true,
            multiline:true,
            rows:4
        },
    ];

    const accountFields = [
        {
            name: 'bankName',
            label: 'Bank Name',
            type: 'text',
            autoComplete: 'bName',
            fullWidth: true,
        },
        {
            name: 'accountHolderName',
            label: 'Account Holder Name',
            type: 'text',
            autoComplete: 'aTitle',
            fullWidth: true,
        },
        {
            name: 'accountNumber',
            label: 'Account #',
            type: 'number',
            autoComplete: 'accNo',
            fullWidth: true,
        },
        {
            name: 'nicNumber',
            label: 'NIC #',
            type: 'number',
            autoComplete: 'nic',
            fullWidth: true,
        },
    ];
    return (
        <Container component="main" maxWidth="lg">
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <PersonOutline color="primary" />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Profile
                </Typography>
                {/* <form onSubmit={props.onSubmit} className={classes.form}> */}
                <form onSubmit={(e) => props.onSubmit(e)} className={classes.form}>
                    <Typography component="h5" variant="body1" style={{marginBottom:'10px'}}>
                        Personal Info
                    </Typography>
                    <Grid container spacing={2}>
                        {profileFields.map(({name,label,type,autoComplete,inputProps,phoneCode,dropzone,fullWidth,...remaining},ind) => (
                            <Grid key={ind} item xs={12} sm={fullWidth ? 12 : 6} md={fullWidth ? 6 : 3}>
                                <Field
                                    name={name}
                                    label={label}
                                    type={type}
                                    autoComplete={autoComplete}
                                    optionClass={classes.option}
                                    InputProps={inputProps}
                                    component={phoneCode ? renderDropdown : dropzone ?  renderDropZone: renderTextField}
                                    {...remaining}
                                />
                            </Grid>
                        ))}
                    </Grid>

                    <Typography component="h5" variant="body1" style={{marginTop:'10px',marginBottom:'10px'}}>
                        Account Info
                    </Typography>
                    <Grid container spacing={2}>
                        {accountFields.map(({name,label,type,autoComplete,inputProps,phoneCode,fullWidth,...remaining},ind) => (
                            <Grid key={ind} item xs={12} sm={fullWidth ? 12 : 6} md={fullWidth ? 6 : 3}>
                                <Field
                                    name={name}
                                    label={label}
                                    type={type}
                                    autoComplete={autoComplete}
                                    optionClass={classes.option}
                                    InputProps={inputProps}
                                    component={phoneCode ? renderDropdown : renderTextField}
                                    {...remaining}
                                />
                            </Grid>
                        ))}
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={6}>
                            <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} disabled={invalid || submitting}>
                                Update
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <Button fullWidth variant="contained" color="default" className={classes.submit} component={RouterLink} to="/dashboard">
                                Back
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}


ProfileForm.propTypes = {
    initialValues: PropTypes.object,
    onSubmit: PropTypes.func.isRequired,
};

// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
ProfileForm = reduxForm({
    form: 'ProfileForm', // a unique identifier for this form
    validate,
    asyncValidate
  })(ProfileForm);

  function mapStateToProps(state) {
    let data,customData={};  
    if(state.LoginUser.user){
        data =  state.LoginUser.user; 
        customData = {...data,...data.accountInfo}
        return {
            initialValues: customData,   // pull initial values from account reducer
        };
    }
}
  
  // You have to connect() to any reducers that you wish to connect to yourself
  ProfileForm = connect(
    mapStateToProps,
    null, // bind account loading action creator
  )(ProfileForm);
  

export default ProfileForm;
// export default reduxForm({
//     form: 'ProfileForm', // a unique identifier for this form
//     validate,
//     asyncValidate
// })(ProfileForm);
