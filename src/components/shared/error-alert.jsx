import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class ErrorAlert extends Component {
  render() {
    let classes = classNames({
      'alert': true,
      'alert-danger': true,
      'uimessage': true,
      'hidden': this.props.errors.length === 0
    });

    return (
      <ul className={classes}>
        {this.props.errors.map(e => (<li>{e}</li>))}
      </ul>
    );
  }
}

// Prop validation
ErrorAlert.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default ErrorAlert;