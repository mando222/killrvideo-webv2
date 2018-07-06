
import React from 'react';
import { Button, Alert } from 'react-bootstrap';
import { reduxForm } from 'redux-form';
import { validateForm } from '../../../lib/validation';

import Input from '../../shared/input';
import Icon from '../../shared/icon';

class SignInForm extends React.Component {
  render() {
    const { fields: { email, password }, handleSubmit, submitting, error } = this.props;
    
    return (
      <form role="form" onSubmit={handleSubmit}>
        <Alert bsStyle="info" className={error ? 'hidden' : undefined}>
          If you've already got an account, sign in with your email address and password below.
        </Alert>
        <Alert bsStyle="danger" className={error ? undefined : 'hidden'}>{error}</Alert>
        
        <div id="signin-fields">
          <Input {...email} id="signin-email" type="email" placeholder="Enter email address" label="Email address" focusOnMount />
          <Input {...password} id="signin-password" type="password" placeholder="Password" label="Password" />
        </div>

        <Button type="submit" bsStyle="primary" block disabled={submitting}>
          <Icon name="cog" animate="spin" className={submitting ? undefined : 'hidden'} /> Sign In
        </Button>
      </form>
    );
  }
}

// Validation constraints
const constraints = {
  email: { presence: true, email: true },
  password: { presence: true }
};

// Connect the form to the store
export default reduxForm({
  form: 'signIn',
  fields: [ 'email', 'password' ],
  touchOnBlur: false,
  validate: vals => validateForm(vals, constraints)
})(SignInForm);