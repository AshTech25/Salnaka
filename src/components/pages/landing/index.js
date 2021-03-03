import React, { Component, useState, Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Carousel from './carousel/carousel';
import Feature from './feature';
import Projects from './projects';

import { features } from './content';
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
            <section className={classes.section}>
                <Grid container justify="center" alignItems="center" direction="column" style={{ minHeight: '100vh' }}>
                    <Grid item xs={11}>
                        <Grid container spacing={4} direction="column" justify="center" alignItems="center">
                            <Grid item xs={12}>
                                <Grid container spacing={1} justify="center" alignItems="center">
                                    <Grid item xs={12} md={8}>
                                        <Typography variant="h4" component="h1" gutterBottom align="center">
                                            Why We Are The Best?
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} md={8}>
                                        <Typography variant="h6" component="p" gutterBottom align="center">
                                            Anyone can make investments using our website. The interface is so easy to
                                            use that even someone with zero experience can figure it out. In addition,
                                            our experts are available online 24/7 and are always ready to help. Trust
                                            management with Salnaka.com.
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} md={10}>
                                <Grid container spacing={3} justify="center" alignItems="center">
                                    {features.map((feature) => (
                                        <Grid item xs={12} md={4}>
                                            <Feature
                                                id={feature.id}
                                                title={feature.title}
                                                color={feature.color}
                                                invert={feature.invert}
                                                desc={feature.desc}
                                            />
                                        </Grid>
                                    ))}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </section>
            <section className={classes.projectsBackground}>
                <div className={classes.darkOverlay}>
                    <Grid
                        container
                        justify="center"
                        alignItems="center"
                        direction="column"
                        style={{ minHeight: '100vh' }}
                    >
                        <Grid item xs={11}>
                            <Grid container spacing={4} direction="column" justify="center" alignItems="center">
                                <Grid item xs={12} style={{ color: '#fff' }}>
                                    <Grid container spacing={1} justify="center" alignItems="center">
                                        <Grid item xs={12} md={8}>
                                            <Typography variant="h4" component="h1" gutterBottom align="center">
                                                Upcomming Projects
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} md={8}>
                                            <Typography variant="h6" component="p" gutterBottom align="center">
                                                Our website is full of features, the most recent and innovative
                                                offerings will inspire you just as much as our working styles.
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} md={10}>
                                    <Projects />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </section>
        </Fragment>
    );
}
