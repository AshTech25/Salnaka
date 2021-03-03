import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Image from '../../../images/auth_bg.jpg';
import LoginFormCard from './LoginFormCard';

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundImage: `url(${Image})`,
        position: 'relative',
        height: '100vh',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
}));

export default function Registration() {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <LoginFormCard />
        </div>
    );
}
