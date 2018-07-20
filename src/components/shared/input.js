import React from 'react';
import {Row,Col,FormGroup, FormControl,ControlLabel,HelpBlock} from 'react-bootstrap';


// ToDo:
//add retype password part and validation to go with
//remove bad value handle from event handler


// this input element takes the following props
// value - value for the input
// controlId - ids for the elements
// name - name
// type - text,file,email,password,
// helpblock - the text for the help block *Optional*

class Input extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
             value: "",
             passwordRetype:""
         }
    }

    // custom form validation
    getValidationState() {
        const length = this.state.value.length;
        if (length > 2) return 'success';
        else if (length > 1) return 'warning';
        else if (length > 0) return 'error';
        return null;
    }

    handleChange(event) {
        //extra validation here
        var value = event.target.value;
        switch(this.props.type) {
            case "password":
                console.log("---------------")
                console.log("retype password")
                console.log(this.state.passwordRetype)
                console.log("state value")
                console.log(this.state.value)
                console.log("props value")
                console.log(this.props.value)
                console.log(this.state)
                if (this.state.value ==="" && this.state.value === this.state.passwordRetype) {
                    this.props.onChange(event)
                }else{
                    if (event.target.name === "retypePassword") {
                        this.setState({
                            ...this.state,
                            passwordRetype: value
                        });
                    } else {
                        this.setState({
                            ...this.state,
                            value: value
                        });
                    }
                }
                break;
            case "text":
                this.props.onChange(event)
                break;
            case "email":
                this.props.onChange(event)
                break;
            case "file":
                this.props.onChange(event)
                break;
            default:
                console.log("not a valid type for input element")
        }
    }

    render() {
        return (
            <div>
                <Row>
                    <FormGroup
                        controlId={this.props.controlId}
                        validationState={this.getValidationState()}
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
                            validationState={this.getValidationState()}
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