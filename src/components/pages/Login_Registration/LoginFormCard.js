import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LoginForm from './LoginForm';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        borderRadius: 9,
    },
});

export default function OutlinedCard() {
    const classes = useStyles();

    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '90vh' }}
        >
            <Grid item xs={11} lg={6}>
                <Card className={classes.root} variant="outlined">
                    <CardContent>
                        <LoginForm />
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}
