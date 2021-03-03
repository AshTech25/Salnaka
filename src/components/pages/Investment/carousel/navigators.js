import React from 'react';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';

import StopRoundedIcon from '@material-ui/icons/StopRounded';

export function ArrowNext(props) {
    const { onClick } = props;
    return (
        <Hidden smDown>
            <IconButton
                color="primary"
                aria-label="next"
                onClick={onClick}
                style={{ zIndex: 1, position: 'absolute', top: '45%', right: '4%' }}
            >
                <NavigateNextIcon fontSize="large" />
            </IconButton>
        </Hidden>
    );
}

export function ArrowPrev(props) {
    const { onClick } = props;
    return (
        <Hidden smDown>
            <IconButton
                color="primary"
                aria-label="previous"
                onClick={onClick}
                style={{ zIndex: 1, position: 'absolute', top: '45%', left: '4%' }}
            >
                <NavigateBeforeIcon fontSize="large" />
            </IconButton>
        </Hidden>
    );
}

export function Dot() {
    return (
        // <IconButton>
        <StopRoundedIcon color="primary" />
        // </IconButton>
    );
}
