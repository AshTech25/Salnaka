import React from 'react';
// nodejs library that concatenates classes
import classnames from 'classnames';

import { makeStyles } from '@material-ui/core/styles';
import GridContainer from '../../../coreComponents/Grid/GridContainer';
import GridItem from '../../../coreComponents/Grid/GridItem';
import Parallax from '../../../coreComponents/Parallex/Parallex';
import styles from '../../../utils/LandingPage';
import PaymentType from './sections/PaymentType';


const useStyles = makeStyles(styles);

export default function LandingPage(props) {
    const classes = useStyles();
    const { ...rest } = props;
    return (
        <div style={{marginBottom:"30px"}}>
            <Parallax filter image={require('../../../images/payment.png')}>
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={6}>
                            <h1 className={classes.title}>Payment Methods</h1>
                            <h4 className={classes.subText}>
                                If you have never set up any payment plans before, nothing is to be worried about. Yeah!
                                We have added some well reputed and trusted payment methods for you. You can opt any of
                                the method striking to you from the wide range we have provided.
                            </h4>
                            <br />
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>
            <div className={classnames(classes.main , classes.mainRaised)}>
                <div className={classes.container}>
                    <PaymentType />
                </div>
            </div>
        </div>
    );
}
