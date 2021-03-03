import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import SecurityIcon from './security.svg';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
    order2: {
        order: 2,
    },
    smOrder2: {
        [theme.breakpoints.down('sm')]: {
            order: 2,
        },
    },
    cardHeight: {
        height: 'calc(280px - 3vw)',
        [theme.breakpoints.down('sm')]: {
            height: 'calc(370px - 25vw)',
        },
    },
    iconCard: {
        width: '80px',
        height: '80px',
        [theme.breakpoints.down('sm')]: {
            width: '70px',
            height: '70px',
        },
    },
    icon: {
        objectFit: 'scale-down',
        transform: 'rotate(-45deg)',
        [theme.breakpoints.down('sm')]: {
            height: '40px',
        },
    },
}));

export default function Feature(props) {
    const { id, title, color, invert, desc } = props;
    const classes = useStyles();
    return (
        <Grid container spacing={4} justify="center" alignItems="center">
            <Grid
                item
                xs={8}
                md={10}
                className={clsx(invert ? classes.order2 : null, id === 2 ? classes.smOrder2 : null)}
            >
                <Card>
                    <CardActionArea className={classes.cardHeight}>
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="h6" align="center">
                                {title}
                            </Typography>
                            <Typography variant="body2" component="p" align="center">
                                {desc}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item className={id === 5 ? classes.smOrder2 : null}>
                <Card style={{ transform: 'rotate(45deg)' }}>
                    <CardActionArea className={classes.iconCard} style={{ backgroundColor: color }}>
                        <CardMedia
                            component="img"
                            src={SecurityIcon}
                            alt={title}
                            height="50"
                            title={title}
                            className={classes.icon}
                        />
                    </CardActionArea>
                </Card>
            </Grid>
        </Grid>
    );
}
