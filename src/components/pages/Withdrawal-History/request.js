import React from "react";
import PropTypes from "prop-types";
import {
	Button,
	TableCell,
	TableRow,
	MenuItem,
	TextField,
} from "@material-ui/core";
import * as moment from 'moment';

const allStatus = {
	Pending:"orange",
	Approved:"green",
	Denied:"red"
}

const formatDate = (date) => {
    let formattedDate = moment(date).format('YYYY-MM-DD')
    return formattedDate;
}

export default function RequestHistory(props) {
	const { req } = props;

	return (
		<TableRow hover>
			<TableCell>{formatDate(req.updatedAt)}</TableCell>
			<TableCell>{req._id}</TableCell>
			<TableCell>
				{req.description}
			</TableCell>
			<TableCell>{req.amount.toFixed(2)}</TableCell>
			{/* <TableCell>{req.action}</TableCell> */}
			<TableCell style={{ color: allStatus[req.status] }}>
				{req.status}
			</TableCell>
		</TableRow>
	);
}
