import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './carousel.css';
import { ArrowNext, ArrowPrev, Dot } from './navigators';

import Slide01 from '../../../../images/investment-slider01.jpg';
import Slide02 from '../../../../images/investment-slider02.jpg';

const useStyles = makeStyles((theme) => ({
    slider01: {
        height: '100%',
        background: `url(${Slide01}) no-repeat center center/cover`,
        opacity: 0.8,
        color: theme.palette.getContrastText('#000'),
    },
    slider02: {
        height: '100%',
        background: `url(${Slide02}) no-repeat center center/cover`,
        opacity: 0.8,
        color: theme.palette.getContrastText('#000'),
    },
    darkOverlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        top: '0',
        left: '0',
        width: '100%',
        minHeight: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`,
    },
    dots: {
        position: 'absolute',
        bottom: '3%',
    },
    cover: {
        minHeight: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`,
    },
}));

export default function Carousel() {
    const classes = useStyles();
    const settings = {
        customPaging: (i) => {
            return (
                <a>
                    <Dot />
                </a>
            );
        },
        dots: true,
        dotsClass: `slick-dots slick-thumb ${classes.dots}`,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        nextArrow: <ArrowNext />,
        prevArrow: <ArrowPrev />,
    };

    return (
        <Slider {...settings}>
            <div className={classes.slider01}>
                <Grid container justify="center" alignItems="center" direction="column" className={classes.darkOverlay}>
                    <Grid item xs={10} sm={8}>
                        <Grid container spacing={2} justify="center" alignItems="center">
                            <Grid item xs={12}>
                                <Typography variant="h4" component="h1">
                                    WELCOME TO SALNAKA
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h6" component="p">
                                    Now Salnaka.com is a platform where you can find multiple opportunities.
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Button href="/register" variant="contained" color="primary" size="large">
                                    Register Now
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
            <div className={classes.slider02}>
                <Grid container justify="center" alignItems="center" direction="column" className={classes.darkOverlay}>
                    <Grid item xs={10} sm={8}>
                        <Grid container spacing={2} justify="center" alignItems="center">
                            <Grid item xs={12}>
                                <Typography variant="h4" component="h1">
                                    HIGH INCOME WITH LOW INVESTMENT RISK
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h6" component="p">
                                    A simple and affordable way to increase your wealth by investing a small sum of
                                    money with our earning program. Profit is based on Add working. Total Profit of
                                    working calculated on a daily basis and profits will be paid out at the end of the
                                    Month.
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Button variant="contained" color="primary" size="large">
                                    Register Now
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </Slider>
    );
}
