import React from 'react';
import { Container, Grid, makeStyles } from '@material-ui/core';
import PackagingInfo from './PackagingInfo';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),

  },
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root} maxWidth={false}>
      <Grid container spacing={3}>
        <Grid item lg={4} sm={6} xl={3} xs={12}>
          <PackagingInfo text="Earned Today" money="800" icon={<AttachMoneyIcon />} />
        </Grid>
        <Grid item lg={4} sm={6} xl={3} xs={12}>
          <PackagingInfo text="Monthly Earnings" money="800" icon={<AttachMoneyIcon />} />
        </Grid>
        <Grid item lg={4} sm={6} xl={3} xs={12}>
          <PackagingInfo text="Current Balance" money="800" icon={<AccountBalanceIcon />} />
        </Grid>
     
      </Grid>
    </Container>
  );
};

export default Dashboard;
