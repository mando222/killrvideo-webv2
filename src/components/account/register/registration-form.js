import React from 'react';
import { Row, Col, Button, Alert, FormGroup, FormControl,ControlLabel} from 'react-bootstrap';
import { reduxForm } from 'redux-form';
import { validateForm } from '../../../lib/validation';
import Icon from '../../shared/icon';
import Input from '../../shared/Input';

class RegistrationFormContainer extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            requirementsFilled:true,
            formData:{
            },
        }
    }

    handleSubmit(formData){
        if(formData.email && formData.firstName && formData.lastName && formData.password){
            console.log("success")
            this.setState({
                ...this.state,
                requirementsFilled: false
            });
        }else{
            console.log("failure")
            this.setState({
                ...this.state,
                requirementsFilled: true
            });
        }
        console.log(formData)
    }

    handleChange(event){
        var value = event.target.value;
        var key = event.target.name;
        this.setState({
            ...this.state,
            formData: {
                ...this.state.formData,
                [key]: value
            }
        });
    }

    render() {
        return (
            <form role="form" onSubmit={this.handleSubmit}>
                {/*<Alert bsStyle="info" className={error ? 'hidden' : undefined}>*/}
                    {/*Register for an account to upload and comment on videos.*/}
                {/*</Alert>*/}
                {/*<Alert bsStyle="danger" className={error ? undefined : 'hidden'}>*/}
                    {/*{error}*/}
                {/*</Alert>*/}
                <a hidden={this.state.requirementsFilled}>
                    {this.state.formData.firstName && this.state.formData.firstName !== "" ? null : "Missing First Name" + <br/>}+
                    {this.state.formData.lastName && this.state.formData.lastName !== "" ? null : "Missing Last Name" + <br/>}+
                    {this.state.formData.email && this.state.formData.email !== "" ? null : "Missing Email" + <br/>}+
                    {this.state.formData.password && this.state.formData.password !== "" ? null: "Missing password or passwords don't match"}

                </a>
                <div id="register-account-fields">
                    <Input
                        controlId="formHorizontalFirstName"
                        name="firstName"
                        label="First Name"
                        type="text"
                        value={this.state.formData.firstName}
                        onChange={(v) => { this.handleChange(v)}}
                    />
                    <Input
                        controlId="formHorizontalLastName"
                        name="lastName"
                        label="Last Name"
                        type="text"
                        value={this.state.formData.lastName}
                        onChange={(v) => { this.handleChange(v)}}
                    />
                    <Input
                        controlId="formHorizontalEmail"
                        name="email"
                        label="Email"
                        type="email"
                        value={this.state.formData.email}
                        onChange={(v) => { this.handleChange(v)}}
                    />
                    <Input
                        controlId="formHorizontalPassword"
                        name="password"
                        label="Password"
                        type="password"
                        value={this.state.formData.password}
                        onChange={(v) => { this.handleChange(v)}}
                    />
                </div>
                <FormGroup>
                    <Col smOffset={2} sm={10}>
                        <Button onClick={() => {this.handleSubmit(this.state.formData)}}>
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