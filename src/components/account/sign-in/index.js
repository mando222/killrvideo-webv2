import React from 'react';
import { connect } from 'react-redux';

import { Row, Col, Panel, Button } from 'react-bootstrap';
import SignInForm from './sign-in-form';
import { login } from '../../../actions/UserActions';

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
  // let {
  //   authentication: {
  //     currentUser: { isLoggedIn }
  //   }
  // } = state;
  //
  // return { isLoggedIn };
    return {
        currentUser: state.UserReducer.currentUser,
    };
}



const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        redirectToRegister() {

        },
        login() {

        }

    }
}

const SignIn = connect(
    mapStateToProps,
    mapDispatchToProps
)(SignInContainer)

export default SignIn;