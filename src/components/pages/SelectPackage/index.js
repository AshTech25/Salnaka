import React, { useState, useEffect, Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ProjectsBackground from '../../../images/background.jpg';
import axios from 'axios';
import { connect } from 'react-redux';
import { setAlert } from '../../../actions/Alert';
import { Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Plan from '../../common/plan';

const useStyles = makeStyles((theme) => ({
    section: {
        position: 'relative',
        minHeight: '100vh',
        padding: '35px 0',
    },
    firstSection: {
        position: 'relative',
        height: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`,
    },
    projectsBackground: {
        minHeight: '100vh',
        background: `url(${ProjectsBackground}) no-repeat center center/cover`,
        opacity: 0.8,
    },
    darkOverlay: {
        padding: '35px 0',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        width: '100%',
        height: '100%',
    },
    cardHeader: {
        backgroundColor: theme.palette.grey[300],
    },
}));

const PackageSelection = ({ user, setAlert }) => {
    const classes = useStyles();
    let pkg;
    const [packages, setPackages] = useState([]);
    const history = useHistory();

    const onClick = async (e, { _id, name }) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        let config = {
            headers: {
                authorization: 'Bearer ' + token,
            },
        };
        // const body= JSON.stringify({ _id: id,package: name})
        const body = { _id, package: name };
        try {
            const res = await axios.put(`${process.env.REACT_APP_AXIOS_BASE_URL}/user/packageSelection`, body, config);

            history.push('/dashboard');
        } catch (err) {
            setAlert([{ msg: 'Oops! something went wrong.' }]);
            console.log(err.response);
        }
    };

    useEffect(() => {
        let mounted = true;
        const getResponse = async () => {
            const token = localStorage.getItem('token');
            let config = {
                headers: {
                    authorization: 'Bearer ' + token,
                },
            };
            const res = await axios.get(`${process.env.REACT_APP_AXIOS_BASE_URL}/user/packages`, config);
            pkg = res.data.success.packages;
            setPackages(pkg.sort((a, b) => a.profitRate - b.profitRate));
        };
        const fetchData = async () => {
            try {
                if (mounted) {
                    getResponse();
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();

        return () => {
            mounted = false;
        };
    }, []);

    if (user) {
        if (user.packageStatus === 'Pending' && user.package) {
            return <Redirect to="/payment-instructions" />;
        } else if (user.package) {
            return <Redirect to="/dashboard" />;
        }
    }

    return (
        <Fragment>
            <section className={classes.projectsBackground}>
                <div className={classes.darkOverlay}>
                    <Grid
                        container
                        justify="center"
                        alignItems="center"
                        spacing={2}
                        style={{ minHeight: '100vh', maxWidth: '100vw', overflow: 'hidden', paddingLeft: '8px' }}
                    >
                        <Grid item xs={11} style={{ color: '#fff' }}>
                            <Typography variant="h4" component="h1" align="center">
                                Select Packages
                            </Typography>
                        </Grid>
                        {packages.length > 0 ? (
                            packages.map((pack, index) => (
                                <Grid item xs={12} sm={5} md={4} lg={3}>
                                    <Plan position={index} data={pack} onButtonClick={onClick} />
                                </Grid>
                            ))
                        ) : (
                            <Grid item xs={11} style={{ color: '#fff' }}>
                                <Typography variant="h5" component="h1" gutterBottom align="center">
                                    No Packages to Show
                                </Typography>
                            </Grid>
                        )}
                    </Grid>
                </div>
            </section>
        </Fragment>
    );
};

const mapStateToProps = (state) => ({
    user: state.LoginUser.user,
});

export default connect(mapStateToProps, { setAlert })(PackageSelection);
