import React, { Component, useState, Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Carousel from './carousel/carousel';
import InvestmentPlans from './InvestmentPlans';

import ProjectsBackground from '../../../images/background.jpg';

const useStyles = makeStyles((theme) => ({
    section: {
        position: 'relative',
        minHeight: '100vh',
        padding: '35px 0',
    },
    firstSection: {
        position: 'relative',
        height: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`,
    },
    projectsBackground: {
        minHeight: '100vh',
        background: `url(${ProjectsBackground}) no-repeat center center/cover`,
        opacity: 0.8,
    },
    darkOverlay: {
        padding: '35px 0',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        width: '100%',
        height: '100%',
    },
}));

export default function LandingPage() {
    const classes = useStyles();
    return (
        <Fragment>
            <section className={classes.firstSection}>
                <Carousel />
            </section>
            <section className={classes.projectsBackground}>
                <div className={classes.darkOverlay}>
                    {/* <Grid
                        container
                        justify="center"
                        alignItems="center"
                        direction="column"
                        style={{ minHeight: '100vh' }}
                    >
                        <Grid item xs={11}>
                            <Grid container spacing={4} direction="column" justify="center" alignItems="center">
                                <Grid item xs={12} style={{ color: '#fff' }}>
                                    <Typography variant="h4" component="h1" gutterBottom align="center">
                                        Choose your desire Plan to invest
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={10}>
                                    <Grid container spacing={3} justify="center" alignItems="center">
                                        <Grid item xs={12} md={3}>
                                            <Plan />
                                        </Grid>
                                        <Grid item xs={12} md={3}>
                                            <Plan />
                                        </Grid>
                                        <Grid item xs={12} md={3}>
                                            <Plan />
                                        </Grid>
                                        <Grid item xs={12} md={3}>
                                            <Plan />
                                        </Grid>
                                        <Grid item xs={12} md={3}>
                                            <Plan />
                                        </Grid>
                                        <Grid item xs={12} md={3}>
                                            <Plan />
                                        </Grid>
                                        <Grid item xs={12} md={3}>
                                            <Plan />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                 */}
                    <InvestmentPlans />
                </div>
            </section>
        </Fragment>
    );
}
