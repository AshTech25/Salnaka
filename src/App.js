import React, { useEffect } from 'react';
import './App.css';
import { ThemeProvider } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import theme from './theme';
import Registration from './components/pages/Login_Registration/Registration';
import Login from './components/pages/Login_Registration/Login';
// import Loader from "./components/common/LoaderFullScreen";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Packages from './components/pages/Packages/packages';
import PrivateRoute from './components/pages/routing/PrivateRoute';
import Header from './components/common/Header/index';
import LandingPage from './components/pages/landing';
import FourZeroFour from './components/pages/404';
import Support from './components/pages/support';
import Terms from './components/pages/security_texts/index';
import Privacy from './components/pages/security_texts/privacypolicy';
import Dashboard from './components/pages/dashboard/index';
import Footer from './components/common/Footer';
import TutorService from './components/pages/tutor';
import Alert from './components/pages/Alert/Alert';
import PaymentMethod from './components/pages/payment-methods/LandingPage';
import Investment from './components/pages/Investment';
import AboutUS from './components/pages/AboutUs';
import KYC from './components/pages/KYC';
import AML from './components/pages/AML';
import PaymentInstructions from './components/pages/Instructions';
import { SnackbarProvider, useSnackbar } from 'notistack';
import { SetToken } from './setToken/SetToken';
import { loadUser } from './actions/LoginUser';
import SelectPackage from './components/pages/SelectPackage/index';
import Profile from './components/pages/Profile';
import WithdrwalRequestsHistory from './components/pages/Withdrawal-History';
import store from './store';

var token = localStorage.getItem('token');

if (token) {
    SetToken(token);
}
function App() {
    useEffect(() => {
        store.dispatch(loadUser());
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <SnackbarProvider maxSnack={3}>
                <BrowserRouter>
                    <Header />
                    <div style={{ paddingTop: theme.mixins.toolbar.minHeight }}>
                        <Alert />
                        <Switch>
                            <PrivateRoute exact path="/dashboard" component={Dashboard} />
                            <Route exact path="/dashboard/profile" component={Profile} />
                            <Route exact path="/dashboard/withdrawal-history" component={WithdrwalRequestsHistory} />
                            <Route exact path="/" component={LandingPage} />
                            <Route exact path="/register" component={Registration} />
                            <Route exact path="/login" component={Login} />
                            <Route exact path="/support" component={Support} />
                            <Route exact path="/about-us" component={AboutUS} />

                            <Route exact path="/terms-of-service" component={Terms} />
                            <Route exact path="/privacy-policy" component={Privacy} />
                            <Route exact path="/tutor-service" component={TutorService} />

                            <Route exact path="/error" component={FourZeroFour} />
                            <Route exact path="/payment-methods" component={PaymentMethod} />
                            <Route exact path="/package-selection" component={SelectPackage} />
                            <Route exact path="/payment-instructions" component={PaymentInstructions} />
                            {/*<Route exact path="/packages" component={Packages} /> */}

                            <Route exact path="/invest" component={Investment} />
                            <Route exact path="/KYC" component={KYC} />
                            <Route exact path="/AML" component={AML} />

                            <Route path="/" component={FourZeroFour} />
                        </Switch>
                    </div>
                    <Footer />
                </BrowserRouter>
            </SnackbarProvider>
        </ThemeProvider>
    );
}

App.propTypes = {
    error: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
    error: state.RegisterUser.error,
});

export default connect(mapStateToProps)(App);
