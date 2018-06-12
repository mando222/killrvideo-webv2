import {TEST_REDUCE} from "../consts"

const TestReducer = (state = '', action) => {
    switch (action.type) {
        case TEST_REDUCE:
            return {
                ...state,
                testReduce: {
                    test:true
                }
            }
        default:
            return state
    }
}

export default TestReducer








