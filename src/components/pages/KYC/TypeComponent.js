import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export default function typographyComponent(props) {
  return (
    <Fragment>
      <Typography variant="h5" gutterBottom>
        {props.head}
      </Typography>
      <Typography variant="body1" style={{ marginBottom: "10px" }}>
        {props.text}
      </Typography>
      <br/><br/>

    </Fragment>
  )}