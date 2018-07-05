
import React from 'react';
import { connect } from 'react-redux';
import { routeActions } from 'react-router-redux';

import { Row, Col } from 'react-bootstrap';
import RegistrationForm from './registration-form';
import { register } from '../../../actions/UserActions';

class RegisterContainer extends React.Component {
  componentWillReceiveProps(nextProps) {
    // Redirect the user after registering and being logged in
    if (this.props.currentUser.isLoggedIn !== nextProps.currentUser.isLoggedIn && nextProps.currentUser.isLoggedIn === true) {
      const { location: { state } } = this.props;
      if (state && state.redirectAfterLogin) {
        this.props.push(state.redirectAfterLogin);
      } else {
        this.props.push('/');
      }
    }
  }

  render() {
    return (
      <div id="register-account" className="body-content container">
        <Row>
          <Col md={6} mdOffset={3}>
            <h2>Register</h2>
            <RegistrationForm onSubmit={vals => this.props.register(vals.firstName, vals.lastName, vals.email, vals.password)} />
          </Col>
        </Row>
      </div>
    );
  }
}

function mapStateToProps(state) {
    currentUser: state.UserReducer.currentUser
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {

    }
}


const Register = connect(
    mapStateToProps,
    mapDispatchToProps
)(RegisterContainer)
export default Register;