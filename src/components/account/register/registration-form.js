import React from 'react';
import { Row, Col, Button, Alert, FormGroup, FormControl,ControlLabel} from 'react-bootstrap';
import { reduxForm } from 'redux-form';
import { validateForm } from '../../../lib/validation';
import Icon from '../../shared/icon';
import Input from '../../shared/Input';

function handleSubmit (){

}

function handleChange(e, v){
    console.log(e);
    console.log(v);
}

class RegistrationFormContainer extends React.Component {
    render() {
        return (
            <form role="form">
                {/*<Alert bsStyle="info" className={error ? 'hidden' : undefined}>*/}
                    {/*Register for an account to upload and comment on videos.*/}
                {/*</Alert>*/}
                {/*<Alert bsStyle="danger" className={error ? undefined : 'hidden'}>*/}
                    {/*{error}*/}
                {/*</Alert>*/}

                <div id="register-account-fields">
                    <Input
                        controlId="formHorizontalFirstName"
                        name="First Name"
                        type="text"
                    />
                    <Input
                        controlId="formHorizontalLastName"
                        name="Last Name"
                        type="text"
                    />
                    <Input
                        controlId="formHorizontalEmail"
                        name="Email"
                        type="email"
                    />
                    <Input
                        controlId="formHorizontalPassword"
                        name="Password"
                        type="password"
                    />
                    <Input
                        controlId="formHorizontalRetypePassword"
                        name="Retype Password"
                        type="password"
                    />
                </div>
                <FormGroup>
                    <Col smOffset={2} sm={10}>
                        <Button type="submit">
                            {/*<Icon name="cog" animate="spin" className={submitting ? undefined : 'hidden'} />*/}
                            Register
                        </Button>
                    </Col>
                </FormGroup>
            </form>
        );
    }
}

// Connect the form to the store
const RegistrationForm = (RegistrationFormContainer);

export default RegistrationForm