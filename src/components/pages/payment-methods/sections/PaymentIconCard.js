import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles({
    root: {
        maxWidth: '250px',
        boxShadow: 'none',
        margin: 'auto',
    },
    media: {
        height: 70,
        width: 70,
        borderRadius: '40px',
        margin: 'auto',
    },
    type: {
        fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif !important` ,
        fontWeight:'bold',
        color:'#999'
    },
});

export default function MediaCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <Avatar className={classes.media} src={props.img} />
                <CardContent>
                    <Typography className={classes.type} gutterBottom variant="body1" component="h2">
                       {props.text}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
