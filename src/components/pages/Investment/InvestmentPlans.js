import React, { Component, useState, useEffect, Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ProjectsBackground from '../../../images/background.jpg';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import axios from 'axios';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import Plan from '../../common/plan';

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
    cardHeader: {
        backgroundColor: theme.palette.grey[300],
    },
}));

const PackageSelection = () => {
    const classes = useStyles();
    const [packages, setPackages] = useState([]);
    const history = useHistory();
    const handlePackageClick = () => {
        history.push('/register');
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        let mounted = true;
        const getResponse = async () => {
            const res = await axios.get(`${process.env.REACT_APP_AXIOS_BASE_URL}/public/packages`);
            const pkg = res.data.success.packages;
            setPackages(pkg.sort((a, b) => a.profitRate - b.profitRate));
        };
        const fetchData = async () => {
            try {
                if (mounted) {
                    getResponse();
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();

        return () => {
            mounted = false;
        };
    }, []);

    return (
        <Fragment>
            <section className={classes.projectsBackground}>
                <div className={classes.darkOverlay}>
                    <Grid
                        container
                        justify="center"
                        alignItems="stretch"
                        spacing={2}
                        style={{ minHeight: '100vh', maxWidth: '100vw', overflow: 'hidden', paddingLeft: '8px' }}
                    >
                        <Grid item xs={11} style={{ color: '#fff' }}>
                            <Typography variant="h4" component="h1" gutterBottom align="center">
                                Choose your desire Plan to invest
                            </Typography>
                        </Grid>
                        {packages.length > 0 ? (
                            packages.map((pack, index) => (
                                <Fragment>
                                    <Grid item xs={12} sm={5} md={4} lg={3} key={index}>
                                        <Plan position={index} data={pack} onButtonClick={handlePackageClick} />
                                    </Grid>
                                </Fragment>
                            ))
                        ) : (
                            <Grid item xs={12} style={{ color: '#fff' }}>
                                <Typography variant="h5" component="h1" gutterBottom align="center">
                                    No Packages to Show
                                </Typography>
                            </Grid>
                        )}
                    </Grid>
                </div>
            </section>
        </Fragment>
    );
};

export default PackageSelection;
