import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({ component: Component, LoginUser: { Authenticated, loading }, ...rest }) => (
  <Route
        {...rest}
        render={(props) => (!Authenticated && !loading ? <Redirect to="/login" /> : <Component {...props} />)}
    />
    
);

PrivateRoute.propTypes = {
    LoginUser: PropTypes.object.isRequired,
};


const mapStateToProps = (state) => ({
  LoginUser:state.LoginUser
  
});

export default connect(mapStateToProps)(PrivateRoute);
