import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    cardHeader: {
        backgroundColor: theme.palette.grey[300],
    },
    cardSubHeader: {
        paddingTop: theme.spacing(2),
    },
    cardRoot: {
        display: 'flex',
        flexDirection: 'column',
    },
    cardAction: {
        marginTop: 'auto',
    },
}));

export default function Plan({ data, onButtonClick, position }) {
    const classes = useStyles();
    const subHeaderText = (n) => {
        switch (n) {
            case 0:
                return 'Economical';
            case 1:
                return 'Most Popular';
            default:
                return 'Great Value';
        }
    };
    return (
        <Card style={{ height: '100%' }} className={classes.cardRoot}>
            <CardHeader
                title={data.name}
                subheader={data.price === '0' ? 'Free' : `Rs. ${data.price}`}
                titleTypographyProps={{ align: 'center' }}
                subheaderTypographyProps={{ align: 'center' }}
                className={classes.cardHeader}
                classes={{
                    root: {
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                    },
                }}
            />
            <CardContent>
                <Grid
                    container
                    spacing={3}
                    direction="column"
                    justify="center"
                    alignItems="stretch"
                    className={classes.cardSubHeader}
                >
                    <Grid item>
                        <Grid container spacing={4} justify="center" alignItems="baseline">
                            <Typography component="h5" variant="h5" color="textPrimary">
                                {data.profitRange.start}% - {data.profitRange.end}%
                            </Typography>
                            &nbsp;
                            <Typography variant="h6" color="textSecondary">
                                /mo
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <List>
                            {data.description.map((item) => (
                                <ListItem divider fullWidth>
                                    <ListItemText primary={item} align="center" />
                                </ListItem>
                            ))}
                        </List>
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions className={classes.cardAction}>
                <Button fullWidth variant="contained" color="primary" onClick={(e) => onButtonClick(e, data)}>
                    Get Started
                </Button>
            </CardActions>
        </Card>
    );
}
