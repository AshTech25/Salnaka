import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, List, ListItem, ListItemText, Button } from '@material-ui/core';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    firstSection: {
        position: 'relative',
        minHeight: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`,
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
    },

    rootGrid: {
        minHeight: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`,
    },

    list: {
        paddingLeft: theme.spacing(4),
    },
    box: {
        display: 'inline-block',
        margin: `${theme.spacing(1)}px auto`,
        padding: theme.spacing(1),
        backgroundColor: '#DDDDDD',
    },
}));

function Instructions() {
    const classes = useStyles();

    return (
        <section className={classes.firstSection}>
            <Grid container className={classes.rootGrid} justify="center" alignContent="center" alignItems="center">
                <Grid item container justify="center" alignContent="center" alignItems="center">
                    <Grid item xs={11} lg={5}>
                        <Typography variant="h4">Payment Instructions</Typography>

                        <Typography variant="body1">
                            To get your Package Approved, follow these 3 simple steps:
                        </Typography>

                        <ol className={classes.list}>
                            <li>
                                <ListItemText>Transfer the required amount to this bank account:</ListItemText>
                                <Typography className={classes.box}>
                                    Bank: Bank Al Habib <br />
                                    Name: Usman Iftikhar <br />
                                    Account #: 10320095016093505 <br />
                                    IBN Account #: PK56BAHL1032009501609350
                                </Typography>
                            </li>
                            <li>
                                <Typography>Take a snap/picture of the transfer receipt</Typography>
                            </li>
                            <li>
                                <Typography>Send the picture of the transfer receipt to</Typography>
                                <Typography className={classes.box}>
                                    Usman Iftikhar
                                    <br />
                                    <WhatsAppIcon fontSize="small" style={{ marginBottom: '-4px' }} /> 03362202200
                                </Typography>
                            </li>
                        </ol>

                        <Button variant="contained" color="primary" component={RouterLink} to="/dashboard">
                            I understand
                        </Button>
                    </Grid>
                    <Grid item xs={0} lg={5}></Grid>
                </Grid>
            </Grid>
        </section>
    );
}

export default Instructions;
