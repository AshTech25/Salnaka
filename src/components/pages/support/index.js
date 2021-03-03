import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        paddingTop: theme.mixins.toolbar.minHeight,
        paddingBottom: theme.mixins.toolbar.minHeight,
    },
    paper: {
        paddingRight: theme.spacing(2),
        paddingLeft: theme.spacing(2),
        paddingBottom: theme.spacing(2),
    },
}));

export default function Support() {
    const classes = useStyles();
    return (
        <Grid container justify="center" alignItems="center" direction="column" className={classes.root} spacing={0}>
            <Grid item xs={11} sm={10} md={8} lg={6}>
                <Paper elevation={3} className={classes.paper}>
                    <Grid container spacing={3} justify="center" alignItems="center">
                        <Grid item xs={11}>
                            <Typography variant="h4" component="h1" gutterBottom align="center">
                                Support
                            </Typography>

                            <Typography variant="body1" component="p" gutterBottom>
                                Support will fix and resolve all your issues as quickly as possible within 24 hours. We
                                value your positive as well as negative feedback. Listening to and guiding our clients,
                                never leaving any issue unresolved and putting out the fire before it starts covering
                                you, are our main motives in this department.
                            </Typography>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                variant="outlined"
                                size="small"
                                id="firstName"
                                name="firstName"
                                label="First name"
                                fullWidth
                                autoComplete="given-name"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                variant="outlined"
                                size="small"
                                id="lastName"
                                name="lastName"
                                label="Last name"
                                fullWidth
                                autoComplete="family-name"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                variant="outlined"
                                size="small"
                                id="Email"
                                name="Email"
                                label="Email"
                                fullWidth
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                size="small"
                                id="phoneNumber"
                                name="phoneNumber"
                                label="Phone Number"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                variant="outlined"
                                size="small"
                                id="subject"
                                name="subject"
                                label="Subject"
                                fullWidth
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                required
                                id="message"
                                name="message"
                                label="Message"
                                fullWidth
                                variant="outlined"
                                multiline={true}
                                rows={5}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" color="primary" size="large" endIcon={<SendIcon />}>
                                Send
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    );
}
