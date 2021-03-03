import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import moduleName from '../../common/LoaderFullScreen';

const useStyles = makeStyles((theme) => ({
    section: {
        position: 'relative',
        height: '100vh',
    },
    centerY: {
        position: 'absolute',
        top: '50%',
        // left: '50%',
        transform: 'translateY(-50%)',
        color: theme.palette.getContrastText('#fff'),
    },
    firstSection: {
        position: 'relative',
        height: '100vh',
        height: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`,
    },
}));

const navItems = ['Services', 'About Us', 'Support', 'FAQs'];

export default function TutorServicePage() {
    const classes = useStyles();
    return (
        <div>
            <section className={classes.firstSection}>
                <Grid container justify="center" alignContent="center" alignItems="center" className={classes.centerY}>
                    <Grid item>
                        <Typography variant="h4">Coming soon...</Typography>
                    </Grid>
                </Grid>
            </section>
        </div>
    );
}
