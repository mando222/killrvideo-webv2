
import React from 'react';
import { connect } from 'react-redux';
import { routeActions } from 'react-router-redux';

import { Row, Col, Panel, Button } from 'react-bootstrap';
import SignInForm from './sign-in-form';
import { login } from 'actions/authentication';

class SignInContainer extends React.Component {
  componentWillReceiveProps(nextProps) {
    // Redirect once logged in
    if (this.props.isLoggedIn !== nextProps.isLoggedIn && nextProps.isLoggedIn === true) {
      const { location: { state } } = this.props;
      if (state && state.redirectAfterLogin) {
        this.props.push(state.redirectAfterLogin);
      } else {
        this.props.push('/');
      }
    }
  }
  
  redirectToRegister() {
    // Redirect and pass along any state in case we need to redirect after login
    const { location: { state } } = this.props;
    this.props.push({
      pathname: '/account/register',
      state
    });
  }
  
  render() {
    return (
      <div className="body-content container">
        <Row>
          <Col md={4} mdOffset={4}>
            <Panel header="Sign In" id="signin-account">
              <SignInForm onSubmit={vals => this.props.login(vals.email, vals.password)} />
              
              <div className="section-divider text-center muted">
                <span>New to KillrVideo?</span>
              </div>
              
              <Button bsStyle="default" block onClick={() => this.redirectToRegister()}>
                Register for an Account
              </Button>
            </Panel>
          </Col>
        </Row>
      </div>
    );
  }
}

function mapStateToProps(state) {
  let { 
    authentication: { 
      currentUser: { isLoggedIn } 
    } 
  } = state;
  
  return { isLoggedIn };
}



const SignIn = connect(
    mapStateToProps,
    mapDispatchToProps
)(SignInContainer)

export default SignIn;