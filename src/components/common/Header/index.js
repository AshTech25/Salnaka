import React, { Component } from 'react';

import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
    Hidden,
    Grid,
    SwipeableDrawer,
    Collapse,
    Slide,
    Box,
    Link,
} from '@material-ui/core';
import { List, ListItem, ListItemText, ListItemIcon, ListItemSecondaryAction } from '@material-ui/core';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
// import Slide from '@material-ui/core/Slide';
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import MenuIcon from '@material-ui/icons/Menu';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import BuildIcon from '@material-ui/icons/Build';
import InfoIcon from '@material-ui/icons/Info';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import SalnakaLogo from '../../../images/salnaka_logo.svg';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logOut } from '../../../actions/LoginUser';
import LogoutMenu  from './logout-menu';

function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    // const trigger = useScrollTrigger({ target: window ? window() : undefined });
    const trigger = useScrollTrigger();
    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

const useStyles = withStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },

    dropDownMenu: {
        padding: `${theme.spacing(1)}px ${theme.spacing(10)}px`,
    },

    paper: {
        color: theme.palette.getContrastText(theme.palette.primary.main),
        // paddingTop: theme.mixins.toolbar.minHeight,
        background: theme.palette.primary.main,
        width: 250,
    },
    accordianRoot: {
        color: theme.palette.getContrastText(theme.palette.primary.main),
        border: 'none',
        boxShadow: 'none',
        background: 'transparent',
        padding: 0,
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: 'auto',
        },
    },

    listItems: {
        color: theme.palette.getContrastText(theme.palette.primary.main),
    },

    dropdown: {
        transition: theme.transitions.create(['transform'], {
            duration: theme.transitions.duration.short,
        }),
    },
    dropdownOpen: {
        transform: 'rotate(-180deg)',
    },
    dropdownClosed: {
        transform: 'rotate(0)',
    },
    mr2: {
        marginRight: theme.spacing(2),
    },
    appLogo: {
        height: theme.mixins.toolbar.minHeight - theme.spacing(2),
    },

    appLogoButton: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        [theme.breakpoints.down('xs')]: {
            margin: '0 auto',
            left: -theme.spacing(2),
        },
    },
}));

