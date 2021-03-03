import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import { IconButton, Hidden } from '@material-ui/core';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import CarousselImage1 from '../../images/caroussel-1.jpg'
import CarousselImage2 from '../../images/caroussel-2.png'
import CarousselImage3 from '../../images/caroussel-3.jpg'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
    {
        label: 'San Francisco – Oakland Bay Bridge, United States',
        imgPath: CarousselImage1,
    },
    {
        label: 'Bird',
        imgPath: CarousselImage2,
    },
    {
        label: 'Bali, Indonesia',
        imgPath: CarousselImage3,
    },

];

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '100vw',
        position: 'relative',
        color: '#FFF',
    },
    carousselBg: {
        height: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`,
        display: 'block',
        overflow: 'hidden',
        width: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    swipableView: {
        zIndex: 100,
    },

    stepper: {
        background: 'transparent',
        zIndex: 200,
        position: 'absolute',
        bottom: theme.spacing(1),
    },
    stepperDot: {
        background: 'rgba(255,255,255,0.7)',
        transform: 'scale(1.1)',
        marginLeft: `calc(${theme.spacing(1)}px /2)`,
        marginRight: `calc(${theme.spacing(1)}px /2)`,
    },
    stepperDotActive: {
        background: theme.palette.primary.main,
    },
    btnPrevious: {
        position: 'absolute',
        top: '50%',
        left: theme.spacing(1),
        transform: 'translateY(-50%)',
    },

    btnNext: {
        position: 'absolute',
        top: '50%',
        right: theme.spacing(1),
        transform: 'translateY(-50%)',
    },
}));

function SwipeableTextMobileStepper() {
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = tutorialSteps.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <div className={classes.root}>
            <AutoPlaySwipeableViews
                className={classes.swipableView}
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {tutorialSteps.map((step, index) =>
                    Math.abs(activeStep - index) <= 2 ? (
                        <div
                            key={step.label}
                            style={{
                                background: `url(${step.imgPath})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                            className={classes.carousselBg}
                        ></div>
                    ) : (
                        <div />
                    ),
                )}
            </AutoPlaySwipeableViews>
            <MobileStepper
                steps={maxSteps}
                variant="dots"
                activeStep={activeStep}
                classes={{ root: classes.stepper, dot: classes.stepperDot, dotActive: classes.stepperDotActive }}
                nextButton={<div />}
                backButton={<div />}
            />
            <Hidden xsDown>
                <IconButton
                    aria-label="previous"
                    color="inherit"
                    onClick={handleBack}
                    disabled={activeStep === 0}
                    className={classes.btnPrevious}
                >
                    {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft fontSize="large" />}
                </IconButton>
            </Hidden>
            <Hidden xsDown>
                <IconButton
                    aria-label="next"
                    color="inherit"
                    onClick={handleNext}
                    disabled={activeStep === maxSteps - 1}
                    className={classes.btnNext}
                >
                    {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight fontSize="large" />}
                </IconButton>
            </Hidden>
        </div>
    );
}

export default SwipeableTextMobileStepper;
