import React from 'react';
import {Row,Col,FormGroup, FormControl,ControlLabel,HelpBlock} from 'react-bootstrap';

// this input element takes the following props
// default value - optional default value for the input *Optional*
// controlId - ids for the elements
// name - name
// type - text,file,email,password,
// helpblock - the text for the help block *Optional*

class Input extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
             value: props.value ? props.value : "",
             controlId:props.controlId,
             name:props.name,
             type:props.type,
             helpblock:props.helpblock ? props.helpblock : ""
         }
    }

    //custom form validation
    getValidationState() {
        const length = this.state.value.length;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
        return null;
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    render() {
        return (
            <Row>
                <FormGroup
                    controlId={this.state.controlId}
                    validationState={this.getValidationState()}
                >
                    <Col componentClass={ControlLabel} sm={2}>
                        {this.state.name}
                    </Col>
                    <Col sm={10}>
                        <FormControl
                            type={this.state.type}
                            value={this.state.value}
                            placeholder={this.state.name}
                            onChange={this.handleChange}
                        />
                    </Col>
                    <HelpBlock>{this.state.helpblock}</HelpBlock>
                </FormGroup>
            </Row>
        );
    }
}


export default Input;