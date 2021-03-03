import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
// import { blue, , red } from '@material-ui/core/colors';
import { Typography, Grid, Link, IconButton } from '@material-ui/core';
import { Facebook, YouTube, Instagram, Twitter } from '@material-ui/icons';
// import { FaFacebookF } from 'react-icons/fa';
import footerBackground from '../../images/footer-bg.jpg';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    bg: {
        background: `url(${footerBackground})`,
    },
    root: {
        color: theme.palette.getContrastText(theme.palette.grey[900]),
        // background: theme.palette.grey[900],
        padding: `${theme.spacing(4)}px ${theme.spacing(2)}px calc(${theme.spacing(1)} / 2)px ${theme.spacing(2)}px`,
    },

    root_no_padding: {
        color: theme.palette.getContrastText(theme.palette.grey[900]),
        // background: theme.palette.grey[900],
    },

    pd_1: {
        padding: `${theme.spacing(1)}px ${theme.spacing(2)}px ${theme.spacing(1)}px ${theme.spacing(2)}px`,
    },

    pd_y_1: {
        padding: `${theme.spacing(1)}px 0px `,
    },
    pd_x_1: {
        padding: `0px ${theme.spacing(1)}px `,
    },

    pd_top_2: {
        paddingTop: theme.spacing(2),
    },

    pd_bottom_1: {
        paddingBottom: theme.spacing(1),
    },

    pd_bottom_2: {
        paddingBottom: theme.spacing(2),
    },

    // fb: {
    //     color: theme.palette.common.white,
    //     backgroundColor: blue[500],
    //     '&:hover': {
    //         backgroundColor: blue[600],
    //     },
    // },

    // twitter: {
    //     color: theme.palette.common.white,
    //     backgroundColor: blue[300],
    //     '&:hover': {
    //         backgroundColor: blue[400],
    //     },
    // },

    // instagram: {
    //     color: theme.palette.common.white,
    //     background:
    //         'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)',
    //     '&:hover': {
    //         background:
    //             'radial-gradient(circle at 30% 107%, #fcef6f 0%, #fcef6f 5%, #fc3b28 45%, #c0208f 60%, #1549e2 90%)',
    //     },
    // },

    // youtube: {
    //     color: theme.palette.common.white,
    //     backgroundColor: red[600],
    //     '&:hover': {
    //         backgroundColor: red[700],
    //     },
    // },
}));

const footerData = [
    { text: 'Investment Plan', path: '/invest' },
    { text: 'Tutor Academy', path: '/tutor-service' },
    { text: 'About Us', path: '/' },
    { text: 'Support', path: '/support' },
    // { text: 'FAQs', path: '/terms-of-service' },
    { text: 'Privacy Policy', path: '/privacy-policy' },
    { text: 'Terms of Service', path: '/terms-of-service' },
    { text: 'KYC Policy', path: '/KYC' },
    { text: 'AML Policy', path: '/AML' },
];

const socialData = [
    { name: 'Facebook', link: '/', icon: <Facebook /> },
    { name: 'Twitter', link: '/', icon: <Twitter /> },
    { name: 'Instagram', link: '/', icon: <Instagram /> },
    { name: 'Youtube', link: '/', icon: <YouTube /> },
];

function social() {}

function Footer() {
    const classes = useStyles();
    const history = useHistory();

    const handleClick = (event, path) => {
        event.preventDefault();
        if (path) history.push(path);
    };

    return (
        <div className={clsx(classes.bg, classes.pd_bottom_1)}>
            <Grid container className={classes.root} justify="center" alignItems="center" spacing={0}>
                {/* <Grid xs={10} item container justify="center" spacing={2}>
                {socialData.map((item) => (
                    <Grid item>
                        <Fab size="small" color="inherit" aria-label={item.name} className={item.class}>
                            {item.icon}
                        </Fab>
                    </Grid>
                ))}
            </Grid> */}
                <Grid item xs={10} container justify="center" spacing={2} className={classes.pd_top_2}>
                    {socialData.map((item) => (
                        <Grid item>{/* <IconButton color="inherit" fontSize="small">{item.icon}</IconButton> */}</Grid>
                    ))}
                </Grid>

                <Grid item container justify="center" spacing={0}>
                    {footerData.map((item) => (
                        <Grid item>
                            <Typography align="center" className={clsx(classes.pd_1, classes.pd_bottom_2)}>
                                <Link
                                    color="inherit"
                                    align="center"
                                    onClick={(e) => handleClick(e, item.path)}
                                    href={item.path}
                                >
                                    {item.text}
                                </Link>
                            </Typography>
                        </Grid>
                    ))}
                </Grid>
            </Grid>

            <Grid
                container
                justify="center"
                spacing={0}
                className={clsx(classes.root_no_padding, classes.pd_x_1)}
                gutterBottom
            >
                <Grid item>
                    <Typography align="center">
                        <Link color="inherit" align="center" onClick={handleClick} href={'#'}>
                            Copyright © Salnaka. All Rights Reserved
                        </Link>
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
}

export default Footer;
