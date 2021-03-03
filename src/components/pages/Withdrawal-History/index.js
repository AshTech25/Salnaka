import React, { useState, useEffect } from "react";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { connect } from 'react-redux';
import clsx from "clsx";
import PerfectScrollbar from "react-perfect-scrollbar";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	Divider,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	TableSortLabel,
	Tooltip,
} from "@material-ui/core";
import { Grid } from "@material-ui/core";
import Request from "./request";
import {getWithdrawalHistory} from '../../../actions/withdraw';
// import Spinner from '../../Layout/Spinner';
import LoaderFullScreen from '../../common/LoaderFullScreen';

const useStyles = makeStyles((theme) => ({
    root: {
		padding: theme.spacing(3),
	},
	container: {
		"& > *": {
			height: "100%",
		},
	},
	content: {
		padding: 0,
	},
	inner: {
		minWidth: 700,
	},
	progressContainer: {
		padding: theme.spacing(3),
		display: "flex",
		justifyContent: "center",
	},
	actions: {
		justifyContent: "flex-end",
	},
	arrowForwardIcon: {
		marginLeft: theme.spacing(1),
	},
}));


const WithdrwalRequestsHistory = (props) => {
	const { className,allStates,getWithdrawalHistory, ...rest } = props;

	const classes = useStyles();
    const { loading,requests } = allStates
	

	useEffect(() => {
        getWithdrawalHistory();

		return () => {};
    }, []);

	return (
            <Grid className={classes.container} container spacing={3}>
                <Grid item lg={12} xs={12}>
                    <Card {...rest} className={clsx(classes.root, className)}>
                        <CardHeader 
                            // action={<GenericMoreButton />} 
                            title="Withdrawal Requests History" />
                        <Divider />
                        <CardContent className={classes.content}>
                            <PerfectScrollbar options={{ suppressScrollY: true, suppressScrollX: true }} component="div">
                                <div className={classes.inner}>
                                    {loading && requests.length == 0 ?
                                    <LoaderFullScreen/>:null
                                    }
                                    {(requests && requests.length) ? (
                                        <Table>
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell sortDirection="desc">
                                                        <Tooltip enterDelay={300} title="Sort">
                                                            <TableSortLabel active direction="desc">
                                                                Date
                                                            </TableSortLabel>
                                                        </Tooltip>
                                                    </TableCell>
                                                    <TableCell>Transaction Id</TableCell>
                                                    <TableCell>Description</TableCell>
                                                    <TableCell>Amount</TableCell>
                                                    {/* <TableCell>Action</TableCell> */}
                                                    <TableCell>Status</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {requests.map((req) => (
                                                    <Request key={req._id} req={req} />
                                                ))}
                                            </TableBody>
                                        </Table>
                                    ):null}
                                </div>
                            </PerfectScrollbar>
                        </CardContent>
                        <CardActions className={classes.actions}>
                            {/* <Button
                                color="primary"
                                component={RouterLink}
                                size="small"
                                to="management/orders"
                                variant="text"
                            >
                                See all
                                <ArrowForwardIcon className={classes.arrowForwardIcon} />
                            </Button> */}
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
	);
};

WithdrwalRequestsHistory.propTypes = {
	className: PropTypes.string,
};

const mapStateToProps = state => ({
    allStates: state.Withdrawal
});

export default connect(mapStateToProps, { getWithdrawalHistory })(WithdrwalRequestsHistory);