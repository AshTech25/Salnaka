import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import ReactLoader from 'react-loader-spinner';

function Loader(props) {
    const theme = useTheme();
    return (
        <div className={props.className}>
            <ReactLoader type="Rings" color={theme.palette.primary.main} active />
        </div>
    );
}

export default Loader;
