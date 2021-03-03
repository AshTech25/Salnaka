import React from 'react';
import { Button } from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles'
import {grey, purple} from '@material-ui/core/colors'

const ColorButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(theme.palette.primary.main),
    },
}))(Button);

export default ColorButton;
