import React from "react";
import Loader from "./Loader";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    height: "100vh",
  },

  loader: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign:"center"
  },
}));

function LoaderFullScreen(props) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.loader}>
        {props.text ? <Typography color="primary" variant="h4" >{props.text}</Typography> : ""}
        <Loader />
      </div>
    </div>
  );
}

export default LoaderFullScreen;
