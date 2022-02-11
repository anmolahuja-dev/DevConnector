import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

// ...rest means anything else we pass along with component
const PrivateRoute = ({ children, auth: { isAuthenticated, loading } }) =>
  !isAuthenticated && !loading ? <Navigate to='/login' /> : children;

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
