import React from 'react'
import { connect } from 'react-redux'
import {buttonClick} from "../actions/TestActions"

class Root extends React.Component{
    render() {
        return (
            <div>
                <a>hi there</a>
                <button onTouchTap={this.props.buttonClick}>click</button>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
    }

}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        buttonClick: () => {
            dispatch(buttonClick())
        }

    }
}

const RootContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Root)

export default RootContainer