import React, { useEffect, useState } from 'react';
import { Container, Grid, makeStyles, IconButton, Button, Typography } from '@material-ui/core';
import MonthlyEarnings from './MonthlyEarnings';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import TimerIcon from '@material-ui/icons/Timer';
import VideosArea from './VideosArea';
import { loadUser } from '../../../actions/LoginUser';
import { connect } from 'react-redux';
import { Redirect, Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import LoaderFullScreen from '../../common/LoaderFullScreen';
import { CheckApprovalDate, CheckAccountInfo } from './helper';
import WithdrawalModal from './withdrawal-modal';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.dark,
        minHeight: '100%',
        paddingBottom: theme.spacing(3),
        paddingTop: theme.spacing(3),
    },
}));

const Dashboard = ({ user: { user, loading }, loadUser }) => {
    const classes = useStyles();
    const [isModalOpen, setOpenModal] = useState(false);
    let packageCheck;
    if (user) {
        var CurrentBalance = user.wallet.currentAmount;
        if (user.package) {
            var PackageType = user.package.name;
            var PackageStatus = user.packageStatus;
            packageCheck = user.package;
        } else {
            loadUser();
        }
    }

    function check() {
        if (!user || loading) {
            return <LoaderFullScreen />;
        } else if (!packageCheck) {
            return <Redirect to="/package-selection" />;
        }
    }

    const handleWithdrawal = () => {
        if (user && CheckAccountInfo(user.accountInfo)) {
            console.log('open modal');
            handleModalOpen();
        } else {
            console.log('not info');
        }
    };

    const handleModalOpen = () => {
        setOpenModal(true);
    };

    const handleModalClose = () => {
        setOpenModal(false);
    };

    console.log('here', user);

    return user && packageCheck && !loading ? (
        <Container className={classes.root} maxWidth={false}>
            <Grid container spacing={3}>
                <Grid item lg={4} sm={6} xl={3} xs={12}>
                    <MonthlyEarnings text="Package Type" money={PackageType} icon={<AddShoppingCartIcon />} />
                </Grid>

                <Grid item lg={4} sm={6} xl={3} xs={12}>
                    <MonthlyEarnings
                        text="Current Balance"
                        money={CurrentBalance ? CurrentBalance.toFixed(2) : 0}
                        icon={<AccountBalanceIcon />}
                        extraIcon={
                            <div style={{ display: 'inline' }}>
                                {!CheckAccountInfo(user.accountInfo) ? (
                                    <>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            size="small"
                                            disabled={CheckApprovalDate(user)}
                                            component={RouterLink}
                                            to="/dashboard/profile"
                                            // onClick={handleWithdrawal}
                                        >
                                            Withdraw
                                        </Button>
                                        <p style={{ color: 'red', marginTop: '5px', fontSize: '12px' }}>
                                            *Please complete profile for withdrawal
                                        </p>
                                    </>
                                ) : (
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        size="small"
                                        disabled={CheckApprovalDate(user)}
                                        // component={RouterLink}
                                        // to="/dashboard/profile"
                                        onClick={handleWithdrawal}
                                    >
                                        Withdraw
                                    </Button>
                                )}
                            </div>
                        }
                    />
                </Grid>
                <Grid item lg={4} sm={6} xl={3} xs={12}>
                    <MonthlyEarnings
                        text="Package Status"
                        money={PackageStatus}
                        icon={<TimerIcon />}
                        extraIcon={
                            PackageStatus === 'Pending' && (
                                <IconButton color="secondary" component={RouterLink} to="/payment-instructions">
                                    <InfoOutlinedIcon />
                                </IconButton>
                            )
                        }
                    />
                </Grid>
                <Grid item lg={12} md={12} xl={10} xs={12}>
                    <VideosArea />
                </Grid>
            </Grid>
            <WithdrawalModal isOpen={isModalOpen} onClose={handleModalClose} maxAmountLimit={CurrentBalance} />
        </Container>
    ) : (
        check()
    );
};

Dashboard.propTypes = {
    loadUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    user: state.LoginUser,
});

export default connect(mapStateToProps, { loadUser })(Dashboard);
