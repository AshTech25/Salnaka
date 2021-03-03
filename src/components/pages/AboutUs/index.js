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
        minHeight: `calc(50vh - ${theme.mixins.toolbar.minHeight}px)`,
        background: `url(${ProjectsBackground}) no-repeat center center/cover`,
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.getContrastText(theme.palette.secondary.main),
    },
    firstSectionBackground: {
        position: 'absolute',
        width: '100%',
        height: `100%`,
        background: `url(${ProjectsBackground}) no-repeat center center/cover`,
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.getContrastText(theme.palette.secondary.main),
        filter: 'blur(4px)',
        webkitFilter: ' blur(4px)',
        zIndex: 0,
    },
    firstSectionContainer: {
        zIndex: 1,
        position: 'relative',
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        minHeight: `calc(50vh - ${theme.mixins.toolbar.minHeight}px)`,
    },
    firstSectionContent: {
        backgroundColor: 'rgb(0,0,0)' /* Fallback color */,
        backgroundColor: 'rgba(0,0,0, 0.4)',
        border: '3px solid #f1f1f1',
        padding: theme.spacing(1),
    },
    center: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
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
                <div className={classes.firstSectionBackground} />

                <Grid
                    container
                    alignContent="center"
                    alignItems="center"
                    justify="center"
                    className={classes.firstSectionContainer}
                >
                    <Grid item xs={10} md={10} lg={6} className={classes.firstSectionContent}>
                        <Typography align="center" variant="h2" gutterBottom>
                            Our Story
                        </Typography>

                        <Typography align="center" variant="body1">
                            We at salnaka have one goal, <em>prosperity</em>. We like to see our clients, partners and
                            friends acheive their goals and dreams and in doing so create a better society for everyone
                            to live in.
                        </Typography>
                    </Grid>
                </Grid>
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
