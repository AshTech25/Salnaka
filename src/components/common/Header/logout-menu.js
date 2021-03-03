import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function LogoutMenu({onLogoutClick}) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
       <IconButton
            aria-label="more"
            aria-controls="logout-menu"
            aria-haspopup="true"
            onClick={handleClick}
        >
            <MoreVertIcon />
        </IconButton>
        <Menu
            id="logout-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
            <MenuItem onClick={handleClose} component={RouterLink} to="/dashboard/profile">Profile</MenuItem>
            <MenuItem onClick={handleClose} component={RouterLink} to="/dashboard/withdrawal-history">Withdrawal History</MenuItem>
            <MenuItem onClick={e =>{handleClose();onLogoutClick()}} component={RouterLink} to="/">Logout</MenuItem>
        </Menu>
    </div>
  );
}

LogoutMenu.prototype = {
    onLogoutClick: PropTypes.func.isRequired
}