const navItems = [
    {
        text: 'Services',
        path: null,
        isOpen: false,
        icon: <BuildIcon />,
        children: [
            { text: 'Investment Plan', path: '/invest' },
            { text: 'Tutor Services', path: '/tutor-service' },
        ],
    },
    { text: 'About Us', path: '/about-us', isOpen: false, icon: <InfoIcon />, children: [] },
    { text: 'Support', path: '/support', isOpen: false, icon: <ContactSupportIcon />, children: [] },
    // {
    //     text: 'FAQs',
    //     path: '/',
    //     isOpen: false,
    //     children: [
    //         { text: 'Investment Plan', path: '/invest' },
    //         { text: 'Tutor Services', path: '/' },
    //     ],
    // },
];

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            drawerOpen: false,
            servicesOpen: false,
            showLogin: false,
            showRegister: false,
            showLogout: false,
            navItems: navItems,
            openedNavItemIndex: -1,
        };

        this.classes = props.classes;
        // this.location = useLocation();
    }

    componentWillMount() {
        this.onPathChange(this.props.location.pathname);
        this.unlisten = this.props.history.listen((location, action) => this.onPathChange(location.pathname));
    }
    componentWillUnmount() {
        this.unlisten();
    }

    onPathChange(path) {
        console.log("path",path)
        switch (path) {
            case '/login':
                return this.setState({ showLogin: false, showRegister: true, showLogout: false });
            case '/register':
                return this.setState({ showLogin: true, showRegister: false, showLogout: false });

            case '/invest':
                return this.setState({ showLogin: true, showRegister: true, showLogout: false });
            case '/package-selection':
            case '/dashboard':
            case '/dashboard/profile':
            case '/dashboard/withdrawal-history':
                return this.setState({ showLogin: false, showRegister: false, showLogout: true });

            case '/':
            case '/support':
            case '/KYC':
            case '/AML':
            case '/privacy-policy':
            case '/terms-of-service':
            case '/tutor-service':
            case '/payment-methods':
            default:
                return this.setState({ showLogin: false, showRegister: false, showLogout: false });
        }
    }

    toggleNavItem(index, path, isChild) {
        let { navItems, openedNavItemIndex } = this.state;

        if (!isChild) {
            if (openedNavItemIndex !== -1)
                if (openedNavItemIndex !== index) navItems[openedNavItemIndex].isOpen = false;

            navItems[index].isOpen = !navItems[index].isOpen;

            openedNavItemIndex = navItems[index].isOpen ? index : -1;
            this.setState({ navItems, openedNavItemIndex });
            if (path) {
                this.props.history.push(path);
            }
        } else {
            if (path) {
                this.props.history.push(path);
            }
        }
    }

    openNavItem(index) {
        let { navItems, openedNavItemIndex } = this.state;

        if (openedNavItemIndex !== -1) if (openedNavItemIndex !== index) navItems[openedNavItemIndex].isOpen = false;

        navItems[index].isOpen = true;

        openedNavItemIndex = index;
        this.setState({ navItems, openedNavItemIndex });
    }

    closeAllNav() {
        let { navItems, openedNavItemIndex } = this.state;
        navItems.forEach((item) => {
            item.isOpen = false;
        });
        openedNavItemIndex = -1;
        this.setState({ navItems, openedNavItemIndex });
    }

    drawerList = (classes, showLogin, showRegister, showLogout) => (
        <List style={{ display: 'block' }}>
            <ListItem button>
                <ListItemText disableTypography primary={<Typography variant="h6">Salnaka</Typography>} />
            </ListItem>

            <ListItem>
                {showLogin && (
                    <Button
                        variant="contained"
                        color="secondary"
                        className={showRegister && clsx(classes.mr2)}
                        component={RouterLink}
                        to="/login"
                    >
                        &nbsp;&nbsp;Login&nbsp;&nbsp;
                    </Button>
                )}
                {showRegister && (
                    <Button variant="outlined" component={RouterLink} to="/register">
                        Register
                    </Button>
                )}
            </ListItem>
            {navItems.map((item, index) => (
                <React.Fragment>
                    <ListItem
                        button
                        key={item.text}
                        color="inherit"
                        onClick={() => {
                            this.toggleNavItem(index, item.path);
                        }}
                    >
                        <ListItemIcon classes={{ root: this.classes.listItems }}>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text} classes={{ primary: this.classes.listItems }} />
                        {item.children.length ? (
                            <ListItemSecondaryAction
                                onClick={() => {
                                    this.toggleNavItem(index, item.path);
                                }}
                            >
                                <ExpandMoreIcon
                                    className={clsx([
                                        this.classes.dropdown,
                                        item.isOpen ? this.classes.dropdownOpen : this.classes.dropdownClosed,
                                    ])}
                                />
                            </ListItemSecondaryAction>
                        ) : (
                            ''
                        )}
                    </ListItem>

                    {item.children.length ? (
                        <Collapse in={item.isOpen} collapsedHeight={0}>
                            {item.children.map((child) => (
                                <ListItem
                                    button
                                    onClick={() => {
                                        this.toggleNavItem(index, child.path, true);
                                    }}
                                >
                                    <ListItemText inset primary={child.text} />
                                </ListItem>
                            ))}
                        </Collapse>
                    ) : (
                        ''
                    )}
                </React.Fragment>
            ))}
            {showLogout && (
                <ListItem>
                    <Button
                        color="inherit"
                        endIcon={<ExitToAppIcon />}
                        component={RouterLink}
                        to="/"
                        onClick={() => this.props.logOut()}
                    >
                        Logout
                    </Button>
                </ListItem>
            )}
        </List>
    );

    render() {
        const { servicesOpen, drawerOpen, navItems, showLogin, showRegister, showLogout } = this.state;
        const { classes } = this.props;
        return (
            <HideOnScroll>
                <AppBar position="fixed" onMouseLeave={() => this.closeAllNav()}>
                    <Toolbar>
                        <Hidden smUp>
                            <IconButton
                                edge="start"
                                className={classes.menuButton}
                                color="inherit"
                                aria-label="menu"
                                onClick={() => this.setState({ drawerOpen: true })}
                            >
                                <MenuIcon />
                            </IconButton>

                            <SwipeableDrawer
                                anchor="left"
                                open={drawerOpen}
                                onClose={() => this.setState({ drawerOpen: false })}
                                onOpen={() => this.setState({ drawerOpen: true })}
                                classes={{
                                    paper: classes.paper,
                                }}
                            >
                                {this.drawerList(classes, showLogin, showRegister, showLogout)}
                            </SwipeableDrawer>
                        </Hidden>
                        <Button
                            className={clsx(classes.appLogoButton)}
                            startIcon={<img className={classes.appLogo} src={SalnakaLogo}></img>}
                            component={RouterLink}
                            to="/"
                        >
                            <Typography variant="h6">Salnaka</Typography>
                        </Button>

                        <Hidden xsDown className={classes.root}>
                            <Grid container direction="row" justify="center" spacing={1}>
                                {navItems.map((item, index) => (
                                    <Grid item key={item.text}>
                                        <Button
                                            component={item.path ? RouterLink : 'button'}
                                            to={item.path ? item.path : ''}
                                            color="inherit"
                                            onMouseEnter={() => this.openNavItem(index)}
                                            endIcon={item.children.length ? <ExpandMoreIcon /> : ''}
                                        >
                                            {item.text}
                                        </Button>
                                    </Grid>
                                ))}
                            </Grid>
                        </Hidden>
                        {showLogin && (
                            <Hidden xsDown>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    className={showRegister && clsx(classes.mr2)}
                                    component={RouterLink}
                                    to="/login"
                                >
                                    &nbsp;&nbsp;Login&nbsp;&nbsp;
                                </Button>
                            </Hidden>
                        )}
                        {showRegister && (
                            <Hidden xsDown>
                                <Button variant="outlined" component={RouterLink} to="/register">
                                    Register
                                </Button>
                            </Hidden>
                        )}

                        {showLogout && (

                                /* <Button
                                    color="inherit"
                                    endIcon={<ExitToAppIcon />}
                                    component={RouterLink}
                                    to="/"
                                    onClick={() => this.props.logOut()}
                                >
                                    Logout
                                </Button> */
                                <LogoutMenu onLogoutClick={this.props.logOut}/>

                        )}

                        {!showLogin && !showRegister && !showLogout && (
                            <Hidden xsDown>
                                <Box visibility="hidden ">
                                    <Typography variant="h6">Salnaka</Typography>
                                </Box>
                            </Hidden>
                        )}
                    </Toolbar>

                    <Hidden xsDown>
                        {navItems.map((item) => (
                            <Collapse in={item.isOpen} collapsedHeight={0} key={item.text}>
                                <Grid
                                    container
                                    direction="row"
                                    justify="center"
                                    className={classes.dropDownMenu}
                                    spacing={2}
                                >
                                    {item.children.map((child) => (
                                        <Grid item key={`${item.text}-${child.text}`}>
                                            <Button color="inherit" component={RouterLink} to={child.path}>
                                                {child.text}
                                            </Button>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Collapse>
                        ))}
                    </Hidden>
                </AppBar>
            </HideOnScroll>
        );
    }
}

Header.propTypes = {};

export default connect(null, { logOut })(useStyles(withRouter(Header)));
