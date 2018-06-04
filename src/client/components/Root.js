import React from 'react'
import { connect } from 'react-redux'

class Root extends React.Component{
    render() {
        return (
            <div>
                <a>hi there</a>
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
    }
}

const RootContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Root)

export default RootContainer