import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// @material-ui/icons

import VerifiedUser from '@material-ui/icons/VerifiedUser';
import Fingerprint from '@material-ui/icons/Fingerprint';
// core components
import GridContainer from '../../../../coreComponents/Grid/GridContainer';
import GridItem from '../../../../coreComponents/Grid/GridItem.js';

import PaymentCard from './PaymentIconCard';
import styles from '../../../../utils/PaymentType';
import bcoin1 from '../../../../images/bcoin1.png';
import easyPaisa from '../../../../images/easyPaisa.png';
import jazzcash from '../../../../images/jacash.png';
import skrill from '../../../../images/skrilll.jpg';
import bank from '../../../../images/bank.jpg';
import perfectMoney from '../../../../images/perfectMoney.png';


const useStyles = makeStyles(styles);

export default function ProductSection() {
    const classes = useStyles();
    return (
        <div className={classes.section}>
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8}>
                    <h2 className={classes.title}>We Accept These Payment Methods</h2>
                    <h5 className={classes.description}>
                        Put your investing ideas into action with full range of investments. Enjoy real benefits and
                        rewards on your accrue investing
                    </h5>
                </GridItem>
            </GridContainer>
            <div>
                <GridContainer>
                    <GridItem xs={12} sm={6} md={4}>
                        <PaymentCard img={bcoin1} text={'Bitcoin'} />
                    </GridItem>
                    <GridItem xs={12} sm={6} md={4}>
                        <PaymentCard img={easyPaisa} text={'Easy Paisa'} />
                    </GridItem>
                    <GridItem xs={12} sm={6} md={4}>
                        <PaymentCard img={jazzcash} text={'Jazz Cash'} />
                    </GridItem>
                    <GridItem xs={12} sm={6} md={4}>
                        <PaymentCard img={skrill} text={'Skrill'} />
                    </GridItem>
                    <GridItem xs={12} sm={6} md={4}>
                        <PaymentCard img={perfectMoney} text={'Perfect Money'} />
                    </GridItem>
                    <GridItem xs={12} sm={6} md={4}>
                        <PaymentCard img={bank} text={'Bank'} />
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    );
}
