import React from 'react';
import {Row,Col,FormGroup, FormControl,ControlLabel,HelpBlock} from 'react-bootstrap';


// ToDo:
//add retype password part and validation to go with
//remove bad value handle from event handler


// this input element takes the following props
// value - default value for the input *Optional*
// controlId - ids for the elements
// name - name
// type - text,file,email,password,
// helpblock - the text for the help block *Optional*

class Input extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.handleChange = this.handleChange.bind(this);
        this.setValidationState = this.setValidationState.bind(this);
        this.state = {
             value: "",
            passwordRetype:"",
            name:props.name,
            error:null
         }
    }


    setValidationState(errorState) {
        //valid values success,warning,error,null
        this.setState({
            ...this.state,
            error: errorState
        });
    }

    handleChange(event) {
        // custom form validation
        var value = event.target.value;
        switch(this.props.type) {
            case "password":
                console.log(this.state);
                if (event.target.name === "retypePassword") {
                    this.setState({
                        ...this.state,
                        passwordRetype: value
                    });
                } else if (event.target.name === this.state.name){
                    this.setState({
                        ...this.state,
                        value: value
                    });
                }else{
                    console.log("An error occurred with password validation.");
                }
                if (
                    value !=="" &&
                    (
                        (value === this.state.value && event.target.name === "retypePassword") ||
                        (value === this.state.passwordRetype && event.target.name === this.state.name)
                    )
                ) {
                    //if the values and password retype match then submit value
                    event.target.name = this.state.name;
                    this.props.onChange(event);
                    this.setValidationState('success');
                }else{
                    //if the values and password retype don't match then clear value
                    event.target.name = this.state.name;
                    event.target.value = "";
                    this.props.onChange(event);
                    this.setValidationState('error');
                }
                break;
            case "text":
                if (value.length < 3){
                    this.setValidationState('warning');
                }else{
                    this.props.onChange(event);
                    this.setValidationState('success');
                }
                break;
            case "email":
                function isValidEmailAddress(emailAddress) {
                    var pattern = new RegExp(/^(("[\w-+\s]+")|([\w-+]+(?:\.[\w-+]+)*)|("[\w-+\s]+")([\w-+]+(?:\.[\w-+]+)*))(@((?:[\w-+]+\.)*\w[\w-+]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][\d]\.|1[\d]{2}\.|[\d]{1,2}\.))((25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\.){2}(25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\]?$)/i);
                    return pattern.test(emailAddress);
                }
                if (!isValidEmailAddress(value)){
                    this.setValidationState('warning');
                }else {
                    this.props.onChange(event);
                    this.setValidationState('success');
                }
                break;
            case "file":
                this.props.onChange(event);
                this.setValidationState('success');
                break;
            default:
                console.log("not a valid type for input element");
        }
    }

    render() {
        return (
            <div>
                <Row>
                    <FormGroup
                        controlId={this.props.controlId}
                        validationState={this.state.error}
                    >
                        <Col componentClass={ControlLabel} sm={2}>
                            {this.props.label}
                        </Col>
                        <Col sm={10}>
                            <FormControl
                                type={this.props.type}
                                name={this.props.name}
                                value={this.props.type == "password" ? this.state.value : this.props.value}
                                placeholder={this.props.label}
                                onChange={(e) => { this.handleChange(e)}}
                            />
                        </Col>
                        <HelpBlock>{this.props.helpblock}</HelpBlock>
                    </FormGroup>
                </Row>
                {this.props.type == "password" ?
                    <Row>
                        <FormGroup
                            controlId={this.props.controlId+"retype"}
                            validationState={this.state.error}
                        >
                            <Col componentClass={ControlLabel} sm={2}>
                                Retype Password
                            </Col>
                            <Col sm={10}>
                                <FormControl
                                    type="password"
                                    name="retypePassword"
                                    value={this.state.passwordRetype}
                                    placeholder="Retype Password"
                                    onChange={(e) => { this.handleChange(e)}}
                                />
                            </Col>
                        </FormGroup>
                    </Row>
                    :null
                }
            </div>
        );
    }
}

export default Input;