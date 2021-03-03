import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Avatar, Card, CardContent, Grid, Typography, makeStyles, colors } from '@material-ui/core';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

const useStyles = makeStyles(() => ({
    root: {
        height: '100%',
    },
    avatar: {
        backgroundColor: colors.indigo[600],
        height: 56,
        width: 56,
    },
}));

const MonthlyEarnings = ({ className, text, money, icon, extraIcon, ...rest }) => {
    const classes = useStyles();

    return (
        <Card className={clsx(classes.root, className)} {...rest}>
            <CardContent>
                <Grid container justify="space-between" spacing={3}>
                    <Grid item>
                        <Typography color="textSecondary" gutterBottom variant="h6">
                            {text}
                        </Typography>
                        <Typography color="textPrimary" variant="h5">
                            {money}&nbsp;{extraIcon}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Avatar className={classes.avatar}>{icon}</Avatar>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

MonthlyEarnings.propTypes = {
    className: PropTypes.string,
};

export default MonthlyEarnings;
