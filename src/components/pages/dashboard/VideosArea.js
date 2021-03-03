import React, { useState } from 'react';
import clsx from 'clsx';

import PropTypes from 'prop-types';
import {
   Typography,
   makeStyles
} from '@material-ui/core';



const useStyles = makeStyles(() => ({
    root: {
      height:'70vh'
    },

}));

const VideosArea = ({ className, ...rest }) => {
    const classes = useStyles();


    return (
        <Typography color="textSecondary" align="center" variant="h4" display="block" className={classes.root}>
        <br/><br/><br/><br/>
          NO VIDEOS TO SHOW
        </Typography>
    );
};

VideosArea.propTypes = {
    className: PropTypes.string,
};

export default VideosArea;
